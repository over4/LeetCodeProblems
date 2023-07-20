# Given a string containing digits from 2-9 inclusive, 
# return all possible letter combinations that the number could represent. 
# Return the answer in any order.

# A mapping of digits to letters (just like on the telephone buttons) is 
# given below. Note that 1 does not map to any letters.

# Input: digits = "23"
# Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

digits = "23" #6 combinations
digits2 = "37" 
digits3 = "578" #27 combinations

#no longer than 4 numbers
Output = []

#make a dictionary of all keys

class solution(object):
    def phoneCodes(self ,testNumber):
        #check for empty
        if len(testNumber) == 0:
            return[]
        #list of all phone codes
        chars = {2:"abc",3:"def",4:"ghi",5:"jkl",6:"mno",7:"pqrs",8:"tuv",9:"wxyz"}
        result = []
        #call solver function
        self.solver(testNumber,chars,result)
        return result
    def solver(self, testNumber,chars,result,current = "",level =0):
        #check the level of the tree we are in and make base case
        if level == len(testNumber):
            result.append(current)
            return
        #recursively send solver
        for i in chars[int(testNumber[level])]:
            self.solver(testNumber,chars,result,current+i,level+1)
    
object1 = solution()
# print(object1.phoneCodes(digits))
print(object1.phoneCodes(digits2))
# print(object1.phoneCodes(digits3))




