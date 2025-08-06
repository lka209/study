# co = float(input('valor do cateto oposto:'))
# ca = float(input('valor do cateto adjacente:'))
# Hi = (co ** 2 + ca ** 2) ** (1/2)
# print('a hipotenusa vai medir {:.2f}'.format(Hi))


from math import hypot
co = float(input('valor do cateto oposto:'))
ca = float(input('valor do cateto adjacente:'))
H = hypot(co, ca)
print(f'a hipotenusa vai medir {H:.2f}')

