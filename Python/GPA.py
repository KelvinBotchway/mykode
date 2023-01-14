count = 0
hrs = 0
totalhours = 0
totalPoints = 0.0
gpa = 0.0

numberofsubject = int(input("Enter total number of  courses: "))
for count in range(count, numberofsubject):
    print("For subject # ", count + 1)
    grade = input("Enter the grade: ")
    hrs = int(input("Enter the credit hours: "))

    if grade == 'A' or grade == 'a':
        totalPoints = totalPoints + (hrs * 4)
        totalhours = totalhours + hrs

    elif grade == 'B+' or grade == 'b+':
        totalPoints += (hrs * 3.5)
        totalhours += hrs

    elif grade == 'B' or grade == 'b':
        totalPoints += (hrs * 3.0)
        totalhours += hrs

    elif grade == 'C+' or grade == 'c+':
        totalPoints += (hrs * 2.5)
        totalhours += hrs

    elif grade == 'C' or grade == 'c':
        totalPoints += (hrs * 2.0)
        totalhours += hrs

    elif grade == 'D+' or grade == 'd+':
        totalPoints += (hrs * 1.5)
        totalhours += hrs

    elif grade == 'D' or grade == 'd':
        totalPoints += (hrs * 1.0)
        totalhours += hrs

    elif grade == 'E' or grade == 'e':
        totalPoints += (hrs * 0.5)
        totalhours += hrs

    else:
        totalPoints += (hrs * 0.0)
        totalhours += hrs

gpa = totalPoints / totalhours
print("Your GPA is :", gpa)

# CGPA
L11 = float(input('Enter 100 first semesters gpa '))
L12 = float(input('Enter 100 second semesters gpa '))
L21 = float(input('Enter 200 first semesters gpa '))
L22 = float(input('Enter 200 second semesters gpa '))
L31 = float(input('Enter 300 first semesters gpa '))
L32 = float(input('Enter 300 second semesters gpa '))

cgpa = ((L11 + L12) / 2 + (L21 + L22) / 2 + (L31 + L32)) / 4
print('Your cgpa is ', cgpa)

L41 = float(input('Enter 400 second semesters gpa '))
L42 = float(input('Enter 400 second semesters gpa '))
cgpa = ((L11 + L12) / 2 + (L21 + L22) / 2 + (L31 + L32) + (L41 + L42)) / 6
print('Your cgpa is %.2f' % cgpa)
