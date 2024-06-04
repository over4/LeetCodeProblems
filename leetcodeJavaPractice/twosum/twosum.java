package leetcodeJavaPractice.twosum;
import java.util.*;
public class twosum {
    public static void main(String[] args){
        int[] nums = {2,7,11,15};
        int target = 9;
        int palindromeNumberTrue = 1771;
        int palindromeNumberFalse = 112;
        
        System.out.println(Arrays.toString(TwoSum(nums,target)));
        System.out.println("True Palindrome number 1771: " + palindromeNumber(palindromeNumberTrue));
        System.out.println("False Palindrome number 112: " +palindromeNumber(palindromeNumberFalse));

    }
    public static int[] TwoSum(int[] arr,int target){
        

        //create a hashmap that will keep track of every element and its index so we can quickly reference
        //what we need

        Map<Integer,Integer> map = new HashMap<>();

        for(int i = 0;i<arr.length;i++){
            int compliment = arr[i]-target;
            if(map.containsKey(compliment)){
                return new int[]{map.get(compliment),i};
            }
            map.put(arr[i],i);
        }
        return new int[]{};
    }
    public static boolean palindromeNumber(int x){
        //the best way to solve this problem it to use two pointers for left and right and increment them
        //until they meet, checking values along the way
        //first convert the int to a string
        String num = String.valueOf(x);
        int left = 0;
        int right = num.length()-1;

        while(left<right){
            if(num.charAt(left) == num.charAt(right)){
                //values match so continue
                left++;
                right--;
            }else{
                //this means no match so return false
                return false;
            }
        }

        return true;
    }
}