from django.db import models

class Member(models.Model):
  username = models.CharField(max_length=30)
  age = models.IntegerField(null=True)
  date = models.DateField(null=True)

  def __str__(self):
    return f"{self.date}-{self.id}-{self.username}-{self.age}"