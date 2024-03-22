
<template> 
    
	<div class="category">
		<h3>{{title}}分类</h3>
		<!-- 作用域插槽也就是想把定义插槽的组件里面的数据发送给使用组件的地方，
			在这里将定义插槽的组件数据发送给使用插槽的组件，类似于父组件使用子组件的时候使用props方式传递数据一样，
			同样的，在使用插槽传递数据时，直接将数据写在插槽的定义上即可
		-->
		<!-- props和插槽传递数据对比，都是有数据的一方向使用数据的一方传递数据，都是将数据放在使用的标签上 -->


		<!-- 如下:data="games" :data2="Data.now()" 
				那么在使用name="footer"这个插槽的时候就可以接收到下面者两个数据了 -->
        <slot :data="games" :nowDate="Date.now()" name="footer">这里可以写一个默认值</slot>
	</div>
</template>

<script>

    export default {
        name: 'Category',
        props:['title','listData'],
        data() {
            return {
				games:['红色警戒','穿越火线','劲舞团','超级玛丽']
            }
        },
    }
</script>

<style scoped>

    .category{
		background-color: skyblue;
		width: 200px;
		height: 300px;
	}
	h3{
		text-align: center;
		background-color: orange;
	}
	video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>