# Generated by Django 4.1.7 on 2023-03-19 12:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_book_year'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='year',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.year'),
        ),
    ]
