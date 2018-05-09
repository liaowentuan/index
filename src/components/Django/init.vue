<template>
    <div>
      <h3>环境搭建</h3>
      <pre>
        虚拟环境中：

        pip install Django==1.11.12

        cd 工作目录

        >>> django-admin.py startproject mapService

        ﹂mapService
          ﹂mapService
            __init__.py
            settings.py
            urls.py
            wsgi.py
          manage.py

        >>> python manage.py startapp baiduMap

        ﹂mapService
          ﹂baiduMap
            ﹂migrations
              __init__.py
            __init__.py
            admin.py
            apps.py
            models.py
            test.py
            views.py
          ﹂mapService
            __init__.py
            settings.py
            urls.py
            wsgi.py
          manage.py

        ﹂mapService
          ﹂baiduMap
            views.py

        内容修改如下：
        # coding:utf-8
        # from django.shortcuts import render
        # Create your views here.
        from django.http import HttpResponse
        def index(request):
          return HttpResponse("hello world")

        ﹂mapService
          ﹂mapService
            urls.py

        内容修改如下：
        from django.conf.urls import url
        from django.contrib import admin
        from baiduMap import views as map_views  # new

        urlpatterns = [
            url(r'^admin/', admin.site.urls),
            url('', map_views.index),  # new
        ]
        ﹂mapService
          ﹂mapService
            settings.py
        修改：
        ALLOWED_HOSTS = ['*']
        >>> python manage.py runserver 0.0.0.0:8000
      </pre>
    </div>
</template>

<script>
export default {
  name: 'init',
  data () {
    return {
      msg: 'this is init'
    }
  }
}
</script>

<style scoped>

</style>
