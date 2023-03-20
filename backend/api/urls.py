from django.urls import path
from . import views
from .views import *

urlpatterns = [
    path('placement/', views.PlacementList.as_view()),
    path('branch/', views.BranchList.as_view()),
    path('year/', views.YearList.as_view()),
    path('exam/', views.ExamList.as_view()),
    path('question/', views.QuestionList.as_view()),
    path('book/', getBooksByDept),
]
