from django.db import models
import PIL


class Article(models.Model):
    title = models.CharField(max_length=70)
    content = models.TextField()
    category_choice = (
        ('s', 'Software'),
        ('b', 'Book'),
        ('d', 'Development'),
        ('t', 'Tips'),
        ('s', 'Tutorial'),
        ('w', 'Web'),
        # add more for other choice
    )
    category = models.CharField(max_length=1, choices=category_choice)
    picture = models.ImageField(blank=True, null=True)
    date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title


class Contact(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.first_name
