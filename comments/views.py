from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


# Create your views here.
@api_view(["GET"])
def AllComments(request):
	if request.method == "GET":
		comments = Comments.objects.all()
		data = Commentserializers(comments,many=True)
		return Response(data.data)