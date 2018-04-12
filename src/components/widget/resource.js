export default {
  props: {
    vis: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      console.log("dialog close...")
    },
    close() {
        this.$emit("close");
    }
  }
}
