<template>
    <div>
      <h3>引入静态文件1.11.12</h3>
      <!--eslint-disable-->
      <pre>
        html:
          < link rel="stylesheet" href="{% static 'css/home.css' %}" >
          < script src="{% static 'js/home.js' %}">< /script >

        ﹂ settings.py

        STATIC_URL = '/static/' # 关键语句 虽然没改动过

      </pre>
      <h3>引入模板文件</h3>
      <pre>
         ﹂app
          ﹂temp
            ﹂nav.tpl
        {% include './temp/nav.tpl' %}
      </pre>
    </div>
</template>

<script>
export default {
  name: 'django-static',
  data () {
    return {
      msg: 'this is django-static'
    }
  }
}
</script>

<style scoped>

</style>
