<template>
    <div class="container">
        <!-- 注意，这里是直接将美食、游戏、电影传到子组件里面去，在App这个组件里面并没有这些数据，
            因此title前面不能加:，如果加了就是表达式了，如果不加就将title里面的数据直接传给子组件
        -->

        <!-- 当一个组件内部的某些数据不一样的时候（随着使用者不同而输出展示不同数据），就可以在这里写一个插槽 -->
		<Category title="美食">
            <!-- 根据插槽位置来指定，这个插槽放在子组件的什么位置 -->
            <a slot="hello" href="#">点我看片</a>
            <img slot="footer" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
        </Category>

		<Category title="游戏" >
            <ul slot="footer">
                <li v-for="(g,index) in games" :key="index">{{g}}</li>
            </ul>
        </Category>

		<Category title="电影"> </Category>
	</div>
</template>

<script>

    import Category from './components/Category.vue'

    export default {
        name: 'App',
        components: { Category },
		data() {
			return {
				foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
			}
		},
    }
</script>


<style>
    .container{
		display: flex;
		justify-content: space-around;
	}
</style>

<!-- <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">

<video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video> -->
