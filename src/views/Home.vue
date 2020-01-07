<template>
  <div class="home">
    <el-container style="min-height: 100vh;">
      <el-aside style="background-color: #002140;max-width:201px;width:auto;overflow-x: hidden;">
        <SubMenu
        :isCollapse="isCollapse"
        :subMenuContent="subMenuContent"></SubMenu> 
      </el-aside>
    
      <el-container style="position:relative;">
        
        <el-header class="header">
          <SubHeader
          @handleCollapse="getCollapse"
          :headimg="headimg"
          :username="username"></SubHeader>
        </el-header>
          
        <div class="main-body-wrap">
            <slot name="main-body">
                <TabView :show-nav-tab="showNavTab" :subMenuContent="subMenuContent"></TabView>
            </slot>
        </div>
        <div class="companyText">
                Copyright © 2019 All informations from Vue.js. 
        </div>
        
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import TabView from '../components/tab-view/TabView'
import SubMenu from '../components/submenu/SubMenu'
import SubHeader from '../components/subheader/SubHeader'
import screenfull from 'screenfull';
export default {
  name: 'home',
  components:{
    TabView,
    SubMenu,
    SubHeader
  },
  data() {
      return {
        isCollapse: false,
        headimg:'',
        username:'',
        showNavTab:true,
        isFullScreen: false,
        subMenuContent:[
          {
            title:'首页',
            icon:'el-icon-s-home',
            subTitle:'',
            children:[
              {
                indexTitle:'首页',
                path:'/homepage'
              }
            ]
          },
          {
            title:'商品管理',
            icon:'el-icon-s-shop',
            subTitle:'商品',
            children:[
              {
                indexTitle:'商品列表',
                path:'/goodsList'
              },
              {
                indexTitle:'商品类别',
                path:'/goodsAdd'
              }
            ]
          },
          {
            title:'文章管理',
            icon:'el-icon-notebook-2',
            subTitle:'文章',
            children:[
              {
                indexTitle:'新建文章分类',
                path:'/articleClassAdd'
              },
              {
                indexTitle:'文章分类列表',
                path:'/articleClassList'
              },
              {
                indexTitle:'新建文章',
                path:'/articleAdd'
              },
              {
                indexTitle:'文章列表',
                path:'/articleList'
              }
            ]
          },
          {
            title:'管理员管理',
            icon:'el-icon-user',
            subTitle:'管理员',
            children:[
              {
                indexTitle:'管理员列表',
                path:'/adminList'
              },
              {
                indexTitle:'添加管理员',
                path:'/adminAdd'
              }
            ]
          },
          {
            title:'账户管理',
            icon:'el-icon-s-custom',
            subTitle:'账户',
            children:[
              {
                indexTitle:'账户列表',
                path:'/accountList'
              }
            ]
          },
        ]
      }
    },
    methods:{
      
     getCollapse(e){
       this.isCollapse = e
     }
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
    font-size: 12px;
    background-color: #fff;
    color:#666;
    display: flex;
    justify-content: space-between;
  }
  .el-aside {
    color: #333;
  }

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    /* overflow-x: hidden; */
  }
  .main-body-wrap {
      height: calc(100% - 200px);
  }
.companyText{
  background-color:#f1f1f1;text-align:center;color:#666;font-size:14px;position:absolute;bottom:0;width:100%;padding:15px 0
}
</style>
