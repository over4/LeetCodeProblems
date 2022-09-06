#Given a signed 32-bit integer x, 
#return x with its digits reversed. 
# If reversing x causes the value to go outside 
# the signed 32-bit integer range [-231, 231 - 1], then return 0.

num1 = 123
num2 = -123
num3 = 120
num4 = -120123131313131313131312313123123123123


def reverseInt(number):
    #store some values and inialize reverse to 0
    tempnum = number
    reverse = 0
    #check if the value would be out of the range
    if tempnum > 2**31 or tempnum < -2**31:
        return print("0")
    #loop thru the number until there is nothing left
    while tempnum != 0:
        #get the last digit of the number
        digit = tempnum % 10
        #add the last didgit and make room for it by multiplying by 10
        reverse = reverse * 10 + digit
        #divid the odd number by 10 to get the new last digit
        tempnum //= 10
    print(reverse)

reverseInt(num4)