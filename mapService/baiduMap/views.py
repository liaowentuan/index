# coding:utf-8
# from django.shortcuts import render

# Create your views here.


# from django.http import HttpResponse
#
#
# def index(request):
#   return HttpResponse("欢迎光临 自强学堂!")

from django.shortcuts import render

def index(request):
    return render(request, 'home.html')
