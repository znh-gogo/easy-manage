<template>
    <div>
        <div style="height:60px;display:flex;align-items:center;justify-content:center;" v-if="!isCollapse"><img src="../../assets/title.jpg" style="width:90%;border-radius:10px;height:80%" alt=""></div>
        <div style="height:60px;line-height:60px;text-align:center;font-size:18px;padding:0 10px;color: #fff;" v-else>
          通用
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
            <el-submenu v-for="(item,index) in subMenuContent" :key="index" :index="index+''">
                <template slot="title"><i :class="item.icon"></i><span>{{item.title}}</span></template>
                <el-menu-item-group>
                <template slot="title" v-if="item.subTitle!==''">{{item.subTitle}}</template>
                <div v-for="(subItem,subIndex) in item.children" :key="index+'-'+subIndex">
                    <el-menu-item :index="subItem.path">{{subItem.indexTitle}}</el-menu-item>
                </div>
                </el-menu-item-group>
            </el-submenu>
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
                            indexTitle:'首页',
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
        handleOpen(e,keyPath){
            // console.log(e,keyPath)
            // window.sessionStorage.subIndex = e
        },
        handleClose(){},
        getItems(e){
            console.log(e)
        }
    }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    max-width: 201px;
    width:auto;
    min-height: 400px;
  }
</style>