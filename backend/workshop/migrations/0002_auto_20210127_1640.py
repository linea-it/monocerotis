# Generated by Django 3.1.5 on 2021-01-27 16:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workshop', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='subscription',
            name='country',
            field=models.CharField(default=1, max_length=150, verbose_name='Country'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='subscription',
            name='is_active',
            field=models.BooleanField(default=False, verbose_name='Account Verification'),
        ),
    ]
