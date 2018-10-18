# coding:utf-8
# from django.shortcuts import render

# Create your views here.


# from django.http import HttpResponse
#
#
# def index(request):
#   return HttpResponse("欢迎光临 自强学堂!")

from django.shortcuts import render
from django.http import HttpResponse
# Django中对于基于函数的视图我们可以 @csrf_exempt 注解来标识一个视图可以被跨域访问
from django.views.decorators.csrf import csrf_exempt

def index(request):
    return render(request, 'home.html')

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
