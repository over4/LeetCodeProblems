import math
from math import trunc

#median of two sorted arrays

array1 = [1,3,4]
array2 = [2]
finalarray = []


def findMedian(array1,array2):
    while(array1 or array2):
        if array1 and array2:
            #pop the values
            pass
            if array1[len(array1)-1] >= array2[len(array2)-1]:
                finalarray.append(array1.pop())
            else:
                finalarray.append(array2.pop())
        else:   
            #empty list and check which is empty
            if array1:
                #then array2 is empty
                    finalarray.append(array1.pop())
            else:
                #then array1 is empty
                    finalarray.append(array2.pop())
    if len(finalarray) % 2 == 1:
        #we know the array is odd and can take the midpoint
        print("the median is: "+  str(finalarray[math.ceil((len(finalarray))/2)-1]))
    else:
        median = (finalarray[trunc(len(finalarray)/2 )] + finalarray[trunc(len(finalarray)/2-1)])/2
        #even so need to take the average of the two values in the middle
        print("the median is: " + str(median))
    print(finalarray)
        

findMedian(array1, array2)









# def findMedian(array1, array2):
#     array1Len = len(array1)
#     array2len = len(array2)
#     combinedLength = array1Len + array2len
#     finalarray = []
#     counter1 = 0 
#     counter2 = 0
#     #loop through the longer array and place the values accordingly
#     while counter1 + counter2 <= combinedLength:
#         #check to find the lowest value
#         if array1[counter1] == null:
#             #reached the end of the one array so append the rest to the final array
#             pass
#             finalarray.extend()
#         if array2[counter2] == null:
#             pass
        
            
            
        
#         if array1[counter1] <= array2[counter2]:
#             #array one has the smallest starting value
#             finalarray.append(array1[counter1])
#             counter1 = counter1 + 1
#         else:
#             #array two has the smallest starting value
#             finalarray.append(array2[counter2])
#             counter2 = counter2 + 1
#     print(finalarray)
    
# findMedian(array1, array2)