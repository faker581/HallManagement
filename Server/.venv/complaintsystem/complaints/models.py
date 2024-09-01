from django.db import models

# Create your models here.
from django.db import models

class Complaint(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField()
    roll_number = models.CharField(max_length=20)
    image = models.ImageField(upload_to='complaints/images/', blank=True, null=True)
    subject = models.CharField(max_length=200)
    description = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.subject} by {self.username}"
