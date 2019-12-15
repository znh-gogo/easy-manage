<template>
    <div>
        <div style="height:60px;display:flex;align-items:center;justify-content:center" v-if="!isCollapse"><img src="../../assets/title.jpg" style="width:90%;border-radius:10px;" alt=""></div>
        <div style="height:60px;line-height:60px;text-align:center;font-size:18px;padding:0 10px;color: #fff;" v-else>
          农产
        </div>
        <el-menu
        class="el-menu-vertical-demo"
        router
        :default-active="$route.path"
        unique-opened
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        background-color="#001529"
        text-color="#fff"
        active-text-color="#ffd04b">
        <div v-for="(item,index) in subMenuContent" :key="index">
            <el-submenu :index="index+''">
                <template slot="title"><i :class="item.icon"></i><span>{{item.title}}</span></template>
                <el-menu-item-group>
                <template slot="title" v-if="item.subTitle!==''">{{item.subTitle}}</template>
                <div v-for="(subItem,subIndex) in item.children" :key="index+'-'+subIndex">
                    <el-menu-item :index="subItem.path">{{subItem.indexTitle}}</el-menu-item>
                </div>
                </el-menu-item-group>
            </el-submenu>
        </div>

        <!-- <el-submenu index="2">
            <template slot="title"><i class="el-icon-s-shop"></i><span>商品管理</span></template>
            <el-menu-item-group>
            <template slot="title">商品</template>
            <el-menu-item index="/goodsList">商品列表</el-menu-item>
            <el-menu-item index="/goodsAdd">商品类别</el-menu-item>
            </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
            <template slot="title"><i class="el-icon-notebook-2"></i><span>文章管理</span></template>
            <el-menu-item-group>
            <template slot="title">文章</template>
            <el-menu-item index="/articleClassAdd">新建文章分类</el-menu-item>
            <el-menu-item index="/articleClassList">文章分类列表</el-menu-item>
            <el-menu-item index="/articleAdd">新建文章</el-menu-item>
            <el-menu-item index="/articleList">文章列表</el-menu-item>
            </el-menu-item-group>
        </el-submenu>


        <el-submenu index="5">
            <template slot="title"><i class="el-icon-user"></i><span>管理员管理</span></template>
            <el-menu-item-group>
            <template slot="title">管理员</template>
            <el-menu-item index="/adminList">管理员列表</el-menu-item>
            <el-menu-item index="/adminAdd">添加管理员</el-menu-item>
            </el-menu-item-group>
        </el-submenu>

        <el-submenu index="6">
            <template slot="title"><i class="el-icon-s-custom"></i><span>账户管理</span></template>
            <el-menu-item-group>
            <template slot="title">管理员</template>
            <el-menu-item index="/accountList">账户列表</el-menu-item>
            </el-menu-item-group>
        </el-submenu>


        <el-submenu index="9">
            <template slot="title"><i class="el-icon-s-marketing"></i><span>广告管理</span></template>
            <el-menu-item-group>
            <template slot="title">管理员</template>
            <el-menu-item index="/setAd">广告价格与时长</el-menu-item>
            <el-menu-item index="/Adlist">广告申请列表</el-menu-item>
            </el-menu-item-group>
        </el-submenu> -->

        

        </el-menu>
    </div>
</template>

<script>
export default {
    props:{
        isCollapse:{
            type:Boolean,
            default:false
        },
        subMenuContent:{
            type:Array,
            default:function(){
                return [
                {
                    title:'首页',
                    icon:'el-icon-s-home',
                    subTitle:'',
                    children:[
                        {
                            path:'/homepage'
                        }
                    ]
                }
                ]
            }
        }
    },
    data(){
        return {

        }
    },
    methods:{
        handleOpen(){},
        handleClose(){},
    }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    /* overflow-x: hidden; */
  }
</style>