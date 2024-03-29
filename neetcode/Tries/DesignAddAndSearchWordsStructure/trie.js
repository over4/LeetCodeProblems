// Design a data structure that supports adding new words and finding if 
// a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure 
// that matches word or false otherwise. word may contain dots '.' where dots 
// can be matched with any letter.

// Example:

// Input
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// Output
// [null,null,null,null,false,true,true,true]

// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True
 

// Constraints:

// 1 <= word.length <= 25
// word in addWord consists of lowercase English letters.
// word in search consist of '.' or lowercase English letters.
// There will be at most 2 dots in word for search queries.
// At most 104 calls will be made to addWord and search.

//define a trie node, which will hold a map for each char and a flag 
//for if it is the end of a word
class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

class WordDictionary{
    constructor(){
        this.root = new TrieNode
    }
    addWord(word,node = this.root){
        //loop through each char and see if it exists inside each node and add it if it
        //doesnt exist already
        for(const char of word){
            //this will get a reference to the child map if it exists, or make a new one
            //if it doesnt
            const child = node.children[char]|| new TrieNode()

            //add the char to the child map
            node.children[char] = child

            //set the new root to be the curr child to go deeper in the trie
            node = child
        }
        //after we reach the end of the word, set the flag so we know it is a word now
        node.isWord = true
    }
    search(word){
        //implement a recursive dfs search for when a wildcard is present because we know
        //we have to check every child of that node and return true if we find the first
        //match
        return this.dfs(word,this.root,0)
    }
    //define the dfs to use in the search function
    dfs(word,node,level){
        //define the base case
        if(!node)return false
        //flag checks if the current level is the right length of the word
        const isWord = (level === word.length)
        if(isWord)return node.isWord

        //another flag for checking if we have a wildcard
        const isWildCard = (word[level] === '.')
        if(isWildCard)return this.hasWildCard(word,node,level)

        //apply the recursive dfs
        return this.dfs(word,node.children[word[level]],level +1)
    }
    //define another helper function that checkes all nodes in the children map
    //when a wildcard is present
    hasWildCard(word,node,level){
        //loop through all the values in the children map of the node that was passed in
        for(const char of Object.keys(node.children)){
            //get a reference to all the values that belong to this char
            const child = node.children[char]
            //call the dfs on the right of the nodes
            const hasWord = this.dfs(word,child,level+1)
            //found the word
            if(hasWord)return true
        }
        //never found a word
        return false
    }
}