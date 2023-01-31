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

