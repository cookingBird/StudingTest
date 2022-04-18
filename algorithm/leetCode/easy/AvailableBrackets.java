import java.util.Deque;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

public class AvailableBrackets {
	private AvailableBrackets() {
		throw new IllegalStateException("Utility class");
	}

	public static Boolean isValid(String s) {
		int n = s.length();
		Map<Character, Character> pairs = new HashMap<>();
		Deque<Character> stack = new LinkedList<>();
		pairs.put(')', '(');
		pairs.put(']', '[');
		pairs.put('}', '{');
		if (n % 2 == 1) {
			return false;
		} else {
			for (int i = 0; i < n; i++) {
				char ch = s.charAt(i);
				if (pairs.containsKey(ch)) {
					if (stack.isEmpty() || stack.peek().equals(pairs.get(ch))) {
						return false;
					}
					stack.pop();
				} else {
					stack.push(ch);
				}
			}
			return stack.isEmpty();
		}
	}
}
