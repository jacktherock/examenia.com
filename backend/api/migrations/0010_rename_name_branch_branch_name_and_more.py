# Generated by Django 4.1.7 on 2023-03-19 17:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_alter_book_year'),
    ]

    operations = [
        migrations.RenameField(
            model_name='branch',
            old_name='name',
            new_name='branch_name',
        ),
        migrations.RenameField(
            model_name='question',
            old_name='exam_name',
            new_name='exam',
        ),
        migrations.RenameField(
            model_name='year',
            old_name='name',
            new_name='year_name',
        ),
        migrations.RenameField(
            model_name='year',
            old_name='year',
            new_name='year_time',
        ),
    ]
