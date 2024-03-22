<template>
    <div class="container">
		<Category title="游戏" >
            <!-- 要想在使用插槽的时候可以接收到插槽传递过来的数据，必须使用template，注意template标签不会被解析到浏览器上面 -->
            <!-- 使用scope或slot-scope来接收定义插槽的组件发出的数据 -->
            <!-- 注意接收到的reciveData时一个对象，因为定义插槽的时候可能传递多个数据，所以接受的时候vue包多个数据构成一个对象传递过来了 -->
            <template scope="reciveData"  slot="footer">
                <h3>{{ reciveData.nowDate }}</h3>
                <h3>{{ reciveData.data }}</h3>
                <ul>
                    <li v-for="(g,index) in reciveData.data" :key="index">{{g}}</li>
                </ul>
            </template>
        </Category>

	</div>
</template>

<script>

    import Category from './components/Category.vue'

    export default {
        name: 'App',
        components: { Category },
		data() {
			return {
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
