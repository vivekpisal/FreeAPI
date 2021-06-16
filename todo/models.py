from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Todo(models.Model):
	UserId=models.ForeignKey(User,on_delete=models.CASCADE)
	Title=models.CharField(max_length=200)
	Completed=models.BooleanField()

	def __str__(self):
		return f"{self.UserId} {self.Title}"

class PostTodo(models.Model):
	UserId=models.ForeignKey(User,on_delete=models.CASCADE)
	Title=models.CharField(max_length=200)
	Completed=models.BooleanField()

	def __str__(self):
		return f"{self.UserId} {self.Title}"


