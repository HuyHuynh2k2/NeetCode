/**
 * Encode and Decode Strings
 * Difficulty: Medium
 *
 * Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.
 *
 * Example 1:
 * Input: ["neet","code","love","you"]
 * Output:["neet","code","love","you"]
 *
 * Example 2:
 * Input: ["we","say",":","yes"]
 * Output: ["we","say",":","yes"]
 *
 * Thought: The idea for encode is for each string we encode as "length" + # + str
 * so we when encode we just start from 0 until we saw '#' character (note that some
 * string might have a length that has more than 1 digit, e.g. 10 or 123) then we know
 * what the length is then use substring to grab the need str and start over.
 */
import java.util.ArrayList;
import java.util.Arrays;

public class EncodeAndDecodeString {
    public static void main(String[] args) {
        String[] arr = {"neet", "code", "love", "you"};
        String encodeValue = encode(arr);
        System.out.println(encodeValue);
        String[] decodeValue = decode(encodeValue);
        System.out.println(Arrays.toString(decodeValue));
    }

    public static String encode(String[] arr) {
        StringBuilder sb = new StringBuilder();
        for (String str : arr) {
            sb.append(str.length()).append("#").append(str);
        }
        return sb.toString();
    }

    public static String[] decode(String str) {
        ArrayList<String> arr = new ArrayList<>();
        int i = 0;
        while (i < str.length()) {
            int j = i;
            while (str.charAt(j) != '#') {
                j++;
            }
            int size = Integer.parseInt(str.substring(i, j));
            i = j + 1;
            j = i + size;
            String currentStr = str.substring(i, j);
            arr.add(currentStr);
            i = j;
        }
        return arr.toArray(new String[0]);
    }
}
