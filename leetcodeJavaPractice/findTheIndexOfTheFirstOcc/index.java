package leetcodeJavaPractice.findTheIndexOfTheFirstOcc;

public class index {
    public static void main(String[] s){
        String string1 = "sadbutsad";
        String string2 = "sad";
        System.out.println(findStr(string1, string2));
    }
    public static int findStr(String hayStack, String needle){
        if(!hayStack.contains(needle)){
            //check if the work is contained
            return -1;
        }
        for(int i = 0;i<hayStack.length();i++){
            if(hayStack.charAt(i) == needle.charAt(0)){
                //if it matches the first index, then loop through the rest of needle to see
                //if it still matches
                for(int y = 0;y<needle.length();y++){
                    if(needle.charAt(y) == hayStack.charAt(i+y)){
                        //matching char
                        if(y == needle.length()-1){
                            //looped through entire needle so return the index of the outer
                            //loop
                            return i;
                        }
                    }else{
                        //not matching char
                        //so exit loop
                        break;
                    }
                }
            }
        }
        return 0;
    }
}
