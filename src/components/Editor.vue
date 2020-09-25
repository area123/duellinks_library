<template lang="pug">
  div
    .field.is-horizontal.has-addons
      .field-body
        .control
        input.input(type="text" placeholder="제목을 입력해주세요" v-model="title")
        .control
          p.control
            span.select
              select(v-model="sort")
                option(selected) {{ sort_list[0] }}
                option(v-for="n in 3") {{ sort_list[n] }}
    editor-menu-bar(:editor="editor" v-slot="{ commands, isActive }")
      div.buttons(ref="aa")
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
    editor-content.content.editor__content(:editor="editor")
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

export default Vue.extend({
  components: {
    EditorContent, EditorMenuBar,
  },
  data() {
    return {
      title: '',
      sort_list: ['자유게시판', '덱 리스트', '이벤트', '파밍'],
      sort: '',
      content: '',
      tags: '',
      editor: new Editor({
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
          this.content = getHTML;
        },
        content: 'test',
      }),
    };
  },
  methods: {
    showImagePrompt(command: Command) {
      const src = prompt('이미지 URL을 입력해 주세요');
      if (src !== null) {
        command({ src });
      }
    },
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  mounted() {
    console.log(this.$refs.aa.offsetHeight);
  },
});
</script>

<style lang="scss" >
.button {
  border: none !important;
}

.is-active {
  background: hsl(0, 0, 86%) !important;
}

.ProseMirror {
  // 전체 높이 - navbar - input - input-margin - buttons - buttons-margin
  min-height: calc(100vh - 3.25rem - 40px - 0.75rem - 48px - 1rem);
}
</style>
