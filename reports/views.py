from django.shortcuts import render
from profiles.models import Profile
from django.http import JsonResponse
# Create your views here.


def create_report_view(request):
    if request.is_ajax():
        name = request.POST.get('name')
        remarks = request.POST.get('remarks')
        image = request.POST.get('image')

        author = Profile.objects.get(user=request.user)
        return JsonResponse({'msg':'send'})
    return JsonResponse({})
