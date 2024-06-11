package leetcodeJavaPractice.repeatedSubStringPattern;

public class repeated {
    public static void main(String[] s){
        String string1 = "abab";
        String string2 = "aba";
        String string3 = "abcabcabcabc";
        System.out.println(repeatedSubStringPattern(string1));
        System.out.println(repeatedSubStringPattern(string2));
        System.out.println(repeatedSubStringPattern(string3));
    }
    public static boolean repeatedSubStringPattern(String s){
        //we know that all possible substrings will start at index 0
        //and go until s.length()/2 since it will be at least double if its true
        //
        int length = s.length();

        for(int i = 1; i<=length/2;i++){
            //check if this length of substring could make a multiple of this string
            if(length%i == 0){
                String substring = s.substring(0, i);
                StringBuilder rep = new StringBuilder();
                for(int y = 0; y < length/i ;y++){
                    //add multiples of the string until it is full
                    rep.append(substring);
                }
                //check if the new string is equal to the original
                if(rep.toString().equals(s))return true;
            }
        }
        return false;
    }
}
