# CGPA
L11 = float(input('Enter 100 first semesters gpa '))
L12 = float(input('Enter 100 second semesters gpa '))
L21 = float(input('Enter 200 first semesters gpa '))
L22 = float(input('Enter 200 second semesters gpa '))
L31 = float(input('Enter 300 first semesters gpa '))
L32 = float(input('Enter 300 second semesters gpa '))

cgpa = ((L11 + L12) / 2 + (L21 + L22) / 2 + (L31 + L32)) / 4
print('Your cgpa is ', cgpa)

L41 = float(input('Enter 400 first semesters gpa '))
L42 = float(input('Enter 400 second semesters gpa '))
cgpa = ((L11 + L12) / 2 + (L21 + L22) / 2 + (L31 + L32) + (L41 + L42)) / 6
print('Your cgpa is %.2f' % cgpa)
