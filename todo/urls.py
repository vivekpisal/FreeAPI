from django.urls import path
from .views import *

urlpatterns=[
	path("",GetTodo,name="GetTodo"),
	path("<int:pk>",DGPTodo,name="DGPTodo"),
]