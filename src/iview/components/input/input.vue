<template>
    <div :class="wrapClasses">


        <template v-if="type == 'birthday'">
            <div :class="[prefixCls + '-group-prepend']" v-if="prepend" v-show="slotReady"><slot name="prepend"></slot></div>
            <i class="ivu-icon" :class="['ivu-icon-' + icon, prefixCls + '-icon', prefixCls + '-icon-normal']" v-if="icon" @click="handleIconClick"></i>
            <i class="ivu-icon" :class="['ivu-icon-wl-close', prefixCls + '-icon', prefixCls + '-icon-normal', prefixCls + '-clear-btn']" v-if="clearBtn" @click="handleClearClick"></i>


            <transition name="fade">
                <i class="ivu-icon ivu-icon-load-c ivu-load-loop" :class="[prefixCls + '-icon', prefixCls + '-icon-validate']" v-if="!icon"></i>
            </transition>


            <vue-birthday-input
              ref="input"
              :class="inputClasses"
              :placeholder="placeholder"
              :format="format"
              :formatView="formatView"

              :name="name"
              :value="currentValue"


            ></vue-birthday-input>
            <!-- <input
                :id="elementId"
                :autocomplete="autocomplete"
                :spellcheck="spellcheck"
                ref="input"
                :type="type"
                :class="inputClasses"
                :placeholder="placeholder"
                :disabled="disabled"
                :maxlength="maxlength"
                :readonly="readonly"
                :name="name"
                :value="currentValue"
                :number="number"
                :autofocus="autofocus"
                @keyup.enter="handleEnter"
                @keyup="handleKeyup"
                @keypress="handleKeypress"
                @keydown="handleKeydown"
                @focus="handleFocus"
                @blur="handleBlur"
                @input="handleInput"
                @change="handleChange"> -->
            <div :class="[prefixCls + '-group-append']" v-if="append" v-show="slotReady"><slot name="append"></slot></div>
        </template>

        <textarea
            v-else-if="type == 'textarea'"
            :id="elementId"
            :autocomplete="autocomplete"
            :spellcheck="spellcheck"
            ref="textarea"
            :class="textareaClasses"
            :style="textareaStyles"
            :placeholder="placeholder"
            :disabled="disabled"
            :rows="rows"
            :maxlength="maxlength"
            :readonly="readonly"
            :name="name"
            :value="currentValue"
            :autofocus="autofocus"
            @keyup.enter="handleEnter"
            @keyup="handleKeyup"
            @keypress="handleKeypress"
            @keydown="handleKeydown"
            @focus="handleFocus"
            @blur="handleBlur"
            @input="handleInput">
        </textarea>

        <template v-else>
            <div :class="[prefixCls + '-group-prepend']" v-if="prepend" v-show="slotReady"><slot name="prepend"></slot></div>
            <i class="ivu-icon" :class="['ivu-icon-' + icon, prefixCls + '-icon', prefixCls + '-icon-normal']" v-if="icon" @click="handleIconClick"></i>
            <i class="ivu-icon" :class="['ivu-icon-wl-close', prefixCls + '-icon', prefixCls + '-icon-normal', prefixCls + '-clear-btn']" v-if="clearBtn" @click="handleClearClick"></i>


            <transition name="fade">
                <i class="ivu-icon ivu-icon-load-c ivu-load-loop" :class="[prefixCls + '-icon', prefixCls + '-icon-validate']" v-if="!icon"></i>
            </transition>
            <input
                :id="elementId"
                :autocomplete="autocomplete"
                :spellcheck="spellcheck"
                ref="input"
                :type="type"
                :class="inputClasses"
                :placeholder="placeholder"
                :disabled="disabled"
                :maxlength="maxlength"
                :readonly="readonly"
                :name="name"
                :value="currentValue"
                :number="number"
                :autofocus="autofocus"
                @keyup.enter="handleEnter"
                @keyup="handleKeyup"
                @keypress="handleKeypress"
                @keydown="handleKeydown"
                @focus="handleFocus"
                @blur="handleBlur"
                @input="handleInput"
                @change="handleChange">
            <div :class="[prefixCls + '-group-append']" v-if="append" v-show="slotReady"><slot name="append"></slot></div>
        </template>


    </div>
</template>
<script>
import vueBirthdayInput from 'vue-birthday-input'

import { oneOf, findComponentUpward } from '../../utils/assist'
import calcTextareaHeight from '../../utils/calcTextareaHeight'
import Emitter from '../../mixins/emitter'

const prefixCls = 'ivu-input'

export default {
  name: 'Input',
  mixins: [Emitter],
  components: {
    vueBirthdayInput
  },
  props: {
    type: {
      validator(value) {
        return oneOf(value, ['text', 'textarea', 'password'])
      },
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    size: {
      validator(value) {
        return oneOf(value, ['small', 'large', 'default'])
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: String,
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    rows: {
      type: Number,
      default: 2
    },
    readonly: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    number: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    spellcheck: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      validator(value) {
        return oneOf(value, ['on', 'off'])
      },
      default: 'off'
    },
    elementId: {
      type: String
    },
    clearBtn: {
      type: Boolean,
      default: false
    },

    format: {
      type: String
    },
    formatView: {
      type: String
    }
  },
  data() {
    return {
      currentValue: this.value,
      prefixCls: prefixCls,
      prepend: true,
      append: true,
      slotReady: false,
      textareaStyles: {}
    }
  },
  computed: {
    wrapClasses() {
      return [
        `${prefixCls}-wrapper`,
        {
          [`${prefixCls}-wrapper-${this.size}`]: !!this.size,
          [`${prefixCls}-type`]: this.type,
          [`${prefixCls}-group`]: this.prepend || this.append,
          [`${prefixCls}-group-${this.size}`]:
            (this.prepend || this.append) && !!this.size,
          [`${prefixCls}-group-with-prepend`]: this.prepend,
          [`${prefixCls}-group-with-append`]: this.append,
          [`${prefixCls}-hide-icon`]: this.append // #554
        }
      ]
    },
    inputClasses() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-disabled`]: this.disabled
        }
      ]
    },
    textareaClasses() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-disabled`]: this.disabled
        }
      ]
    }
  },
  methods: {
    handleEnter(event) {
      this.$emit('on-enter', event)
    },
    handleKeydown(event) {
      this.$emit('on-keydown', event)
    },
    handleKeypress(event) {
      this.$emit('on-keypress', event)
    },
    handleKeyup(event) {
      this.$emit('on-keyup', event)
    },
    handleIconClick(event) {
      this.$emit('on-click', event)
    },
    //清空内容
    handleClearClick(event) {
      this.currentValue = ''
    },
    handleFocus(event) {
      this.$emit('on-focus', event)
    },
    handleBlur(event) {
      this.$emit('on-blur', event)
      if (
        !findComponentUpward(this, [
          'DatePicker',
          'TimePicker',
          'Cascader',
          'Search'
        ])
      ) {
        this.dispatch('FormItem', 'on-form-blur', this.currentValue)
      }
    },
    handleInput(event) {
      let value = event.target.value
      if (this.number)
        value = Number.isNaN(Number(value)) ? value : Number(value)
      this.$emit('input', value)
      this.setCurrentValue(value)
      this.$emit('on-change', event)
    },
    handleChange(event) {
      this.$emit('on-input-change', event)
    },
    setCurrentValue(value) {
      if (value === this.currentValue) return
      this.$nextTick(() => {
        this.resizeTextarea()
      })
      this.currentValue = value
      if (
        !findComponentUpward(this, [
          'DatePicker',
          'TimePicker',
          'Cascader',
          'Search'
        ])
      ) {
        this.dispatch('FormItem', 'on-form-change', value)
      }
    },
    resizeTextarea() {
      const autosize = this.autosize
      if (!autosize || this.type !== 'textarea') {
        return false
      }

      const minRows = autosize.minRows
      const maxRows = autosize.maxRows

      this.textareaStyles = calcTextareaHeight(
        this.$refs.textarea,
        minRows,
        maxRows
      )
    },
    focus() {
      if (this.type === 'textarea') {
        this.$refs.textarea.focus()
      } else {
        this.$refs.input.focus()
      }
    },
    blur() {
      if (this.type === 'textarea') {
        this.$refs.textarea.blur()
      } else {
        this.$refs.input.blur()
      }
    }
  },
  watch: {
    value(val) {
      this.setCurrentValue(val)
    }
  },
  mounted() {
    if (this.type !== 'textarea') {
      this.prepend = this.$slots.prepend !== undefined
      this.append = this.$slots.append !== undefined
    } else {
      this.prepend = false
      this.append = false
    }
    this.slotReady = true
    this.resizeTextarea()
  }
}
</script>
