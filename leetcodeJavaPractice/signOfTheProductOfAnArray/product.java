package leetcodeJavaPractice.signOfTheProductOfAnArray;

public class product {
    public static void main(String[] args){
        int[] array1 = {-1,-2,-3,-4,3,2,1};
        int[] array2 = {1,5,0,2,-3};
        int[] array3 = {-1,1,-1,1,-1};
        System.out.println(arraySign(array1)); //1
        System.out.println(arraySign(array2)); //0
        System.out.println(arraySign(array3)); //-1
    }
    public static int arraySign(int[] nums){
        int res = 1;
        for(int i = 0;i<nums.length;i++){
            if(nums[i] < 0){
                //we know it is a negative nums so just multiply the res by -1
                res = res * -1;

            }else if(nums[i] == 0) return 0;
            else{
                //we know it is a positive number so multiple res by 1
                res = res * 1;
            }
        }
        return res;
    }
}
