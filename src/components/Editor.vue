<template lang="pug">
  div.has-background-black-ter
    .field.is-horizontal
      .field-body
        .field.has-addons
          p.control.is-expanded
            ValidationProvider(name="title" rules="required")
              div(slot-scope="{errors}")
                input.input.has-background-black-ter.has-text-light(type="text" placeholder="제목을 입력해주세요" v-model="title")
                Message(:body="errors[0]")
          p.control
            span.select
              select(v-model="sort").has-background-black-ter.has-text-light
                option.has-text-light(v-for="option in options") {{ option }}
    editor-menu-bar(:editor="editor" v-slot="{ commands, isActive }")
      div.buttons.has-background-black-ter.mb-0.ml-2
        button.button(:class="{ 'is-active': isActive.bold() }" @click="commands.bold")
          span.icon
            font-awesome-icon(icon="bold")
        button.button(:class="{ 'is-active': isActive.italic() }" @click="commands.italic")
          span.icon
            font-awesome-icon(icon="italic")
        button.button(:class="{ 'is-active': isActive.underline() }" @click="commands.underline")
          span.icon
            font-awesome-icon(icon="underline")
        button.button(:class="{ 'is-active': isActive.strike() }" @click="commands.strike")
          span.icon
            font-awesome-icon(icon="strikethrough")
        button.button(@click="showImagePrompt(commands.image)")
          span.icon
            font-awesome-icon(icon="image")
        button.button(:class="{ 'is-active': isActive.bullet_list() }" @click="commands.bullet_list")
          span.icon
            font-awesome-icon(icon="list-ul")
        button.button(:class="{ 'is-active': isActive.ordered_list() }" @click="commands.ordered_list")
          span.icon
            font-awesome-icon(icon="list-ol")
    editor-content.content.editor__content.mb-0(:editor="editor")
    .field.is-horizontal.mb-0
      .field-body
        input.input.has-background-black-ter.has-text-light(type="text" placeholder="태그를 입력해주세요 예) 태그1 태그2" v-model="tags")
    button.button.is-fullwidth.is-outlined.is-white(@click="onClick") 글쓰기
</template>

<script lang="ts">
import Vue from 'vue';
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import {
  Bold,
  Italic,
  Underline,
  Strike,
  Image,
  ListItem,
  BulletList,
  OrderedList,
} from 'tiptap-extensions';
import { Command } from 'tiptap-commands';
import { extend, ValidationProvider } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import Message from '@/components/common/Message.vue';
import { Post, PostForm } from '@/types/post';

extend('required', {
  ...required,
  message: '값을 입력해야합니다.',
});

export default Vue.extend({
  components: {
    EditorContent, EditorMenuBar, ValidationProvider, Message,
  },
  props: ['post'],
  data() {
    return {
      title: '',
      options: ['자유게시판', '공지사항', '게임', '콘솔'],
      sort: '자유게시판',
      content: '',
      tags: '',
      editor: null,
    };
  },
  methods: {
    showImagePrompt(command: Command) {
      const src = prompt('이미지 URL을 입력해 주세요');
      if (src !== null) {
        command({ src });
      }
    },
    onClick() {
      const data: PostForm = {
        title: this.title,
        content: this.content,
        sort: this.sort,
        tags: this.tags,
        UserId: this.$store.state.user.user.id,
      };
      if (this.$route.params.post) {
        const payload = {
          id: this.$route.params.post.id,
          data: data,
        };
        this.$store.dispatch('post/update', payload)
          .then(() => {
            this.$router.push({ name: 'home' });
          });
      } else {
        this.$store.dispatch('post/write', data)
          .then(() => {
            this.$router.push({ name: 'home' });
          });
      }
    },
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  mounted() {
    let content = '';
    const post = this.$route.params.post;

    if (this.$route.params.post) {
      // @ts-ignore
      this.title = post.title;
      // @ts-ignore
      this.sort = post.sort;
      // @ts-ignore
      content = post.content;
      // @ts-ignore
      this.tags = post.tags;
    }
    this.editor = new Editor({
      autoFocus: true,
      extensions: [
        new Bold(),
        new Italic(),
        new Underline(),
        new Strike(),
        new Image(),
        new ListItem(),
        new BulletList(),
        new OrderedList(),
      ],
      onUpdate: ({ getHTML }) => {
        this.content = getHTML();
      },
      content: content,
    });
  },
});
</script>

<style lang="scss" scoped>
input {
  &::placeholder {
    color: hsl(0, 0%, 86%);
  }

  &:focus {
    border-color: hsl(0, 0%, 86%);
    box-shadow: inherit;
  }
}



.select {

  &::after {
    border-color: hsl(0, 0%, 100%) !important;
  }

  &:focus {
    border-color: hsl(0, 0%, 86%);
    box-shadow: inherit;
  }
}

.button {
  border: none !important;
}

.is-active {
  background: hsl(0, 0, 86%) !important;
}

// ProseMirror
</style>

<style lang="scss">
// 에디터 전용 CSS
.editor {
  // 전체 높이 - navbar - input - input-margin - buttons - tags-input - button

  &__content {

    min-height: calc(100vh - 3.25rem - 40px - 0.75rem - 48px - 40px - 40px) !important;

    div {
      min-height: calc(100vh - 3.25rem - 40px - 0.75rem - 48px - 40px - 40px) !important;
    }

    p {
      color: hsl(0, 0%, 96%);
      margin-bottom: 0 !important;
    }

    p strong {
      color: hsl(0, 0%, 100%);
      font-weight: bold;
    }

    ul, ol {
      color: hsl(0, 0%, 100%);
    }
  }
}
</style>
