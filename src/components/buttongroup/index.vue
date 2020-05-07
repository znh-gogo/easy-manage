<template>
    <div>
      <el-form :inline="true" class="demo-form-inline">
          <div class="btn">
              <div><el-button @click="$emit('addAccount')">新增用户</el-button></div>
              <div>
              <el-form-item label="请输入">
                <el-input placeholder="请输入账户"></el-input>
              </el-form-item>
                <el-form-item>
                    <el-button-group>
                        <el-button icon="el-icon-search">查询</el-button>
                        <el-button icon="el-icon-upload">上传</el-button>
                        <el-button icon="el-icon-download">下载</el-button>
                        <el-button icon="el-icon-delete" @click="$emit('reset')">重置</el-button>
                    </el-button-group>
                </el-form-item>
          </div>
          </div>
      </el-form>
  </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
.btn{
    display: flex;
    justify-content: space-between;
}
</style>