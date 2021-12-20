<template>
  <canvas ref="sign" @touchstart="ontouchstart" @touchmove="ontouchmove" @touchend="ontouchend"></canvas>
</template>
<script>
export default {
  name: 'Sign',
  props: {
    shape: {
      type: String,
      default: 'round'
    },
    backgroundColor: {
      type: String,
      default: '#ffffff'
    },
    lineColor: {
      type: String,
      default: '#000000'
    },
    lineWidth: {
      type: [String, Number],
      default: 1
    }
  },
  data() {
    return {
      hasDraw: false
    }
  },
  computed: {
    canvas() {
      return this.$refs.sign
    },
    ctx() {
      return this.canvas.getContext('2d')
    },
    room() {
      return this.canvas.parentNode
    },
    width() {
      return this.room.clientWidth
    },
    height() {
      return this.room.clientHeight
    },
    offsetX() {
      return this.room.getBoundingClientRect().left
    },
    offsetY() {
      return this.room.getBoundingClientRect().top
    }
  },
  mounted() {
    this.initDraw()
  },
  methods: {
    initDraw() {
      this.canvas.width = this.width
      this.canvas.height = this.height
      this.ctx.fillStyle = this.backgroundColor
      this.ctx.fillRect(0, 0, this.width, this.height)
      this.ctx.strokeStyle = this.lineColor
      this.ctx.lineWidth = this.lineWidth
      this.ctx.lineCap = this.shape
    },
    getPoint(e) {
      const { clientX, clientY } = e.changedTouches[0]
      const x = clientX - this.offsetX
      const y = clientY - this.offsetY
      return [x, y]
    },
    ontouchstart(e) {
      this.hasDraw = true
      this.ctx.beginPath()
      this.ctx.moveTo(...this.getPoint(e))
    },
    ontouchmove(e) {
      this.ctx.lineTo(...this.getPoint(e))
      this.ctx.stroke()
    },
    ontouchend(e) {
      this.ctx.closePath()
    },
    clear() {
      this.hasDraw = false
      this.ctx.clearRect(0, 0, this.width, this.height)
      this.ctx.fillRect(0, 0, this.width, this.height)
    },
    getBlob(mimeType, quality) {
      return new Promise(resolve => this.canvas.toBlob(blob => resolve(blob)), mimeType, quality)
    },
    getBase64(mimeType, quality) {
      return this.canvas.toDataURL(mimeType, quality)
    }
  }
}
</script>
