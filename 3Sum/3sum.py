# Given an integer array nums, return all the triplets
# [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
# and nums[i] + nums[j] + nums[k] == 0.

# Notice that the solution set must not contain duplicate triplets.

nums = [-1,0,1,2,-1,-4]
nums2 = [0,1,1]
# Output: [[-1,-1,2],[-1,0,1]]

# for idx,x in enumerate(list1):
#go tho every possible combination


def threesums(array):
    output = []
    for idx1,i in enumerate(array):
        for idx2,j in enumerate(array):
            for idx3,k in enumerate(array):
                if (idx1 == idx2 ==idx3) or (idx1 == idx2) or (idx1 == idx3) or (idx2 == idx3):
                    continue
                if (i + j + k) == 0:
                    if ([i,j,k] in output) or ([i,k,j] in output) or ([j,i,k] in output) or ([j,k,i] in output) or ([k,i,j] in output) or ([k,j,i] in output):
                        continue
                    else:
                        output.append([i,j,k])
    print(output)

threesums(nums)


#prints out a slightly different answer but is the same thing, this one just finds
# [-1,2,-1] first before [-1,-1,2] and therefore it is not added