from django.contrib import admin
from .models import Article, Contact


class ArticleAdmin(admin.ModelAdmin):
    pass


class ContactAdmin(admin.ModelAdmin):
    pass


admin.site.register(Article, ArticleAdmin)
admin.site.register(Contact, ContactAdmin)
