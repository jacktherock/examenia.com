from django.db import models


class Placement(models.Model):
    company_name = models.CharField(max_length=200)
    company_domain = models.TextField()
    company_description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.company_name


class Branch(models.Model):
    branch_name = models.CharField(max_length=100)

    def __str__(self):
        return self.branch_name


class Year(models.Model):
    year_name = models.CharField(max_length=100, default='FE')
    year_time = models.IntegerField()
    branch = models.ForeignKey(Branch, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f'{self.year_name} - {self.branch} - {self.year_time}'


class Exam(models.Model):
    exam_name = models.CharField(max_length=100)
    year = models.ForeignKey(Year, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f'{self.exam_name} - {self.year}'


class Question(models.Model):
    question_name = models.TextField()
    question_answer = models.TextField()
    exam_name = models.ManyToManyField(Exam)

    def __str__(self) -> str:
        return f'{self.question_name[:20]}'


class Book(models.Model):
    book_subject_name = models.CharField(max_length=255, default='')
    book_publication_name = models.CharField(max_length=255)
    book_link = models.TextField()
    year = models.ForeignKey(
        Year, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self) -> str:
        return f'{self.book_subject_name} + {self.book_publication_name}'
