from django.contrib import admin
from django.urls import path,include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('todos/',include("todo.urls")),
    path('posts/',include("post.urls")),
    path('comments/',include("comments.urls")),
    path('', TemplateView.as_view(template_name="index.html"))
]
