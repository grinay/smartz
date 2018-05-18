# Generated by Django 2.0.3 on 2018-05-18 08:24

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='PublicKey',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('public_key', models.CharField(max_length=60)),
                ('blockchain', models.CharField(choices=[('ethereum', 'Ethereum'), ('eos', 'EOS')], max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='RandomDataForSign',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('public_key', models.CharField(max_length=60)),
                ('blockchain', models.CharField(choices=[('ethereum', 'Ethereum'), ('eos', 'EOS')], max_length=50)),
                ('description', models.CharField(max_length=300)),
                ('data', models.CharField(max_length=32)),
                ('valid_to', models.DateTimeField(db_index=True)),
            ],
        ),
        migrations.AddIndex(
            model_name='randomdataforsign',
            index=models.Index(fields=['public_key', 'blockchain'], name='users_rando_public__48036e_idx'),
        ),
        migrations.AddField(
            model_name='publickey',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterUniqueTogether(
            name='publickey',
            unique_together={('public_key', 'blockchain')},
        ),
    ]
