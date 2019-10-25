# author: SHREYAS
# wassup man! btw multiple line comments are using """..."""
"""
this tutorial is literally a basically crash course for Python learning.
In this tutorial, we're going to build a simple calculator.

We're going to learn 4 things:
1. LOGIC/decision-making/comparing using: If elif else
2.  functions
3. Loops

"""

"""
Let's start with a 'function'
A function is like a coffee machine- 
you add in powder, milk and water
and you get coffee on the other end.

In the sense,
You give the function some values called 'arguments'
and the function 'returns' you some value based on its arguments

SYNTAX:

def function_name(argument1,argument2):
    # stuff to do with argument1 and argument2
    return something

One thing you should notice here that in Python:
there are no curly braces: {}
so to bind code inside a particular block
we use 'tab';

notice in the above example, everything inside
the above function_name is preceded by some space
add it using 'tab' key


now since we have defined a function using 'def'
how can we use it??
by calling it.

to call a function simply type:
funtion_name(arg1,arg2)

if the function is 'returning' something we can call it by:

returned_value = function_name(arg1,arg2)
returned_value stores what the function 'returns' 

that's it
"""


"""
now let's learn about conditional statements
that is if elif and else

it's used to make a decision
example:

a = 10 # here 'a' is a variable with value 10
if a > 10:
    print('a is greater than 10')
elif a == 10: # elif is 'else if' ALSO = means assignment and == condition checking
    print('a is equal to 10')
else: 
    print('a is less than 10')

notice here too everything that's supposed to happen inside if
contains 'tab' preceding it
IF any of the conditions are satisfied
others won't be executed.
simple logic!
"""

"""
let's learn about loops:
IN PYTHON, there are two loops:
'for loop' and 'while loop'

here we'll come across a pre-defined function called range()
it can take 3 arguments with atleast 1 ->
range(ending_value+1)
range(starting_value,ending_value+1)
range(starting_value,ending_value+1,steps)

examples:
# to print numbers from 0 to 5:
for i in range(6):
    print (i)
# here i is an iterating variable
OUTPUT:
0
1
2
3
4
5

# to print numbers from 5 to 10:
for i in range(5,11):
    print (i)
# here i is an iterating variable
OUTPUT:
5
6
7
8
9
10

THAT'S IT!
"""

"""
moreover

input() takes string inputs
even number inputs are treated as strings
'7' and not 7
so to convert strings to integers:
bind them as int('7')
GIVES 7
so better use float('7')
to convert to decimal 
GIVES 7.0
"""

# let's build the program now:

# let's create 4 funtions: add, subtract, multiply, divide:

def add(num1,num2):
    return num1+num2

def subtract(num1,num2):
    return num1-num2

def multiply(num1,num2):
    return num1*num2

def divide(num1,num2):
    return num1/num2

# let's create a function that takes inputs and prints result
# 3 inputs: num1, operator, num2

def input_function():
    num1 = float(input('enter first number: '))
    op = input('enter operator: ')
    num2 = float(input('enter second number '))

    # let's use conditional statements to check the operator type:

    if op == '+':
        value = add(num1,num2)
        print (value)
    elif op == '-':
        value = subtract(num1,num2)
        print (value)
    elif op == '*':
        value = multiply(num1,num2)
        print (value)
    elif op == '/':
        value = divide(num1,num2)
        print (value)
    else:
        print ('invalid operator')



#____THIS IS WHERE THE PROGRAM STARTS
# that's it the main function is ready! GREAT!!

input_function() # initial run
while True: # creates an infinite loop
    continue_check = input('Do you wanna continue? y/n: ')
    if continue_check.lower() == 'y':
        input_function()
    else:
        break #break kills the LOOP
        # we are being lineant here and everything other than 'y' quits program
        # ALSO
        # variable.lower() converts the entire to string to lowercase


