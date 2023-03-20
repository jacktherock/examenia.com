from rest_framework.serializers import ModelSerializer
from .models import *


class PlacementSerializer(ModelSerializer):
    class Meta:
        model = Placement
        fields = '__all__'


class BranchSerializer(ModelSerializer):
    class Meta:
        model = Branch
        fields = '__all__'


class YearSerializer(ModelSerializer):
    branch = BranchSerializer()

    class Meta:
        model = Year
        fields = ['id', 'year_name', 'year_time', 'branch']


class ExamSerializer(ModelSerializer):
    year = YearSerializer()

    class Meta:
        model = Exam
        fields = ['id', 'exam_name', 'year']


class QuestionSerializer(ModelSerializer):
    # exam_name=ExamSerializer()

    class Meta:
        model = Question
        fields = '__all__'
        # fields = ['id','question_name','question_answer','exam_name']


class BookSerializer(ModelSerializer):
    year = YearSerializer()

    class Meta:
        model = Book
        fields = ['id', 'book_subject_name',
                  'book_publication_name', 'book_link', 'year']
