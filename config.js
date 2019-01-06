/**
 * 小程序配置文件
 */
// 此处主机域名修改成腾讯云解决方案分配的域名

// 此处主机域名修改成腾讯云解决方案分配的域名
//var host = 'https://konglaoshi.xyz'  //开发环境

var appId = 'wx0b152ea55233ac2c'

var config = {

  // 下面的地址配合云端 Demo 工作
  service: {
    appId,

    host,

    // 登录地址，用于建立会话
    // loginUrl: `${host}/weapp/login`,
    

    // // 测试的请求地址，用于测试会话
    // requestUrl: `https://www.shanbay.com`,

    // // 测试的信道服务地址
    // tunnelUrl: `${host}/weapp/tunnel`,

    // 上传图片接口see
   // uploadUrl: `https://601302435.konglaoshi.xyz`
  }
}

module.exports = config
