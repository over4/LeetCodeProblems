#convert roman numerals to normal intergers

string1 = "III"
string2 = "LVIII"
string3 = "MCMXCIV"
string4 = "MMMCMLXXXVI"

#work backwards from the string
#check if there are I X or C 1 from the back of the string
#which would apply to the current number we are working on

rom_val = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}

#if a value is lower than the following value it will be subtracted
# add if vice versa

def romanToInt(tempstring):
    int_val = 0
    for i in range(len(tempstring)):
        #check this value to see if it is larger or smaller than the next
        if i > 0 and rom_val[tempstring[i]] > rom_val[tempstring[i - 1]]:
            int_val += rom_val[tempstring[i]] - 2 * rom_val[tempstring[i - 1]]
        else:
            int_val += rom_val[tempstring[i]]
    
    print(int_val)
    
    
romanToInt(string4)
romanToInt(string1)
romanToInt(string2)
romanToInt(string3)