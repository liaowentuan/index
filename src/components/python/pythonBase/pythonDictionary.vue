<template>
    <div>
      <h3>字典dict</h3>
      <pre>
        info = {'name':'班长', 'id':100, 'sex':'f', 'address':'地球亚洲中国北京'}

        查

        name = info.get('name')

        改

        info['id'] = 99

        增

        info['age'] = 88

        删除

        del info['name']  # 删除子元素
        del info          # None
        info.clear()      # {}

        长度 len()
        info = {'name':'班长', 'id':100, 'sex':'f', 'address':'地球亚洲中国北京'}
        len(info)
        >>> 4

        键名 dict.keys()
        info.keys()
        >>> ['name','id','sex','address']

        键值 dict.values()
        info.values()
        >>> ['班长','100','f','地球亚洲中国北京']

        dict.items()
        info.items()
        >>> [('name':'班长'), ('id':100), ('sex':'f'), ('address':'地球亚洲中国北京')]

        has_key
        info.has_key('name')
        True
        info.has_key('error')
        False
      </pre>
    </div>
</template>

<script>
export default {
  name: 'python-dictionary',
  data () {
    return {
      msg: 'this is python-dictionary'
    }
  }
}
</script>

<style scoped>

</style>
