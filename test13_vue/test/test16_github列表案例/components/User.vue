
<template>
        <!-- <div class="userBox">
            <img :src="card.avatar_url" alt="用户头像"> 
            <span class="userName">{{ card.login }}</span>
        </div> -->
        
        <div class="card">
            <a :href="card.html_url" target="_blank">
            <img :src="card.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{ card.login }}</p>
        </div>
</template>

<script>

    export default {
        name: 'User',
        props: ['card'],
    }
</script>


<style scoped>

    .userBox {
        width: 100px;
        height: 120px;
        margin: 5px;
        background-color: rgb(238, 222, 197);
        /* 两个小的span一上一下 */
        display: flex;
        flex-direction: column;
    }

    .userName {
        height: 20px;
        line-height: 20px; /*垂直居中 值为heigth的值*/
        text-align: center;  /*水平居中*/
    }

    img {
        width: 100px;
        height: 100px;
    }


    
    .album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
    }
    
    .card {
    float: left;
    width: 16.66%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
    }

    .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
    }

    .card-text {
    font-size: 85%;
    }
</style>