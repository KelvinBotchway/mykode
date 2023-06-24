# CGPA
L11 = 3.14
L12 = 3.75
L21 = 3.67
L22 =3.61
L31 = 3.33
L32 = 3.56
L400 = 3.45

cgpa = ((L11 + L12) / 2 + (L21 + L22) / 2 + (L31 + L32)) / 4
print('Your cgpa is ', cgpa)

L41 = float(input('Enter 400 first semesters gpa: '))
L42 = float(input('Enter 400 second semesters gpa: '))
cgpa = ((L11 + L12) / 2 + (L21 + L22) / 2 + (L31 + L32) + (L41 + L42)) / 6
print('Your cgpa is %.2f' % cgpa)
