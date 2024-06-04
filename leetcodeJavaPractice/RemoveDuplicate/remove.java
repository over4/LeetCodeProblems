package leetcodeJavaPractice.RemoveDuplicate;

public class remove {
    public static void main(String[] args){
        int[] nums = new int[]{1,1,2};
        System.out.println(removeDups(nums));
    }
    private static int removeDups(int[] nums){
        //create a j int that will keep track of the new end of the list with dups removed
        int j = 1;
        for(int i = 1; i< nums.length;i++){
            if(nums[i] != nums[i-1]){
                //do not match prev element to move j and put unique element in jth spot
                nums[j] = nums[i];
                j++;
            }
        }
        return j;
    }
}
