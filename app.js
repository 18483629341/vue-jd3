module.exports = {
  apps : [{
      name      : 'index',      //应用名
      script    : './config/index.js',   //应用文件位置
      env: {
          PM2_SERVE_PATH: ".",    //静态服务路径
          PM2_SERVE_PORT: 8080,   //静态服务器访问端口
          NODE_ENV: 'development' //启动默认模式
      },
      env_production : {
          NODE_ENV: 'production'  //使用production模式 pm2 start ecosystem.config.js --env production
      },
      instances:"max",          //将应用程序分布在所有CPU核心上,可以是整数或负数
      watch:true,               //监听模式
      output: './out.log',      //指定日志标准输出文件及位置
      error: './error.log',     //错误输出日志文件及位置，pm2 install pm2-logrotate进行日志文件拆分
      merge_logs: true,         //集群情况下，可以合并日志
      log_type:"json",          //日志类型
      log_date_format: "DD-MM-YYYY",  //日志日期记录格式
  },
  {
    name      : 'server',      //应用名
    script    : 'server.js',   //应用文件位置
    env: {
        PM2_SERVE_PATH: ".",    //静态服务路径
        PM2_SERVE_PORT: 8080,   //静态服务器访问端口
        NODE_ENV: 'development' //启动默认模式
    },
    env_production : {
        NODE_ENV: 'production'  //使用production模式 pm2 start ecosystem.config.js --env production
    },
    instances:"max",          //将应用程序分布在所有CPU核心上,可以是整数或负数
    watch:true,               //监听模式
    output: './out.log',      //指定日志标准输出文件及位置
    error: './error.log',     //错误输出日志文件及位置，pm2 install pm2-logrotate进行日志文件拆分
    merge_logs: true,         //集群情况下，可以合并日志
    log_type:"json",          //日志类型
    log_date_format: "DD-MM-YYYY",  //日志日期记录格式
},
],
  deploy : {
      production : {
          user : 'node',                      //ssh 用户
          host : '106.12.206.184',              //ssh 地址
          ref  : 'origin/master',             //GIT远程/分支
          repo : 'git@github.com:repo.git',   //git地址
          path : '/var/www/production',       //服务器文件路径
          'post-deploy' :'npm install && pm2 reload ecosystem.config.js --env production'  //部署后的动作
      }
  }
};
 
