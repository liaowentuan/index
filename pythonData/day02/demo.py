def inputGod():
  return input('请输入您的钱包总额')


def shoppingList(shopList):
  Str = '+产品序列+||+金额+||+产品+'
  for index,item in enumerate(shopList): # 升级版
    strItem = '''
    +{num}+||+{mon}+||+{name}+
    '''.format(num=index + 1,mon=item[1],name=item[2])
    Str = Str + strItem
  print('=====购物列表=======','\n',Str,'\n','===========')

def monryMsg(monry):
  Str = """
      您现有购买金额:{monry}
      """.format(monry=monry)
  return print(Str)


def getInput(mon,list):
  numb = input('请输入您要买的产品序号(输入‘q’退出)')
  if(numb != 'q'):
    monry = mon
    Str = '您输入的序号有误,请重新输入'
    for index,item in enumerate(list):
      if(numb==item[0]):
        monry = int(monry) - int(item[1])
        if monry >= 0 :
          Str = '''
            您购买了 1 台 {name} 手机 , 支付 ￥ {god} 钱 ,剩下 ￥ {mon} 前
          '''.format(name=item[2], god=item[1], mon = monry)
        elif monry < 0:
          monry = mon
          Str = '''
            您的余额不足,您当前余额是￥ {mon}
          '''.format(mon = monry)
    return [monry,Str]
  else:
    return 'q'

if __name__ == '__main__':
  shopList = [
    ('1', '1200', '小米手机'),
    ('2', '6000', '苹果手机'),
    ('3', '800', '红米手机')
  ]
  monry = inputGod()
  monryMsg(monry)
  shoppingList(shopList)
  answerArr = ''
  while answerArr != 'q':
    answerArr = getInput(monry, shopList)
    if(answerArr!='q'):
      print(answerArr[1])
      monry = answerArr[0]
  else:
    print('再见')
