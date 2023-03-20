from django.contrib import admin
from .models import *


@admin.register(Placement)
class PlacementAdmin(admin.ModelAdmin):
    list_display = ['id', 'company_name',
                    'company_domain', 'company_description']


@admin.register(Branch)
class BranchAdmin(admin.ModelAdmin):
    list_display = ['id', 'branch_name']


@admin.register(Year)
class YearAdmin(admin.ModelAdmin):
    list_display = ['id', 'year_name', 'year_time', 'branch']


@admin.register(Exam)
class ExamAdmin(admin.ModelAdmin):
    list_display = ['id', 'exam_name', 'year']


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ['id', 'question_name', 'question_answer']
    # pass


@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ['id', 'book_subject_name', 'book_publication_name']
    # pass
