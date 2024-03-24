<template>
    <div>
        <h2>News的内容</h2>
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <!-- params传参，to的字符串写法 -->
                <!-- <router-link :to="`/home/news/detail/${news.id}/${news.title}`">{{ news.title }}</router-link> -->


                <!-- params传参，to的对象写法 -->
                <router-link :to="{
                    name: 'NewsDetailRouter',
                    params: {
                        id: news.id,
                        title: news.title
                    }
                }">
                    {{ news.title }}
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
       name: 'News',
       data() {
          return {
            newsList: [
                {id: '001', title: '新闻 001'},
                {id: '002', title: '新闻 002'},
                {id: '003', title: '新闻 003'}
            ]
          }
       },
       methods: {
       },
}
</script>
