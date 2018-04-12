<template>
    <div>
        <el-dialog
        title="提示"
        :visible.sync="vis"
        width="30%"
        :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="close">取 消</el-button>
            <el-button type="primary" @click="close">确 定</el-button>
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