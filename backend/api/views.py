from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from .models import *
from rest_framework.generics import ListAPIView


@api_view(['GET', 'POST'])
def getBooksByDept(request):
    if request.method == "GET":
        data = Book.objects.all()
        serializer = BookSerializer(data, many=True)
        return Response(serializer.data, status=200)
    else:
        pass


class PlacementList(ListAPIView):
    queryset = Placement.objects.all()
    serializer_class = PlacementSerializer


class BranchList(ListAPIView):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer


class YearList(ListAPIView):
    queryset = Year.objects.all()
    serializer_class = YearSerializer


class ExamList(ListAPIView):
    queryset = Exam.objects.all()
    serializer_class = ExamSerializer


class QuestionList(ListAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class BookList(ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
