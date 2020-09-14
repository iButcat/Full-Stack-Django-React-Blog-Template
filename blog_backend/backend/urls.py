from django.urls import path, include

from rest_framework import routers
from .api import ArticleViewSet, ContactViewSet

router = routers.SimpleRouter()
router.register ('article', ArticleViewSet, 'article')
router.register('contact', ContactViewSet, 'contact')

urlpatterns = [
  path('api/', include(router.urls))
]
