# Define a function to add two numbers
def add(a, b):
    return a + b

# Define a function to subtract the second number from the first number
def subtract(a, b):
    return a - b

# Define a function to multiply two numbers
def multiply(a, b):
    return a * b

# Define a function to divide the first number by the second number
def divide(a, b):
    try:
        # Attempt to perform the division
        return a / b
    except ZeroDivisionError:
        # Handle the case where the second number is zero
        return "Cannot divide by zero!"

# Define the main calculator function
def calculator():
    # Display the available operations
    print("Select operation: ")
    print("1. ADD")
    print("2. SUBTRACT")
    print("3. MULTIPLY")
    print("4. DIVIDE")
    
    # Prompt the user to select an operation
    operation = int(input("Enter choice (1/2/3/4): "))
    
    # Check if the selected operation is valid
    if operation in [1, 2, 3, 4]:
        # Prompt the user to enter the first number
        a = float(input("Enter first number: "))
        # Prompt the user to enter the second number
        b = float(input("Enter second number: "))
        
        # Perform the selected operation and display the result
        if operation == 1:
            print(f"The result is: {add(a, b)}")
        elif operation == 2:
            print(f"The result is: {subtract(a, b)}")
        elif operation == 3:
            print(f"The result is: {multiply(a, b)}")
        elif operation == 4:
            print(f"The result is: {divide(a, b)}")
    else:
        # Display an error message for invalid input
        print("Invalid input")

# Call the calculator function to start the program
calculator()
