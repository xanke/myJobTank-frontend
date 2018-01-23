<template>
    <div :class="[prefixCls]" ref="upload">
        <div
            :class="classes"
            @click="handleClick"
            @drop.prevent="onDrop"
            @dragover.prevent="dragOver = true"
            @dragleave.prevent="dragOver = false">
            <input
                ref="input"
                type="file"
                :class="[prefixCls + '-input']"
                @change="handleChange"
                :multiple="multiple"
                :accept="accept">
            <!-- <slot></slot> -->

            <!-- <transition name="fade"> -->
              <div :style="{width: progress + '%'}" :class="[prefixCls + '-progress']">
                <div :style="{width: domWitdh + 'px'}" class="ivu-upload-content top">
                  <span v-if="fileList.length > 0" class="num">{{progress}}%</span>
                  <Icon v-else class="icon-upload" :type="icon"></Icon>
                  <slot name="content-top"></slot>
                </div>
              </div>
            <!-- </transition> -->
            <div class="ivu-upload-content">
                <span v-if="fileList.length > 0" class="num">{{progress}}%</span>
                <Icon v-else class="icon-upload" :type="icon"></Icon>
              <slot name="content"></slot>
            </div>
            <div class="ivu-upload-content error top" v-if="uploadError">
              <slot name="content-error"></slot>
            </div>

        </div>
        <slot name="tip"></slot>
        <!-- <upload-list
            v-if="showUploadList"
            :files="fileList"
            @on-file-remove="handleRemove"
            @on-file-preview="handlePreview"></upload-list> -->
    </div>
</template>
<script>
import UploadList from './upload-list.vue'
import ajax from './ajax'
import { oneOf } from '../../utils/assist'
import Emitter from '../../mixins/emitter'

const prefixCls = 'ivu-upload'

export default {
  name: 'Upload',
  mixins: [Emitter],
  components: { UploadList },
  props: {
    icon: {
      type: String,
      default: 'wl-upload'
    },
    action: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: false
    },
    headers: {
      type: Object,
      default() {
        return {}
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object
    },
    name: {
      type: String,
      default: 'file'
    },
    withCredentials: {
      type: Boolean,
      default: false
    },
    showUploadList: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      validator(value) {
        return oneOf(value, ['select', 'drag'])
      },
      default: 'select'
    },
    format: {
      type: Array,
      default() {
        return []
      }
    },
    accept: {
      type: String
    },
    maxSize: {
      type: Number
    },
    beforeUpload: Function,
    onProgress: {
      type: Function,
      default() {
        return {}
      }
    },
    onSuccess: {
      type: Function,
      default() {
        return {}
      }
    },
    onError: {
      type: Function,
      default() {
        return {}
      }
    },
    onRemove: {
      type: Function,
      default() {
        return {}
      }
    },
    onPreview: {
      type: Function,
      default() {
        return {}
      }
    },
    onExceededSize: {
      type: Function,
      default() {
        return {}
      }
    },
    onFormatError: {
      type: Function,
      default() {
        return {}
      }
    },
    defaultFileList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      dragOver: false,
      fileList: [],
      tempIndex: 1,
      domWitdh: 0,
      uploadError: false,
      progress: 0
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-select`]: this.type === 'select',
          [`${prefixCls}-drag`]: this.type === 'drag',
          [`${prefixCls}-dragOver`]: this.type === 'drag' && this.dragOver
        }
      ]
    }
  },
  mounted() {
    this.domWitdh = this.$refs.upload.clientWidth
    // console.log(this.$refs.upload.clientWidth)
  },
  methods: {
    handleClick() {
      this.$refs.input.click()
    },
    handleChange(e) {
      const files = e.target.files

      if (!files) {
        return
      }
      this.uploadFiles(files)
      this.$refs.input.value = null
    },
    onDrop(e) {
      this.dragOver = false
      this.uploadFiles(e.dataTransfer.files)
    },
    uploadFiles(files) {
      let postFiles = Array.prototype.slice.call(files)
      if (!this.multiple) postFiles = postFiles.slice(0, 1)

      if (postFiles.length === 0) return

      postFiles.forEach(file => {
        this.upload(file)
      })
    },
    upload(file) {
      this.uploadError = false

      clearInterval(this.progressTimer)
      this.progressTimer = 0

      this.progressTimer = setInterval(() => {
        this.progress++
      }, 50)

      if (!this.beforeUpload) {
        return this.post(file)
      }

      const before = this.beforeUpload(file)
      if (before && before.then) {
        before.then(
          processedFile => {
            if (
              Object.prototype.toString.call(processedFile) === '[object File]'
            ) {
              this.post(processedFile)
            } else {
              this.post(file)
            }
          },
          () => {
            // this.$emit('cancel', file);
          }
        )
      } else if (before !== false) {
        this.post(file)
      } else {
        // this.$emit('cancel', file);
      }
    },
    post(file) {
      // check format
      if (this.format.length) {
        const _file_format = file.name
          .split('.')
          .pop()
          .toLocaleLowerCase()
        const checked = this.format.some(
          item => item.toLocaleLowerCase() === _file_format
        )
        if (!checked) {
          this.onFormatError(file, this.fileList)
          return false
        }
      }

      // check maxSize
      if (this.maxSize) {
        if (file.size > this.maxSize * 1024) {
          this.onExceededSize(file, this.fileList)
          return false
        }
      }

      this.handleStart(file)
      let formData = new FormData()
      formData.append(this.name, file)

      ajax({
        headers: this.headers,
        withCredentials: this.withCredentials,
        file: file,
        data: this.data,
        filename: this.name,
        action: this.action,
        onProgress: e => {
          this.handleProgress(e, file)
        },
        onSuccess: res => {
          this.handleSuccess(res, file)
        },
        onError: (err, response) => {
          this.handleError(err, response, file)
        }
      })
    },
    handleStart(file) {
      file.uid = Date.now() + this.tempIndex++
      const _file = {
        status: 'uploading',
        name: file.name,
        size: file.size,
        percentage: 0,
        uid: file.uid,
        showProgress: true
      }

      this.fileList.push(_file)
    },
    getFile(file) {
      const fileList = this.fileList
      let target
      fileList.every(item => {
        target = file.uid === item.uid ? item : null
        return !target
      })
      return target
    },
    handleProgress(e, file) {
      const _file = this.getFile(file)
      this.onProgress(e, _file, this.fileList)
      _file.percentage = e.percent || 0
    },
    // 上传成功
    handleSuccess(res, file) {
      const _file = this.getFile(file)

      clearInterval(this.progressTimer)
      this.progress = 100

      if (_file) {
        _file.status = 'finished'
        _file.response = res

        this.dispatch('FormItem', 'on-form-change', _file)
        this.onSuccess(res, _file, this.fileList)

        setTimeout(() => {
          _file.showProgress = false
        }, 1000)
      }
    },
    // 上传失败
    handleError(err, response, file) {
      const _file = this.getFile(file)
      const fileList = this.fileList

      _file.status = 'fail'
      // fileList.splice(fileList.indexOf(_file), 1)
      console.log('err')
      this.uploadError = true
      this.onError(err, response, file)
    },
    handleRemove(file) {
      const fileList = this.fileList
      fileList.splice(fileList.indexOf(file), 1)
      this.onRemove(file, fileList)
    },
    handlePreview(file) {
      if (file.status === 'finished') {
        this.onPreview(file)
      }
    },
    clearFiles() {
      this.fileList = []
    }
  },
  watch: {
    defaultFileList: {
      immediate: true,
      handler(fileList) {
        this.fileList = fileList.map(item => {
          item.status = 'finished'
          item.percentage = 100
          item.uid = Date.now() + this.tempIndex++
          return item
        })
      }
    }
  }
}
</script>
