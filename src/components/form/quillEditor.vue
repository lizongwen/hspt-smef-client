<template>
<!-- <div></div> -->
	<quill-editor v-model="content" ref="myTextEditor" :options="editorOption" @change="onChange" placeholder="111">
		<div id="toolbar" slot="toolbar">
			<span class="ql-formats">
				<button type="button" class="ql-bold"></button>
			</span>
			<span class="ql-formats">
				<button type="button" class="ql-italic"></button>
			</span>
			<span class="ql-formats">
				<button type="button" class="ql-underline"></button>
			</span>
			<span class="ql-formats">
				<button type="button" class="ql-strike"></button>
			</span>
			<span class="ql-formats">
				<button type="button" class="ql-blockquote"></button>
			</span>
			<span class="ql-formats">
				<button type="button" class="ql-code-block"></button>
			</span>
			<span class="ql-formats">
				<button type="button" class="ql-header" value="1"></button>
			</span>
			<span class="ql-formats">
				<button type="button" class="ql-header" value="2"></button>
			</span>
			<span class="ql-formats">
				<button type="button" class="ql-list" value="ordered"></button>
			</span>
			<span class="ql-formats">
				<button type="button" class="ql-list" value="bullet"></button>
			</span>
			<span class="ql-formats">
				<button type="button" class="ql-script" value="sub"></button>
			</span>
			<span class="ql-formats">
				<button type="button" class="ql-script" value="super"></button>
			</span>
			<span class="ql-formats">
				<button type="button" class="ql-indent" value="-1"></button>
			</span>
			<span class="ql-formats">
				<button type="button" class="ql-indent" value="+1"></button>
			</span>
			<span class="ql-formats">
				<button type="button" class="ql-direction" value="rtl"></button>
			</span>
			<span class="ql-formats">
				<select class="ql-size">
					<option value="small">10px</option>
					<option selected>14px</option>
					<option value="large">18px</option>
					<option value="huge">32px</option>
				</select>
			</span>
			<span class="ql-formats">
				<select class="ql-header">
					<option value="1"></option>
					<option value="2"></option>
					<option value="3"></option>
					<option value="4"></option>
					<option value="5"></option>
					<option value="6"></option>
					<option selected="selected"></option>
				</select>
			</span>
			<span class="ql-formats">
				<select class="ql-color">
					<option selected="selected"></option>
					<option value="#e60000"></option>
					<option value="#ff9900"></option>
					<option value="#ffff00"></option>
					<option value="#008a00"></option>
					<option value="#0066cc"></option>
					<option value="#9933ff"></option>
					<option value="#ffffff"></option>
					<option value="#facccc"></option>
					<option value="#ffebcc"></option>
					<option value="#ffffcc"></option>
					<option value="#cce8cc"></option>
					<option value="#cce0f5"></option>
					<option value="#ebd6ff"></option>
					<option value="#bbbbbb"></option>
					<option value="#f06666"></option>
					<option value="#ffc266"></option>
					<option value="#ffff66"></option>
					<option value="#66b966"></option>
					<option value="#66a3e0"></option>
					<option value="#c285ff"></option>
					<option value="#888888"></option>
					<option value="#a10000"></option>
					<option value="#b26b00"></option>
					<option value="#b2b200"></option>
					<option value="#006100"></option>
					<option value="#0047b2"></option>
					<option value="#6b24b2"></option>
					<option value="#444444"></option>
					<option value="#5c0000"></option>
					<option value="#663d00"></option>
					<option value="#666600"></option>
					<option value="#003700"></option>
					<option value="#002966"></option>
					<option value="#3d1466"></option>
				</select>
			</span>
			<span class="ql-formats">
				<select class="ql-background">
					<option value="#000000"></option>
					<option value="#e60000"></option>
					<option value="#ff9900"></option>
					<option value="#ffff00"></option>
					<option value="#008a00"></option>
					<option value="#0066cc"></option>
					<option value="#9933ff"></option>
					<option selected="selected"></option>
					<option value="#facccc"></option>
					<option value="#ffebcc"></option>
					<option value="#ffffcc"></option>
					<option value="#cce8cc"></option>
					<option value="#cce0f5"></option>
					<option value="#ebd6ff"></option>
					<option value="#bbbbbb"></option>
					<option value="#f06666"></option>
					<option value="#ffc266"></option>
					<option value="#ffff66"></option>
					<option value="#66b966"></option>
					<option value="#66a3e0"></option>
					<option value="#c285ff"></option>
					<option value="#888888"></option>
					<option value="#a10000"></option>
					<option value="#b26b00"></option>
					<option value="#b2b200"></option>
					<option value="#006100"></option>
					<option value="#0047b2"></option>
					<option value="#6b24b2"></option>
					<option value="#444444"></option>
					<option value="#5c0000"></option>
					<option value="#663d00"></option>
					<option value="#666600"></option>
					<option value="#003700"></option>
					<option value="#002966"></option>
					<option value="#3d1466"></option>
				</select>
			</span>
			<span class="ql-formats">
				<select class="ql-font">
					<option selected="selected">标准字体</option>
					<option value="serif">衬线字体</option>
					<option value="monospace">等宽字体</option>
				</select>
			</span>
			<span class="ql-formats">
				<select class="ql-align">
					<option selected="selected"></option>
					<option value="center"></option>
					<option value="right"></option>
					<option value="justify"></option>
				</select>
			</span>
			<span class="ql-formats">
				<button type="button" class="ql-clean"></button>
			</span>
			<span class="ql-formats">
				<button type="button" class="ql-link"></button>
			</span>
			<span class="ql-formats">
				<button type="button" @click="fileClick('image')">
					<svg viewBox="0 0 18 18">
						<rect class="ql-stroke" height="10" width="12" x="3" y="4"></rect>
						<circle class="ql-fill" cx="6" cy="7" r="1"></circle>
						<polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12">
						</polyline>
					</svg>
				</button>
			</span>
			<span class="ql-formats" @click="fileClick('video')">
				<button type="button">
					<svg viewBox="0 0 18 18">
						<rect class="ql-stroke" height="12" width="12" x="3" y="3"></rect>
						<rect class="ql-fill" height="12" width="1" x="5" y="3"></rect>
						<rect class="ql-fill" height="12" width="1" x="12" y="3"></rect>
						<rect class="ql-fill" height="2" width="8" x="5" y="8"></rect>
						<rect class="ql-fill" height="1" width="3" x="3" y="5"></rect>
						<rect class="ql-fill" height="1" width="3" x="3" y="7"></rect>
						<rect class="ql-fill" height="1" width="3" x="3" y="10"></rect>
						<rect class="ql-fill" height="1" width="3" x="3" y="12"></rect>
						<rect class="ql-fill" height="1" width="3" x="12" y="5"></rect>
						<rect class="ql-fill" height="1" width="3" x="12" y="7"></rect>
						<rect class="ql-fill" height="1" width="3" x="12" y="10"></rect>
						<rect class="ql-fill" height="1" width="3" x="12" y="12"></rect>
					</svg>
				</button>
			</span>
			<span class="ql-formats">
			</span>
		</div>
	</quill-editor>
</template>
<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
// import { async } from "@/config/fetch";
export default {
  components: {
    quillEditor
  },
  props: {
    /*编辑器的内容*/
    value: {
      type: String
    },
    /*图片大小*/
    maxSize: {
      type: Number,
      default: 400 //kb
    }
  },
  data() {
    return {
      content: "",
      editorOption: {
        modules: {
          toolbar: "#toolbar"
        },
        placeholder: "您想说点什么？"
      }
    };
  },
  methods: {
    onChange() {
      this.$emit("input", this.content);
    },

    /*裁切上传成功 res根据上传接口值获取*/
    onUploadSuccess: function(res) {
      this.editor.focus();
      this.editor.insertEmbed(
        this.editor.getSelection().index,
        "image",
        res.url
      );
    },
    /*点击上传图片按钮*/
    fileClick(type) {
      var _this = this;
      /*创建input file*/
      var input = document.createElement("input");
      input.type = "file";
      if (type == "image") {
        input.accept = "image/jpeg,image/png,image/jpg,image/gif";
      } else {
        input.accept = "video/mp4,video/mpeg,video/3gpp,image/gif";
      }
      input.onchange = onFileChange;
      input.click();

      /*选择上传图片/视频切换*/
      function onFileChange(e) {
        // var fileInput = e.target;
        // console.log(fileInput);
        // if (fileInput.files.length == 0) {
        //   return;
        // }
        // console.log(fileInput.files[0]);
        // var data = new FormData();
        // data.append("files", fileInput.files[0]);
        // async("/newsController/uploadNewsFile.do", data, "FORM", {
        //   contentType: ""
        // })
        //   .then(data => {
        //     var red = data.data[0];
        //     _this.editor.focus();
        //     if (type == "image") {
        //       _this.editor.insertEmbed(
        //         _this.editor.getSelection().index,
        //         "image",
        //         red.compressPhotoUrl
        //       );
        //     } else {
        //       _this.editor.insertEmbed(
        //         _this.editor.getSelection().index,
        //         "video",
        //         red.photoUrl
        //       );
        //     }
        //   })
        //   .catch(function(err) {
        //     console.log(err);
        //     _this.$notify.error({
        //       title: "错误",
        //       message: "上传失败"
        //     });
        //   });
      }
    }
  },
  computed: {
    editor() {
      return this.$refs.myTextEditor.quill;
    }
  },

  mounted() {
    this.content = this.value;
  },
  watch: {
    value(newVal, oldVal) {
      if (this.editor) {
        if (newVal !== this.content) {
          this.content = newVal;
        }
      }
    }
  }
};
</script>
<style>
.ql-picker-label {
  display: block !important;
  line-height: 24px;
}
.ql-picker-label::before {
  display: block !important;
}
.ql-tooltip {
  z-index: 100;
}
.ql-action::after {
  content: "保存" !important;
}
.ql-tooltip[data-mode="link"]::before {
  content: "输入链接:" !important;
}
.ql-tooltip[data-mode="video"]::before {
  content: "输入视频:" !important;
}
</style>