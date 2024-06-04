package leetcodeJavaPractice.mergeStringsAlt;

public class merge {
    public static void main(String[] s){
        String string1 = "abc";
        String string2 = "pqrrqweqwe";
        System.out.println(mergeStrings(string1, string2));
    }
    private static String mergeStrings(String s1, String s2){
        String res = "";
        int index = 0;

        while(index<s1.length() || index<s2.length()){
            if(index<s1.length()){
                res = res + s1.charAt(index);

            }
            if(index<s2.length()){
                res = res + s2.charAt(index);
            }
            index++;
        }
        return res;
    }
}
