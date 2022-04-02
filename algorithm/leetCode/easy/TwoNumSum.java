import java.util.Arrays;
import java.util.HashMap;
import java.util.Scanner;

public class TwoNumSum {
  public static void main(String[] args) {
    System.out.println("hello world");
    System.out.println("input your array:");
    Scanner scanner = new Scanner(System.in);
    String inputStr = new String(scanner.next());
    int[] inputIntArr = getInputArr(inputStr);
    System.out.println("your input arr is: " + Arrays.toString(inputIntArr));
    System.out.println("input your target sum:");
    int target = Integer.parseInt(scanner.next());
    scanner.close();
    System.out.println("your target is:  " + target);
    int[] result = twoSums(inputIntArr, target);
    System.out.println("The result is: " + Arrays.toString(result));
  }

  public static int[] twoSums(int[] nums, int target) {
    int[] indexes = new int[2];
    HashMap<Integer, Integer> hash = new HashMap<Integer, Integer>();
    for (int i = 0; i < nums.length; i++) {
      if (hash.containsKey(nums[i])) {
        indexes[0] = i;
        indexes[1] = hash.get(nums[i]);
        Arrays.sort(indexes);
        return indexes;
      }
      hash.put(target - nums[i], i);
    }
    return indexes;
  }

  public static int[] getInputArr(String input) {
    String strArr[];
    strArr = input.split(",");
    int[] intArr = new int[strArr.length];
    for (int i = 0; i < strArr.length; i++) {
      intArr[i] = Integer.parseInt(strArr[i]);
    }
    return intArr;
  }
}
