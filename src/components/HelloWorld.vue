<template>
    <div class='hello-index'>
        <div class="aa">{{message}}</div>
        <van-button type="primary" @click="showMessage">点我</van-button>
    </div>
</template>

<script>
import { Button } from 'vant'

export default {
    data () {
        return {

        }
    },
    computed: {
        message () {
            return this.$store.state.hello.message
        }
    },
    mounted () {
        // this.http.post('h5/home/getIndex',{page:0,size:20}).then( (res) => {console.log(res)} )
        // this.getData()
        if (!this.message) {
            this.$store.commit('setMessage', 'hello world!')
        }
    },
    methods: {
        // async getData () {
        //     let res = await this.http.post('h5/home/getIndex', {page: 0, size: 20})
        //     console.log(res)
        // },
        showMessage () {
            this.toast(this.message)
        }
    },
    components: {
        [Button.name]: Button
    }
}
</script>

<style lang='less'>
.hello-index{font-size:@rem*28;
    .aa{color:red;width:@rem*700;background:yellow;}
}
</style>
