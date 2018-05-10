<template>
    <div class="page">
        <pre>
          worker_processes  1;

          events {
              worker_connections  1024;
          }

          http {
              include       mime.types;
              default_type  application/octet-stream;

              sendfile        on;

              keepalive_timeout  65;

              upstream LstController {
                  server 10.10.92.233:8080;
              }
              client_max_body_size 40m;

              map $http_upgrade $connection_upgrade {
                  default     upgrade;
                  ''          close;
              }

              server {
                  listen       80;
                  server_name  localhost;

                  location / {   # vue配置
                      root D:/facegate-ui/facegateCompiled;
                      index index.html;
                  }

                  location ^~ /static/ {       # vue资源文件夹配置
                      root D:/facegate-ui/facegateCompiled/;
                      index index.html;
                  }

                  error_page   500 502 503 504  /50x.html;
                  location = /50x.html {
                      root   html;
                  }

                  location ^~ /lstweb/ {      # angularjs配置
                      root D:/;
                      index login.html;
                  }

                  location ^~ /lstweb2/ {      # angularjs配置
                      root D:/lstweb2/;
                      index index.html;
                  }

                  location ^~ /store/ {       # angularjs图片配置
                      rewrite ^/store/(.*) http://10.10.92.200/store/$1 permanent;
                  }

                  location /controller {      # angularjs/vue 的接口指向配置
                      proxy_http_version 1.1;
                      add_header backendIP $upstream_addr;
                      add_header backendCode $upstream_status;
                      proxy_pass http://LstController;

                      proxy_set_header Host $host;
                      proxy_set_header X-Real-IP $remote_addr;
                      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

                      proxy_set_header Upgrade $http_upgrade;
                      proxy_set_header Connection $connection_upgrade;
                      proxy_read_timeout 86400s;
                  }

                  location ^~ /demo/ {
                      root D:/;
                      index index.html;
                  }

              }
        </pre>
    </div>
</template>

<script>
export default {
  name: 'wechat_http',
  data () {
    return {
      msg: 'http'
    }
  }
}
</script>

<style scoped>

</style>
