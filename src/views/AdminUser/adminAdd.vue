<template>
    <div style="background:#fff;padding:20px">
        <formBody></formBody>
    </div>
</template>
<script>
import {ADMIN} from '../../api/globol'
import formBody from '../../components/formbody/index'
export default {
    props:{
        id:{}
    },
    components:{formBody},
    data (){
        return{
            model:{
                
            },
            relativeOptions:[]
        }
    },
    methods:{
      

    },
    created(){
        
       
    }
}
</script>


<style scoped>

</style>
