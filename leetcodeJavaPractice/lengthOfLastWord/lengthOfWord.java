package leetcodeJavaPractice.lengthOfLastWord;


public class lengthOfWord {
    public static void main(String[] args){
        String string1 = "Hello World";
        String string2 = "   fly me   to   the moon  ";
        String string3 = "luffy is still joyboy";
        System.out.println(ans(string1)); //5
        System.out.println(ans(string2)); //4
        System.out.println(ans(string3)); //6
    }
    public static int ans(String s){
        
        s = s.stripTrailing();
        if(s.length() == 1)return 1;
        //now we know that the last index will be the last letter of that word
        //so we can work backwards until we reach another space and return that
        
        for(int i = s.length()-1;i>=0;i--){
            if(s.charAt(i) == ' '){
                //this means we reached the next space so our word is complete
                return s.length()-1  - i;
            }
        }
        //this means the entire string is 1 word so return the length of the string
        return s.length();
    }
}
