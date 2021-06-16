from django.urls import path
from .views import *

urlpatterns=[
	path("",AllComments,name="get_comments")
]