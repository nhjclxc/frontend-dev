//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

// 为了解析json
app.use(express.json());


//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/', (request, response)=>{
    //设置响应
    response.send('HELLO EXPRESS');
});
app.get('/get', (request, response)=>{

      //设置响应头  设置允许跨域
      response.setHeader('Access-Control-Allow-Origin', '*');
      response.setHeader('Access-Control-Allow-Headers', '*');

    console.log(request.query)
    console.log(request.query.name)
    // console.log(request.params)
    //设置响应
    
	var str = '{"name":"test","age":18,"gender":"男"}';
	var strJson = JSON.parse(str)
    strJson.newname = request.query.name
    response.send(strJson);
    // response.send(str);
});
app.get('/get2', (request, response)=>{
    //设置响应头  设置允许跨域
      response.setHeader('Access-Control-Allow-Origin', '*');
      response.setHeader('Access-Control-Allow-Headers', '*');

    console.log(request.query) 
    //设置响应
     
	var arr = '[1,2,3,"hello",true]';
	var arrJson = JSON.parse(arr) 
    response.send(arrJson);
});
app.get('/get3', (request, response)=>{
    //设置响应头  设置允许跨域
      response.setHeader('Access-Control-Allow-Origin', '*');
      response.setHeader('Access-Control-Allow-Headers', '*');

    console.log(request.query) 
    //设置响应
     
	var str = '{"name":"test","age":18,"gender":"男"}';
	var arr = '[1,2,3,"hello",true]';
	var strJson = JSON.parse(str) 
    strJson.arr = arr
    response.send(strJson);
});
app.post('/post', (request, response)=>{
    //设置响应头  设置允许跨域
      response.setHeader('Access-Control-Allow-Origin', '*');
      response.setHeader('Access-Control-Allow-Headers', '*');
    console.log(request.body) 
    console.log(request.query)
    //设置响应
     
	var str = '{"name":"post666","age":18,"gender":"男"}';
	var strJson = JSON.parse(str) 
    response.send(JSON.stringify(strJson));
});
app.all('/all', (request, response)=>{
    //设置响应头  设置允许跨域
      response.setHeader('Access-Control-Allow-Origin', '*');
      response.setHeader('Access-Control-Allow-Headers', '*');
    console.log(request.body) 
    console.log(request.query)
    //设置响应
     
	var str = '{"name":"post666","age":18,"gender":"男"}';
	var strJson = JSON.parse(str) 
    response.send(JSON.stringify(strJson));
    // response.send(strJson);
});
app.all('/delay', (request, response)=>{
    //设置响应头  设置允许跨域
      response.setHeader('Access-Control-Allow-Origin', '*');
      response.setHeader('Access-Control-Allow-Headers', '*');
    console.log(request.body) 
    console.log(request.query)

    setTimeout(() => {
        console.log('定时结束')
        //设置响应
         
        var str = '{"name":"delay delay","age":18,"gender":"男"}';
        var strJson = JSON.parse(str) 
        response.send(JSON.stringify(strJson));
    }, 3000);
    
    // response.send(strJson);
});

//4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动, 8000 端口监听中....");
});