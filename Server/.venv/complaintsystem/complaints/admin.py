from django.contrib import admin
from .models import Complaint

@admin.register(Complaint)
class ComplaintAdmin(admin.ModelAdmin):
    list_display = ('username', 'roll_number', 'email', 'subject', 'created_at','image')
