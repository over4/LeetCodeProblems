from collections import defaultdict


# Given two strings s and t, return true if t is an anagram of s, and false otherwise.
#
#An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
#typically using all the original letters exactly once.

#if the words are anagrams will contain the exact same characters in the words
#no doubles are allowed
#therefore check to make sure they are the same length



#after making this I now know you need to have the same number of repeated characters and I think there are some 
#edge cases where this wont work


testword1 = "anagram"
testword2 = "nagaram"

testword3 = "rat"
testword4 = "car"


def isAnagramWrong(word1,word2):
    #check to make sure the length is the same
    
    if len(word1) == len(word2):
        #add all of the letters of the first word to a set
        seenLetters = set([])
        for letter in word1:
            seenLetters.add(letter)
        #now check this against the other word 
        for letter in word2:
            if letter in seenLetters:
                #letter is in the set
                continue
            else:
                #letter is not in set so not a match
                return False
        #exit loop means that all match
        return True
        
        
    else:
        #not the same length
        return False    
    
    
#print("words anagram and nagaram: " +  str(isAnagramWrong(testword1,testword2)))
#print("words rat and car: " + str(isAnagramWrong(testword3,testword4)))








# more robust solution that works all the time using hashmaps

def isAnagramHashMaps(word1,word2):
    #first check if they are the same length as eachother
    
    if len(word1) != len(word2):
        #not the same length so cant be anagram
        return False
    
    #declare the hashmaps of both words
    word1Hash = defaultdict(str)
    word2Hash = defaultdict(str)
    
    #loop thru the first word to count how many of each letter there are 
    for firstletters in word1:
        letterCount = 0
        for secondletter in word1:
            #check against all of the other letters in the word to check for duplicates
            if (secondletter == firstletters ):
                #duplicate found so increase the counter
                letterCount = letterCount + 1
        #add the letter as the key and the number of occurances as the value      
        word1Hash[firstletters] = letterCount
    #now check to see if the hashmap of the first word will match the second    
    #complete the hashmap for the second word
    for firstletters in word2:
        letterCount = 0
        for secondletter in word2:
            #check against all of the other letters in the word to check for duplicates
            if (secondletter == firstletters ):
                #duplicate found so increase the counter
                letterCount = letterCount + 1
        #add the letter as the key and the number of occurances as the value      
        word2Hash[firstletters] = letterCount
    
    
    #now we have both maps just compare by checking each key value pair
    #can also use the .items() method 
    # word1hash(key,value) in word2Hash.items()
    if word1Hash == word2Hash:
        #hashmaps are the same
        return True
    else:
        #hashmaps are not the same
        return False


#print(isAnagramHashMaps(testword1,testword2))
#print(isAnagramHashMaps(testword3,testword4))




#simple method to check is to sort both strings then check if the are equal

def isAnagramSorted(word1,word2):
    return sorted(word1) == sorted(word2)

print(isAnagramSorted(testword1,testword2))
print(isAnagramSorted(testword3,testword4))
    
    
    
    
    
    

