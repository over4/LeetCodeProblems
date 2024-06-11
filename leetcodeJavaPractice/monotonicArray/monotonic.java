package leetcodeJavaPractice.monotonicArray;

public class monotonic {
    public static void main(String[] args){
        int[] arr1 = {1,2,2,3};
        int[] arr2 = {6,5,4,4};
        int[] arr3 = {1,3,2};

        System.out.println(isMonotonic(arr1)); //true
        System.out.println(isMonotonic(arr2)); //true
        System.out.println(isMonotonic(arr3)); //false
    }
    public static boolean isMonotonic(int[] nums){
        // set two flags and update the flags only when there is a conflicting ans
        boolean increasing = true;
        boolean decreasing = true;

        for(int i = 1;i<nums.length;i++){
            if(nums[i] < nums[i-1]) increasing = false;
            if(nums[i] > nums[i-1]) decreasing = false;
        }
        return increasing || decreasing;
    }
}
