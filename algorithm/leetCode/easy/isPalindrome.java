import java.util.Scanner;

public class isPalindrome {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("input your number: ");
		int input = Integer.parseInt(sc.next());
		System.out.println("your input number is: " + input);
		sc.close();
		Boolean isPalindromeNum = isPalindromeNumber(input);
		System.out.println("your input number is PalindromeNumber ? " + isPalindromeNum);
	}

	private static Boolean isPalindromeNumber(int number) {
		int input = number;
		if (number < 0 || (number > 10 && number % 10 == 0))
			return false;
		int reversedNum = 0;
		do {
			reversedNum = reversedNum * 10 + input % 10;
		} while ((input /= 10) > 0);
		if (reversedNum == number)
			return true;
		else
			return false;
	}
}
