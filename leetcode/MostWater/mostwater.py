#You are given an integer array height of length n. There are n 
# vertical lines drawn such that the
# two endpoints of the ith line are (i, 0) and (i, height[i]).

heights = [1,8,6,2,5,4,8,3,7]


def maxwater(list1):
    tempmax = 0
    currentvol = 0
    
    for idx,x in enumerate(list1):
        for idy,y in enumerate(list1):
            #if the same index
            if idx == idy:
                continue
            #take the indexes and multiply by the smaller value
            if x<y:
                currentvol = x * abs((idx-idy))
            else:
                currentvol = y * abs((idx-idy))
            if currentvol > tempmax:
                tempmax = currentvol
    print(tempmax)
            
    


maxwater(heights)