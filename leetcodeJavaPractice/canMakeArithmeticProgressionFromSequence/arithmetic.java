package leetcodeJavaPractice.canMakeArithmeticProgressionFromSequence;

import java.util.Arrays;
import java.util.Collections;

public class arithmetic {
    public static void main(String[] args){
        int[] arr1 = {3,5,1}; //true
        int[] arr2 = {1,2,4}; //false
        System.out.println(eval(arr1));
        System.out.println(eval(arr2));
    }
    public static boolean eval(int[] arr){
        //get the difference between the first two elements\
        //then start with the first element and see if you can get the rest 
        //of the elements by adding that difference to all the numbers
        //sort the array so we can loop through in order
        Arrays.sort(arr);
        int difference = arr[1] - arr[0];

        for(int i = 1;i<arr.length ;i++){
            if(arr[i] - arr[i-1] != difference){
                //this means not a constant difference between elements
                return false;
            }
        }
        //if we are here that means we have passed every element and know 
        //and know the the difference between them is constant
        return true;
    }
}
