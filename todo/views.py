from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(["GET","POST"])
def GetTodo(request):
	if request.method == "GET":
		todo = Todo.objects.all()
		data = TodoSerializer(data=todo,many=True)
		data.is_valid()
		return Response(data.data)
	elif request.method == "POST":
		todo = PostTodoSerializer(data=request.data)
		if todo.is_valid():
			return Response(todo.data,status=status.HTTP_201_CREATED)
		else:
			return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(["DELETE","GET","PUT"])
def DGPTodo(request,pk):
	try:
		todo = Todo.objects.get(pk=pk)
		data = TodoSerializer(todo)
	except:
		return Response(status=status.HTTP_400_BAD_REQUEST)

	if request.method == "GET":
			return Response(data.data)

	elif request.method == "DELETE":
			return Response({},status=status.HTTP_200_OK)

	elif request.method == "PUT":
		serializer = TodoSerializer(todo,data=request.data)
		if serializer.is_valid():
			return Response(request.data)
		else:
			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



