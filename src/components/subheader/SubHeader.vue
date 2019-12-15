<template>
    <div class="header">
        <div style="align-items:center;display:flex;">
            <el-button type="text" :icon="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" @click="handleCollapse" style="font-size:28px;color:#666;outline:none"></el-button>
            <!-- <div style="margin-left:20px;font-size:20px;font-weight:700;">{{authflag === 0?'商家端':'管理端'}}</div> -->
        </div>
        <div style="align-items:center;display:flex;">
            <div class="header-dropdown">
                <i :class="{icon:true,'ion-md-expand':!isFullScreen,'ion-md-contract':isFullScreen}" style="font-size:20px;"
                    @click.stop="handleChangeFullScreen"></i>
            </div>
            <img :src="headimg" style="width:30px;height:30px;border-radius:50%;" v-if="headimg!==''"/>
            <img src="../../assets/head.jpg" style="width:30px;height:30px;border-radius:50%;" v-else/>
            <span style="margin:0 15px">{{username||'admin'}}</span>
            <el-dropdown style="cursor: pointer;">
            <i class="el-icon-setting" style="margin-right: 15px;color:#666">设置<el-badge is-dot class="item"/></i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <!-- <el-dropdown-item v-if="authflag === 0" @click.native="paybackapply">退款申请<el-badge class="mark" :value="paybacknum" v-if="paybacknum!==0" /></el-dropdown-item> -->
                <el-dropdown-item @click.native="logout">退出登陆</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </div>
        
    </div>
</template>

<script>
import screenfull from 'screenfull';
export default {
    props:{
        headimg:{
            type:String,
            default:''
        },
        username:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            isFullScreen: false,
            isCollapse:false
        }
    },
    methods:{
        handleChangeFullScreen() {
          if (screenfull.isEnabled) {
              screenfull.toggle();
              this.isFullScreen = !this.isFullScreen;
          }
      },
      handleCollapse(){
          this.isCollapse = !this.isCollapse
          this.$emit('handleCollapse',this.isCollapse)
      },
      logout(){
        sessionStorage.clear()
        this.$router.push('/login')
      },
    }
}
</script>

<style lang="scss" scoped>
  .el-header {
    background-color:#606266;
    color: #fff;
    line-height: 60px;
  }
  .header{
      width:100%;
    font-size: 12px;
    background-color: #fff;
    color:#666;
    display: flex;
    justify-content: space-between;
  }

  .item {
  /* margin-top: 10px; */
  /* margin-right: 40px; */
}
  .header-dropdown {

            display: inline-block;
            margin-right: 16px;
            line-height: 64px;
            cursor: pointer;
            color: #515a6e;

            .icon {
                color: #515a6e;
            }

            &:last-child {
                margin-right: 0;
            }

        }
</style>
