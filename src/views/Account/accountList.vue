<template>
<div style="padding: 10px 20px;min-height:500px;background:#fff">
  <h1 style="margin-top:0">账户列表</h1>
  <!-- 按钮组-->
  <buttonGroup/>
  <!-- 表格-->
  <tableBody :tableData="tableData" :controller="controller">
    <template slot-scope="list">
      <el-button type="default" size="small" @click="test(list.scope.row)">查看</el-button>
    </template>
  </tableBody>

  
  </div>
</template>

<script>
import {ADMIN} from '../../api/globol'
import buttonGroup from '../../components/buttongroup/index'
import tableBody from '../../components/tablebody/index'
  export default {
    components:{
      buttonGroup,tableBody
    },
    methods: {
     
      changePage(e){
        console.log(e)
        this.numPage=e
        this.fetchUsers()
      },
     test(e){
       console.log(e)
     }
      
    },
    created(){
       
    },

    data() {
      return {
        tableData: {
          BeanPage:{
            numPage:1,
            numSize:5,
            allPages:10,
            count:50
          },
          items:[{
            account:'123',
            email:'32132131'
          },
          {
            account:'444',
            email:'3213552131'
          }]
        },
        controller:{
          isActive:true
        },
        dialogVisible: false,
        userDetails: '',
        searchInfo:''
      }
    }
  }
</script>

<style scoped>
.dialogInfo{
  flex:1;
  margin-left:10px
}
.dialogInfo div{
  margin-bottom: 10px;
}
</style>