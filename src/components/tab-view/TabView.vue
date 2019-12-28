<template>
    <div class="tab-view">
        <!--tab栏-->
        <TabNav v-if="showNavTab" :tab-items="views" :current-item="currentView" @handleChangeTab="handleChangeTab"
                    @handelCloseTab="handelCloseTab" @handleCloseOthers="handleCloseOthers"
                    @handleCloseAll="handleCloseAll"></TabNav>
        <div style="padding:20px;">
            <!--面包屑-->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="'/homepage'">首页</el-breadcrumb-item>
                <!-- <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item> -->
                <el-breadcrumb-item v-if="$route.meta.name">{{$route.meta.name}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!--视图层-->
        <Scrollbar ref="scrollbar" padding="20px" class="tv-main-body">
            <template v-for="view in views">
                <transition name="slide-fade" v-bind:key="view.id">
                <component v-show="view === currentView" v-bind:is="view.component" :params="view.params"
                           :query="view.query"
                           :timestamp="view.timestamp"
                           ></component>
                           </transition>
            </template>
        </Scrollbar>
        
    </div>
</template>

<script>
import TabNav from './TabNav'
import Scrollbar from '../scrollbar/Scrollbar'
    export default {
        name: "TabView",
        props: {
            showNavTab: {
                type: Boolean,
                default: function () {
                    return true;
                }
            }
        },
        components: {TabNav,Scrollbar},
        data() {
            return {
                views: [],
                currentView: null,
                route: true,
                authflag:'',
                homeItem:''
            }
        },
        watch: {
            '$route': function () {

                this.$refs.scrollbar.resetScrollbar();

                this.$emit('handleTabChange');

                if (window.routeType === 'back') {
                    window.routeType = '';
                    if(this.currentView.lastView){
                        this.handelCloseTab(this.currentView);
                        this.handleChangeTab(this.currentView.lastView);
                    }


                    return;
                }
                if (this.route && window.route) {
                    this.addView();
                } else {
                    this.route = true;
                    window.route = true;
                }



            }
        },
        methods: {

            handleCloseOthers(item) {
                this.views = [item];
                this.handleChangeTab(item);

            },

            handleCloseAll() {
                let vm = this;
                let view = this.views.find((v) => {
                    return v.path === '/homepage'
                });

                if (view) {
                    this.handleCloseOthers(view);
                } else {
                    this.views = [];
                    vm.$router.push('/');
                }


            },

            handleChangeTab(item) {
                let vm = this;
                vm.route = false;
                vm.currentView.query = this.$route.query;
                vm.$router.push(item.path);
                vm.currentView = item;
                
                item.timestamp = new Date().getTime();
                vm.$nextTick(()=>{
                    vm.route = true;
                });
            },
            handelCloseTab(item) {
                this.views.splice(this.views.indexOf(item), 1);
            },
            addView() {
                // let flag = true
                if (!this.$route.meta.tab) {
                    return;
                }
                let view = {
                            lastView: this.currentView,
                            name: this.$route.meta.name,
                            path: this.$route.path,
                            params: this.$route.params,
                            query: this.$route.query,
                            timestamp: new Date().getTime(),
                            component: this.$route.matched[this.$route.matched.length - 1].components.default,
                            id: new Date().getTime()
                        };
                this.currentView = view;
                this.views.push(view);

                // if(this.views.length ===0){
                //     let view = {
                //             lastView: this.currentView,
                //             name: this.$route.meta.name,
                //             path: this.$route.path,
                //             params: this.$route.params,
                //             query: this.$route.query,
                //             timestamp: new Date().getTime(),
                //             component: this.$route.matched[this.$route.matched.length - 1].components.default,
                //             id: new Date().getTime()
                //         };
                //     this.currentView = view;
                //     this.views.push(view);
                // } else {
                //     this.views.forEach(item=>{
                //     if(item.path === '/homepage' && this.$route.path === '/homepage'){
                //         this.homeItem = item
                //         flag = false
                //     }
                //  })
                //  if(flag){
                //      let view = {
                //             lastView: this.currentView,
                //             name: this.$route.meta.name,
                //             path: this.$route.path,
                //             params: this.$route.params,
                //             query: this.$route.query,
                //             timestamp: new Date().getTime(),
                //             component: this.$route.matched[this.$route.matched.length - 1].components.default,
                //             id: new Date().getTime()
                //         };
                //     this.currentView = view;
                //     this.views.push(view);
                //  } else {
                //      this.handleChangeTab(this.homeItem)
                //  }
                // }
                
            },
        },
        created() {

            let vm = this;
            this.authflag = parseInt(sessionStorage.authflag)
            vm.addView();

            vm.$router.updateQuery = function () {
                window.route = false;
                vm.$router.push(arguments[0]);
                vm.$nextTick(()=>{
                    window.route = true;
                });
            };

            vm.$router.cgBack = function () {
                window.routeType = 'back';
                vm.$router.back();
            };
            



            window.route =true;

        }
    }
</script>

<style lang="scss" scoped>


    .tab-view {
        height: 100%;
        position: relative;
        width: 100%
    }

    .tv-main-body {
        // background-color: #fff;
        overflow: hidden;
        height: 100%;
        background: #f1f1f1;

        /*padding: 20px;*/
    }

    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
    transition: all .5s ease;
    }
    .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    // transform: translateX(10px);
    opacity: 0;
    }

</style>