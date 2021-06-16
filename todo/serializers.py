from rest_framework.serializers import ModelSerializer
from .models import *


class TodoSerializer(ModelSerializer):
	class Meta:
		model=Todo
		fields="__all__" 

class PostTodoSerializer(ModelSerializer):
	class Meta:
		model = PostTodo
		fields = "__all__"