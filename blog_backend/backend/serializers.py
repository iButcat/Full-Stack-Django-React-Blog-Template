from rest_framework import serializers
from .models import Article, Contact


class ArticleSerializers(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
        lookup_field = 'id'


class ContactSerializers(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
