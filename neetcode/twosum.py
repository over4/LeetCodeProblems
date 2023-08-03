# Given an array of integers nums and an integer target,
# return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.

# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]

testarray1 = [2,7,11,15]
testtarget1 = 9

testarray2 = [3,2,4]
testtarget2 = 6

testarray3 = [3,3]
testtarget3 = 6


#--------------------------------------------------------------------------------------------------------------
#method one brute force

def twoSumBruteForce(list,target):
    
    for idx,firstnumber in enumerate(list):
        for idy,secondnumber in enumerate(list):
            if(idx == idy):
                #same element so dont use
                continue
            if(firstnumber + secondnumber) == target:
                #found our target so return the indices
                return {idx,idy}
    return
    

#print(twoSumBruteForce(testarray1,testtarget1))
#print(twoSumBruteForce(testarray2,testtarget2))
#print(twoSumBruteForce(testarray3,testtarget3))



#---------------------------------------------------------------------------------------------------------------
#method two one pass
#create hashmap of the list and the check if the other number exists in the hash map

def twoSumOnePass(list,target):
    #create the hashmap
    hashmap = {}
    for idx, number in enumerate(list):
        #popluate the hashmap with the key value pairs(idx)
        hashmap[number] = idx
        
    #go through the list again and check if the difference 
    #between target and current number are in the hash map
    #if it is then we have a solution   
    for idx, n in enumerate(list):
        diff = target - n
        if diff in hashmap:
            return [hashmap[diff],idx]
    return



print(twoSumOnePass(testarray1,testtarget1))
print(twoSumOnePass(testarray2,testtarget2))
print(twoSumOnePass(testarray3,testtarget3))



