// 如何让客户端重定向？
//  1、状态码设置为302
//      statusCode = 302;
//  2、在响应头中通过 Location 告诉客户端往哪里重定向
//      res.setHeader('Location','/');  
// 如果客户端收到服务器的响应的状态码是 302 就会自动去响应头中找 Location