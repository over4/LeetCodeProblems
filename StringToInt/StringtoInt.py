#program to convert strings to ints 

string1= "42"
string2= "   -42"
string3= "4193 with words"


def myAtoi(s):
    string = s
    finalString = ""
    #first check for the white space
    string = string.replace(" ", "")
    if string[0] == "-" or string[0] == "+":
        #now we know the string is either positive or negative
        finalString = finalString + string[0]
        string = string.strip("-+")
        
    for x in string:
        if x.isdigit():
            #add to the new string
            finalString = finalString + x
        else:
            #not a digit so ignore the rest
            string = string.rsplit(x)
            break
    print(finalString)

#test cases
myAtoi(string1)
myAtoi(string2)
myAtoi(string3)