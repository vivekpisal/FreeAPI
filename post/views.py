from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from comments.models import Comments
from .serializers import *
from comments.serializers import Commentserializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(["GET","POST"])
def AllPost(request):
	if request.method == "GET":
		allpost = Post.objects.all()
		data = Postserializers(allpost,many=True)
		return Response(data.data)

	elif request.method == "POST":
		data = POSTPostserializers(data=request.data)
		if data.is_valid():
			return Response(data.data,status=status.HTTP_201_CREATED)
		else:
			return Response(status=status.HTTP_400_BAD_REQUEST)




@api_view(["GET","DELETE","PUT"])
def SinglePost(request,pk):
	try:
		post = Post.objects.get(pk=pk)
	except:
		return Response(status=status.HTTP_404_NOT_FOUND)
	
	if request.method == "GET":
		data = Postserializers(post,many=False)
		return Response(data.data)
		
	elif request.method == "DELETE":
		return Response(status=status.HTTP_200_OK)

	elif request.method == "PUT":
		serializer = Postserializers(post,data=request.data)
		if serializer.is_valid():
			return Response(request.data)


@api_view(["GET"])
def GetComments(request,pi):
	if request.method == "GET":
		comments = Comments.objects.filter(PostID=pi)
		data = Commentserializers(comments,many=True)
		return Response(data.data)



