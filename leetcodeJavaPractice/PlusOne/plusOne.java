package leetcodeJavaPractice.PlusOne;
import java.math.BigInteger;
import java.util.*;

public class plusOne {
    public static void main(String[] args){
        int[] digits1 = {1,2,3};
        int[] digits2 = {4,3,2,1};
        int[] digits3 = {9};
        System.out.println(Arrays.toString(plusOneLeetCode(digits1)));
        System.out.println(Arrays.toString(plusOneLeetCode(digits2)));
        System.out.println(Arrays.toString(plusOneLeetCode(digits3)));
    }
    public static int[] plusOneLeetCode(int[] digits){
        //the best way it to convert the array to an interger then add 1, and convert
        //it back
        StringBuilder stringBuilder = new StringBuilder();
        for(int i = 0 ; i < digits.length;i++){
            stringBuilder.append(digits[i]);
        }
        //since the size of int is too small for some of the inputs,
        //we need to use a type that can handle these large numbers
        //so we will use the BigInteger to hold the temp number
        BigInteger bigInteger = new BigInteger(stringBuilder.toString());
        bigInteger = bigInteger.add(BigInteger.ONE);
        String resultString = bigInteger.toString();
        //now that it is a string we can loop through and add to a new array
        int[] result = new int[resultString.length()];
        for(int i = 0; i<resultString.length();i++){
            //this is a quickhand way to convert the char to its integer value through ascii
            result[i] = resultString.charAt(i) - '0';
        }
        return result;
    }
    public static int[] plusOneElegant(int[] digits){
        for (int i = digits.length - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i]++;
                return digits;
            }
            digits[i] = 0;
        }
        
        digits = new int[digits.length + 1];
        digits[0] = 1;
        return digits;
    }
}
