<template>
    <div id="index">
        <!-- <p>syk:{{syk}}</p> -->
        <button @click="showCont" class="anniu">点击显示/隐藏</button>
        <div v-if="show">
            <table class="biaoge">
                <tr class="biaoti">
                    <td>id</td>
                    <td>IMEI</td>
                    <td>device</td>
                    <td>message</td>
                    <td>tel</td>
                    <td>createdAt</td>
                    <td>updatedAt</td>
                </tr>
                <tr v-for="index in syk" :key="index" class="neirong">
                    <td>{{index.id}}</td>
                    <td>{{index.IMEI}}</td>
                    <td>{{index.device}}</td>
                    <td>{{index.message}}</td>
                    <td>{{index.tel}}</td>
                    <td>{{index.createdAt}}</td>
                    <td>{{index.updatedAt}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    
export default {
    name: "index",
    data(){
        return{
            syk:'',
            show:'true'
        }
    },
    created(){
        this.axios.get('http://localhost:60020/all').then((response)=>{
            console.log(response.data.data[1]);
            this.syk=response.data.data;
            console.log(this.syk);
        }).catch((error)=>{
             console.log(error)
        })
    },
    methods:{
            showCont:function(){
            this.show = !this.show;
            }
        }
}
</script>
<style>
    #index{
        background: url(../assets/images/222.jpg) no-repeat;
        background-size: 100%;

    }
    .show{
        display: none;
    }
    .biaoge{
        border: 1px solid rgb(164, 229, 255);
        margin: 0 auto;
        margin-top: 30px;
    } 
    .biaoti{
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        border:1px solid yellow;
        background-color: rgb(146, 255, 221);
    }
    .neirong td{
        border: 1px solid #f6ffcc;
        background-color: rgb(213, 242, 255);
        font-size: 12px;
        color: black;
    }
    .anniu{
        width: 120px;
        height: 40px;
        border: 1px solid rgb(110, 137, 255);
        background-color: rgb(203, 224, 255);
        color: rgb(58, 58, 255);
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
    }
</style>
