# Generated by Django 4.1.7 on 2023-03-19 12:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_placement_book'),
    ]

    operations = [
        migrations.RenameField(
            model_name='book',
            old_name='book_name',
            new_name='book_publication_name',
        ),
        migrations.AddField(
            model_name='book',
            name='book_subject_name',
            field=models.CharField(default='', max_length=255),
        ),
    ]
