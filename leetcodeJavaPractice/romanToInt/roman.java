package leetcodeJavaPractice.romanToInt;

import java.util.*;

public class roman {
    public static void main(String[] args){
        String string1 = "III";
        String string2 = "LVIII";
        String string3 = "MCMXCIV";

        System.out.println(Integer.toString(roman(string1))); // 3
        System.out.println(Integer.toString(roman(string2))); // 58
        System.out.println(Integer.toString(roman(string3))); // 1994

    }
    public static int roman(String s){
        //first we will create a map to keep track of all the encodings
        Map<Character,Integer> map = new HashMap<>();

        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);

        //make the result that we will return 
        int ans = 0;

        //a rule of thumb for roman numbers is that if a letter like C appears, but the next
        //number is a larger one like M, then that means it is together to make CM which is 900
        //this is important and we can work around this by initall subtracting the smaller C,
        //then adding back the M. This means ans -100 then + 1000 still gives up the +900
        //that we were looking for
        for(int i = 0 ; i<s.length();i++){
            if(i<s.length()-1 && map.get(s.charAt(i)) < map.get(s.charAt(i+1))){
                ans -= map.get(s.charAt(i));
            }else{
                ans += map.get(s.charAt(i));
            }
        }
        return ans;
    }
}
