
<template>
  <Card>
    <Card style='margin-bottom: 20px'>
      <p slot='title'>编辑器</p>
      <quill-editor v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)">
    </quill-editor>
  </Card>
  <Card>
      <p slot='title'>html代码</p>
      <div>
        {{content}}
      </div>
    </quill-editor>
  </Card>
</Card>
</template>

<script>
  export default {
    name: 'DEditor',
    data () {
      return {
        content: '<h2>这里是一行字yo!</h2>',
        editorOption: {
          // some quill options
        }
      }
    },
    // manually control the data synchronization
    // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
    methods: {
      onEditorBlur(quill) {
        console.log('editor blur!', quill)
      },
      onEditorFocus(quill) {
        console.log('editor focus!', quill)
      },
      onEditorReady(quill) {
        console.log('editor ready!', quill)
      },
      onEditorChange({ quill, html, text }) {
        console.log('editor change!', quill, html, text)
        this.content = html
      }
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    mounted() {
      console.log('this is current quill instance object', this.editor)
    }
  }

</script>