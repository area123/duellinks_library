<template lang="pug">
  div
    editor-menu-bar(:editor="editor" v-slot="{ commands, isActive }")
      div.buttons
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
        button.button(@click="showImagePropmpt(commands.image)")
          span.icon
            font-awesome-icon(icon="image")
        button.button(:class="{ 'is-active': isActive.bullet_list() }" @click="commands.bullet_list")
          span.icon
            font-awesome-icon(icon="list-ul")
        button.button(:class="{ 'is-active': isActive.ordered_list() }" @click="commands.ordered_list")
          span.icon
            font-awesome-icon(icon="list-ol")
    editor-content.content(:editor="editor")
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
  name: 'Editor',
  components: { EditorContent, EditorMenuBar },
  data() {
    return {
      editor: new Editor({
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
      }),
      content: null,
    };
  },
  methods: {
    showImagePropmpt(command: Command) {
      const src = prompt('이미지 URL을 입력해 주세요');
      if (src !== null) {
        command({ src });
      }
    },
  },
  beforeDestroy() {
    this.editor.destroy();
  },
});
</script>

<style lang="scss" scoped>
button {
  border: none;
}

//hr {
//  display: block !important;
//  margin: 0 !important;
//  padding: 0 !important;
//  box-sizing: border-box !important;
//  font-size: 18px !important;
//  color: #000 !important;
//  line-height: 1.5 !important;
//  background-color: #000 !important;
//  caret-color: currentColor !important;
//}

.is-active {
  background: hsl(0, 0, 86%);
}

.content {
  & > div {
    height: 400px;
  }
}
</style>
