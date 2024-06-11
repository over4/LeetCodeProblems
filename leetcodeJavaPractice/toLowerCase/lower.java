package leetcodeJavaPractice.toLowerCase;

public class lower {
    public static void main(String[] args){
        String s1 = "Hello";
        String s2 = "here";
        String s3 = "LOVELY";

        System.out.println(solution(s1));
        System.out.println(solution(s1));
        System.out.println(solution(s3));
    }
    public static String solution(String s){
        return s.toLowerCase();
    }
}
