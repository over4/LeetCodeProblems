#Given an integer array nums, return true if any value appears at least twice in the array
# , and return false if every element is distinct.

list1 = [1,2,3,1]
list2 = [1,2,3,4]
list3 = [1,1,1,2,3,3,3,3,4,4,4,4,2,1,2]

def hasDup(list):
    #create the variable to return if the array has a duplicate or not
    ans = True
    #create a set to keep track of the elements we have seen before
    #compare the length at the end and if they match then no duplicates
    set1 = set([])
    
    #loop through the array
    for i in list:
        set1.add(i)
    if(len(set1) == len(list)):
        #then we know no duplicates
        ans = False
        
    
    return ans

print(hasDup(list1))
print(hasDup(list2))
print(hasDup(list3))
