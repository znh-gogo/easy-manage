<template>
  <div style="padding: 10px 20px;min-height:500px;background:#fff">
    <h1 style="margin-top:0">账户列表</h1>
    <!-- 按钮组-->
    <buttonGroup
    @addAccount="dialogTitle = '新增用户',dialogVisible = true"
    @reset="doReset"/>
    <!-- 表格-->
    <tableBody
    :tableData="tableData"
    :controller="controller"
    @handleSelectionChange="getSelectItems"
    >
      <template slot-scope="list">
        <el-button type="default" size="small" @click="check(list.scope.row)">编辑</el-button>
        <el-button type="danger" size="small" @click="deleteItem(list.scope.row)">删除</el-button>
      </template>
    </tableBody>

      <el-dialog :title="dialogTitle" :visible.sync="dialogVisible">
      <el-form :model="form">
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="form.account" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮件" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input v-model="form.nickname" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

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
     check(e){
       this.dialogTitle = '编辑详情'
       this.dialogVisible = true
       this.form = e
       console.log(e)
     },
      submit(){
        this.dialogVisible = false
        // console.log(this.form)
        let form = new FormData()
                  form.append("account",this.form.account)
                  form.append("email",this.form.email)
                  form.append("phone",this.form.phone)
                  form.append("nickname",this.form.nickname)
        if(this.dialogTitle === '新增用户'){
          
          this.$http.addAccount(form).then(res=>{
            console.log(res.data.success)
            if(res.data.success){
              this.$message.success(res.data.message)
              this.getAccountList()
            }
          })
        } else if(this.dialogTitle === '编辑详情') {
          form.append("id",this.form.id)
          this.$http.updateAccount(form).then(res=>{
            console.log(res.data.success)
            if(res.data.success){
              this.$message.success(res.data.message)
              this.getAccountList()
            }
          })
        }

        this.form={
          account:'',
          email:'',
          phone:'',
          nickname:''
        }

      },
      doReset(){
        this.tableData.items = []
        this.getAccountList()
      },
      deleteItem(e){
        let form = new FormData()
        form.append("id",e.id)
        this.$http.deleteAccount(form).then(res=>{
            if(res.data.success){
              this.$message.success(res.data.message)
              this.getAccountList()
            }
          })
      },
      getAccountList(){
        this.$http.showAccount().then(res=>{
          this.tableData.items = res.data
        })
      },
      getSelectItems(e){
        console.log(e)
      }
    },
    created(){
       this.getAccountList()
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
          tableNameList:[
            {prop:'id',label:'id',width:120,sortable:'sortable'},
            {prop:'account',label:'帐户名'},
            {prop:'email',label:'邮箱',sortable:'sortable'},
            {prop:'phone',label:'手机',sortable:'sortable'},
            {prop:'nickname',label:'名称'}
            ],
          items:[{
            id:'1',
            account:'123',
            email:'32132131',
            telephone:11255588,
            nickname:'jack'
          },
          {
            id:'2',
            account:'444',
            email:'3213552131',
            telephone:13355224,
            nickname:'mike'
          }]
        },
        controller:{
          isActive:true
        },
        dialogVisible: false,
        userDetails: '',
        searchInfo:'',
        formLabelWidth: '120px',
        form:{
          account:'',
          email:'',
          phone:'',
          nickname:''
        },
        dialogTitle:''
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