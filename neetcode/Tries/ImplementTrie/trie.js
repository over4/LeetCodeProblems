// A trie (pronounced as "try") or prefix tree is a tree data structure 
// used to efficiently store and retrieve keys in a dataset of strings. 
// There are various applications of this data structure, such as autocomplete 
// and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in 
// the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously 
// inserted string word that has the prefix prefix, and false otherwise.

// Example 1:

// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True

// Constraints:

// 1 <= word.length, prefix.length <= 2000
// word and prefix consist only of lowercase English letters.
// At most 3 * 104 calls in total will be made to insert, search, and startsWith.



//since we are using a modified tree datastructure we need to make the nodes
class TrieNode{
    constructor(){
        //this will keep track of the children for each letter and if we are at the
        //end of a word that we inserted
        this.children = {}
        this.isWord = false
    }
}
class Trie{
    //create the root of out tree
    constructor(){
        this.root = new TrieNode()
    }
    insert(word,node=this.root){
        //go through every char in the word and see if it already exists as a child or not
        for(const char of word){
            //this checks if the child node already for this char, and if it doesnt
            //then make a new one, if it exists then get a reference to what children it has
            const child = node.children[char] || new TrieNode()
            //add the child to the map for this char
            node.children[char] = child
            //set this so the next char will be a child of this node
            node = child
        }
        //now that we are outside of everyletter we need to set the end of word flag
        node.isWord = true
    }
    search(word, node= this.root){
        for(const char of word){
            //check if the node exists as a child of char and set it to null if it doesnt
            const child = node.children[char] || null
            //check for that null condition
            if(!child)return false
            //move to next node
            node = child

        }
        return node.isWord
    }
    startsWith(prefix,node=this.root){
        //loop through every char of prefix 
        for(const char of prefix){
            //check if node of char exists for current char
            const child = node.children[char]||null
            //if child doesnt exist then return false
            if(!child)return false
            node = child
        }
        //we must have gone through every element so return true
        return true
    }
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */