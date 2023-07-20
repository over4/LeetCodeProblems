#create and algo that will match nums in an array that add to a target

nums1 = [2,7,11,15]
nums2 = [3,2,4]
nums3 = [3,3]

#this is a solution in O^n2 time
def findIndicesInOn2(target, array):
    #create a loop to check the first index with the next in line
    for idx,x in enumerate(array):
        for idy,y in enumerate(array):
            if idy == idx:
                #same element do nothing
                pass
            elif x+y == target:
                #since there will only be one ans just store the first
                print(str(idx) + " " + str(idy))
                return
print("Indices using O n^2")                
findIndicesInOn2(9,nums1)
findIndicesInOn2(6,nums2)
findIndicesInOn2(6,nums3)
                
#now lets have a solution in less than O^n2 time
def findIndicesInOn(target,array):
    #store the compliment with the target and then loop thru to find the hash
    hashMap = {}
    
    for idx,x in enumerate(array):
        #the value that would be needed to ge to the target
        compliment = target - x
        #check if it exists in the hashmap already
        if compliment in hashMap:
            print(str(hashMap[compliment]) + " " + str(idx))
            return
        #doesnt exist already so add to the map
        hashMap[x] = idx
print("Indices using O n")
findIndicesInOn(9,nums1) 
findIndicesInOn(6,nums2)    
findIndicesInOn(6,nums3) 

    
                
                
            
    