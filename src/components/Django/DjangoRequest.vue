<template>
    <div class="page">
      <h3>四种请求类型</h3>
      <pre>
        ﹂mapService
          ﹂baiduMap
            views.py

        from django.shortcuts import render
        from django.http import HttpResponse
        # Django中对于基于函数的视图我们可以 @csrf_exempt 注解来标识一个视图可以被跨域访问
        from django.views.decorators.csrf import csrf_exempt

        def index(request):
            return render(request, 'hello world')

        @csrf_exempt
        def add(request):
            if request.method == 'GET':
                a = request.GET.get('a', None)
                b = request.GET.get('b', None)
                a = int(a)
                b = int(b)
                return HttpResponse(str('''get : a + b = %d, (%s)''' % (a + b, request.method)))
            elif request.method == 'POST':
                a = request.POST.get('a', None)
                b = request.POST.get('b', None)
                a = int(a)
                b = int(b)
                return HttpResponse(str('''post : a + b = %d, (%s)''' % (a + b, request.method)))
            elif request.method == 'DELETE':
                a = request.DELETE.get('a', None)
                b = request.DELETE.get('b', None)
                a = int(a)
                b = int(b)
                return HttpResponse(str('''delete : a + b = %d, (%s)''' % (a + b, request.method)))
            elif request.method == 'PUT':
                a = request.PUT.get('a', None)
                b = request.PUT.get('b', None)
                a = int(a)
                b = int(b)
                return HttpResponse(str('''put : a + b = %d, (%s)''' % (a + b, request.method)))
        ﹂mapService
          ﹂mapService
            urls.py

        from django.conf.urls import url
        from django.contrib import admin
        from baiduMap import views as map_views  # new

        urlpatterns = [
            url(r'^admin/', admin.site.urls),
            url('index', map_views.index),  # new
            url('^controller/add$', map_views.add),  # get
        ]
      </pre>
      <el-button @click="requestget">get</el-button>
      <el-button @click="requestpost">post</el-button>
      <el-button @click="requestdelete">delete</el-button>
      <el-button @click="requestput">put</el-button>
      <el-button @click="login">login</el-button>
    </div>
</template>

<script>
export default {
  name: 'request',
  data () {
    return {
      msg: 'this is init'
    }
  },
  methods: {
    login () {
      let obj = new FormData()
      obj.append('userName', 'cong')
      obj.append('password', 123456)
      this.$http({
        // withCredentials: true,
        // headers: {
        //   'Content-Type': 'application/x-www-form-urlencoded'
        // },
        method: 'POST',
        url: 'http://172.18.0.154:8083/login/login',
        data: obj
      }).then(res => {
        console.log(res)
      })
    },
    requestget (method) {
      this.$http({
        method: 'GET',
        url: 'add/'
      }).then(res => {
        console.log(res)
      })
    },
    requestpost (method) {
      let obj = {
        userName: 'cong',
        password: 123456
      }
      // let obj = new FormData()
      // obj.append('userName', 'cong')
      // obj.append('password', 123456)
      this.$http({
        method: 'POST',
        url: 'add/',
        data: this.$qs.stringify(obj)
      }).then(res => {
        console.log(res)
      })
    },
    requestdelete (method) {
      this.$http({
        method: 'DELETE',
        url: 'add/'
      }).then(res => {
        console.log(res)
      })
    },
    requestput (method) {
      let obj = {
        userName: 'cong',
        password: 123456
      }
      // let obj = new FormData()
      // obj.append('userName', 'cong')
      // obj.append('password', 123456)
      this.$http({
        method: 'put',
        url: 'add/',
        data: this.$qs.stringify(obj)
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>
