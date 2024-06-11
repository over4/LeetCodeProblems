import java.util.*;

public class findDiff {
    public static void main(String[] s){
        String string1 = "abcd";
        String string2 = "abcde";
        System.out.println(findTheDifference(string1,string2));
    }
    private static char findTheDifference(String s ,String t){
        Map<Character,Integer> count = new HashMap<>();
        
        for(char c : t.toCharArray()){
            //go through the entire array and add each character to a map
            count.put(c,count.getOrDefault(c, 0) + 1);
        }   
        for(char c : s.toCharArray()){
            count.put(c,count.get(c) -1);
            if(count.get(c) == 0){
                count.remove(c);
            }
        }
        
        return (char) count.keySet().toArray()[0];
    }
}
