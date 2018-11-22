<template>
    <div class="confirmOrderContainer">
        <section v-if="!showLoading">
            <head-top head-title="确认订单" go-back="true" signin-up="true"></head-top>
            <router-link :to="{path:'/confirmOrder/chooseAddress'}" class="address_container">
                <div class="address_empty_left">
                    <svg class="location_icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use>
                    </svg>
                    <div class="add_address" v-if="!choosedAddress">请添加一个收货地址</div>
                    <div class="address_detail_container" v-else>
                        <header>
                            <span>{{choosedAddress.name}}</span>
                            <span>{{choosedAddress.sex == 1? '先生':'女士'}}</span>
                            <span>{{choosedAddress.phone}}</span>
                        </header>
                        <div class="address_detail">
                            <span v-if="choosedAddress.tag" :style="{backgroundColor: iconColor(choosedAddress.tag)}">{{choosedAddress.tag}}</span>
                            <p>{{choosedAddress.address_detail}}</p>
                        </div>
                    </div>
                </div>
                <svg class="address_empty_right">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                </svg>
            </router-link>
            <section class="delivery_model container_style">
                <p class="deliver_text">送达时间</p>
                <section class="deliver_time">
                    <p>尽快送达 | 预计 </p>
                    <p>蜂鸟专送</p>
                </section>
            </section>
        </section>
    </div>
</template>
<script>
import headTop from 'src/components/header/head'
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return {
            showLoading: false, //显示加载动画
            checkoutData: null,//数据返回值
        }
    },
    components:{
        headTop
    },
    computed:{
        ...mapState([
            'cartList', 'remarkText', 'inputText', 'invoice', 'choosedAddress', 'userInfo'
        ])
    }
}
</script>
<style lang="scss" scoped>
    @import 'src/style/mixin';
    .confirmOrderContainer{
        padding-top: 1.95rem;
        padding-bottom: 3rem;
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .container_style{
        background-color: #fff;
        margin-top: .4rem;
        padding: 0 .7rem;
    }
    .address_container{
        min-height: 3.5rem;
        @include fj;
        align-items: center;
        padding: 0 0.6rem;
        background: url(../../images/address_bottom.png) left bottom repeat-x;
        background-color: #fff;
        background-size: auto .12rem;
        .address_empty_left{
            display: flex;
            align-items: center;
            .location_icon{
                @include wh(.8rem, .8rem);
                fill: $blue;
                margin-right: .2rem;
            }
            .add_address{
                @include sc(.7rem, #333);
            }
            .address_detail_container{
                margin-left: .2rem;
                header{
                    @include sc(.65rem, #333);
                    span:nth-of-type(1){
                        font-size: .8rem;
                        font-weight: bold;
                    }
                }
                .address_detail{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    span{
                        @include sc(.5rem, #fff);
                        border-radius: .15rem;
                        background-color: #ff5722;
                        height: .6rem;
                        line-height: .6rem;
                        padding: 0 .2rem;
                        margin-right: .3rem;
                    }
                    p{
                        @include sc(.55rem, #777);
                    }
                }
            }
        }
    }
    .address_empty_right{
        @include wh(.6rem, .6rem);
        fill: #999;
    }
    .delivery_model{
        border-left: .2rem solid $blue;
        min-height: 4rem;
        @include fj;
        align-items: center;
        .deliver_text{
            @include sc(.8rem, #333);
            font-weight: bold;
            padding-left: .3rem;
        }
        .deliver_time{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            p:nth-of-type(1){
                @include sc(.7rem, $blue);
            }
            p:nth-of-type(2){
                @include sc(.5rem, #fff);
                background-color: $blue;
                width: 2.4rem;
                margin-top: .5rem;
                text-align: center;
                border-radius: 0.12rem;
                padding: .1rem;
            } 
        }
    }
</style>


