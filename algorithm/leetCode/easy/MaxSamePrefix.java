import java.util.Arrays;
import java.util.Scanner;

public class MaxSamePrefix {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("input your string");
		String[] input = (sc.next()).split(",");
		sc.close();
		System.out.println("your input is: " + Arrays.toString(input));
		String res = getMaxSamePrefix(input);
		System.out.println("result is: " + res.toString());
	}

	static String getMaxSamePrefix(String[] input) {
		Arrays.sort(input);
		String head = input[0];
		String tail = input[input.length - 1];
		char[] result = new char[Math.max(tail.length(), tail.length())];
		for (int i = 0; i < head.length(); i++) {
			if (head.charAt(i) == tail.charAt(i)) {
				result[i] = head.charAt(i);
			} else {
				break;
			}
		}
		return String.valueOf(result);
	}
}
