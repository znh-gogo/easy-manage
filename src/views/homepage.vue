<template>
    <div class="container">
        <div>首页</div>
    </div>
</template>

<script>
import format from '../common/usualtime'
import echarts from 'echarts'
export default {
    data(){
        return{
           
        }
    },
    methods:{
         compare(p){ //这是比较函数
            return (m,n)=>{
                var a = m[p];
                var b = n[p];
                return a - b; //升序
            }
        },
        
        millionChange(e){
            let a = e+''
            return a.replace(/\d{1,3}(?=(\d{3})+$)/g,item=>item+',');
        }
    },
    mounted(){
        

         
    },
    // 注意在vue实例销毁前，清除我们的定时器。
    destroyed () {
        
    }
}
</script>

<style scoped>

</style>