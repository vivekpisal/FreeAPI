from django.db import models
from post.models import Post

# Create your models here.
class Comments(models.Model):
	PostID=models.ForeignKey(Post,on_delete=models.CASCADE)
	Name=models.CharField(max_length=100)
	Email=models.EmailField()
	Body=models.TextField()

	def __str__(self):
		return f"PostID:- {self.PostID} Name:- {self.Name}"