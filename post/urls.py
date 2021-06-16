from django.urls import path
from .views import *

urlpatterns=[
	path("",AllPost,name="allpost"),
	path("<int:pk>",SinglePost,name="singlepost"),
	path("<int:pi>/comments",GetComments,name="get_comments")
]