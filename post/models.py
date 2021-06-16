from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Post(models.Model):
	UserId=models.ForeignKey(User,on_delete=models.CASCADE)
	Title=models.CharField(max_length=200)
	Body=models.TextField()

	def __str__(self):
		return f"UserId:- {self.UserId} Title:- {self.Title}"


class POSTPost(models.Model):
	UserId=models.ForeignKey(User,on_delete=models.CASCADE)
	Title=models.CharField(max_length=200)
	Body=models.TextField()

	def __str__(self):
		return f"UserId:- {self.UserId} Title:- {self.Title}"



