/*
 * Difficulty: Easy
 * Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
 *
 * Example 1:
 * Input: nums = [1, 2, 3, 3]
 * Output: true
 *
 * Example 2:
 * Input: nums = [1, 2, 3, 4]
 * Output: false
 *
 * Thought: The idea of this problem is to find an element that already exist in the given array (exists more than 1 times),
 * we could use HashMap to store the frequency of each element and each time we put the element in the map we would
 * check if that element already exist or not.
 *
 * Time Complexity: O(N)
 */
import java.util.Map;
import java.util.HashMap;

public class ContainsDuplicate {
    public static void main(String[] args) {
        int[] arr = new int[]{1, 2, 3, 4};
        System.out.println(solution(arr));
    }
    public static boolean solution(int[] arr) {
        Map<Integer, Integer> map = new HashMap<>();

        for (Integer num : arr) {
            if (map.containsKey(num)) {
                return true;
            } else {
                map.put(num, 1);
            }
        }

        return false; 
    }
}