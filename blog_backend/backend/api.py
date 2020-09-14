from .models import Article, Contact
from rest_framework import viewsets, permissions
from rest_framework.permissions import IsAdminUser
from .serializers import ArticleSerializers, ContactSerializers


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    permission_classes = [
    permissions.AllowAny
    ]
    serializer_class = ArticleSerializers


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    permission_classes = [
    permissions.AllowAny
    ]
    serializer_class = ContactSerializers
