from math import radians, sin, cos, tan
angulo = float(input('digite o angulo:'))
seno = sin(radians(angulo))
print('o angulo de {} tem o seno de {:.2F}'.format(angulo,seno))
coseno = cos(radians(angulo))
print('o angulo de {} tem o coseno de {:.2F}'.format(angulo,coseno))
tangente = tan(radians(angulo))
print('o angulo de {} tem o tangente de {:.2F}'.format(angulo,tangente))
