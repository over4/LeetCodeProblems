#find the longest substring without repeating characters
#created a dictionary of letters that have been seen before 
string1 = "abcabcbb"
string2 = "bbbbb"
string3 = "pwwkew"

def longestsubstring(input):
    
    #value to keep track of longest string
    longestLength = 0
    #variable to keep track of the  longest substring
    workingString = ""
    seenString = ""
    longeststring = ""
    
    for x in input:
        #add to the list of letters we have seen
        if x in seenString:
             #then we know we have seen this letter before and can go to the next value
            if len(workingString) >= longestLength:
                #new longest string
                longestLength = len(workingString)
                longeststring = workingString   
            #reset the values
            seenString = str(x)
            workingString = str(x)
            continue
        else:
            seenString = seenString + str(x)
            workingString = workingString + str(x)
            #we know it isnt in the string
            #check if it is largest then the currect largest
            
    print(longeststring)
            
            
longestsubstring(string1)
longestsubstring(string2)
longestsubstring(string3)
                
            
    
        
        
        
        