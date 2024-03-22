
<template> 
    
	<div class="category">
		<h3>{{title}}分类</h3>
		<!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
        <!-- 使用插槽表示将使用 Category 组件时，写在Category组件标签体里面的内容在这里展示 -->
        <slot name="footer">这里可以写一个默认值</slot>
		<h3>展示结束</h3>

		<!-- name="hello"表示给这个插槽取一个名字，在使用的时候就可以指定哪些东西放在放在哪里 -->
        <slot name="hello">这里可以写一个默认值hello</slot>
		<h3>展示hello</h3>
	</div>
</template>

<script>

    export default {
        name: 'Category',
        props:['title','listData'],
        data() {
            return {
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