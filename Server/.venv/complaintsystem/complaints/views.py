from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from .models import Complaint
from .serializers import ComplaintSerializer

@csrf_exempt
@require_http_methods(["POST"])
def submit_complaint(request):
    try:
        # Use parsers for handling different content types
        parser_classes = [MultiPartParser, FormParser]
        # Only use if you are integrating with Django REST Framework
        # data = request.data
        data = request.POST
        files = request.FILES

        serializer = ComplaintSerializer(data=data, files=files)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'status': 'success'}, status=201)
        return JsonResponse({'errors': serializer.errors}, status=400)
    except Exception as e:
        # Log the exception
        print(f"Error: {e}")
        return JsonResponse({'error': 'An error occurred'}, status=500)
