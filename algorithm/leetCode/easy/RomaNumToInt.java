import java.util.HashMap;
import java.util.Scanner;

public class RomaNumToInt {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("input your roma number :");
		String input = sc.next().toUpperCase();
		String invalidInput = "([0-9]+|[^IiVvXxLlCcDdMm]+)";
		System.out.println("your input is: " + input);
		sc.close();
		int result = 0;
		if (input.matches(invalidInput)) {
			System.out.println("Illegal input");
			return;
		} else {
			result = covertRomaNum(input);
		}
		System.out.println("converted result : " + result);
	}

	static int covertRomaNum(String input) {
		int result = 0;
		HashMap<String, Integer> hash = new HashMap<String, Integer>();
		hash.put("I", 1);
		hash.put("V", 5);
		hash.put("X", 10);
		hash.put("L", 50);
		hash.put("C", 100);
		hash.put("D", 500);
		hash.put("M", 1000);
		for (int i = 0; i < input.length(); i++) {
			if (i < input.length() - 1) {
				if (hash.get(String.valueOf(input.charAt(i))).intValue() < hash.get(String.valueOf(input.charAt(i + 1)))
						.intValue()) {
					result -= hash.get(String.valueOf(input.charAt(i))).intValue();
				} else {
					result += hash.get(String.valueOf(input.charAt(i))).intValue();
				}
			} else {
				result += hash.get(String.valueOf(input.charAt(i))).intValue();
			}
		}
		return result;
	}
}
