package leetcodeJavaPractice.BaseBallGame;
import java.util.*;
public class baseball {
    public static void main(String[] args){
        String[] ops1 = {"5","2","C","D","+"};
        String[] ops2 = {"5","-2","4","C","D","9","+","+"};
        String[] ops3 = {"1","C"};


        System.out.println(Integer.toString(solution(ops1)));
        System.out.println(Integer.toString(solution(ops2)));
        System.out.println(Integer.toString(solution(ops3)));
    }
    public static int solution(String[] operations){
        int score = 0;
        ArrayList<Integer> list = new ArrayList<>();
        for(int i =0;i<operations.length;i++){
            if(operations[i] == "+"){

            }else if(operations[i] == "D"){

            }else if(operations[i] == "C"){

            }else{
                //we have just an integer so add its value to the list
                list.add(Integer.getInteger(operations[i]));
            }
        }
        return score;
    }
}
