from rest_framework import serializers
from .models import *


class Postserializers(serializers.ModelSerializer):
	class Meta:
		model = Post
		fields="__all__"


class POSTPostserializers(serializers.ModelSerializer):
	class Meta:
		model = POSTPost
		fields="__all__"



