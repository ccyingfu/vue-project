<template>
    <div>
        <el-dialog
        title="Tip"
        :visible.sync="vis"
        width="30%"
        :before-close="handleClose">
        <span>This is a message about testing component...</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="close">Cancel</el-button>
            <el-button type="primary" @click="close">True</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
import resource from "./resource";
export default {
  name: "widget",
  mixins: [resource]
};
</script>

<style scoped>

</style>