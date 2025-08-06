# Data Structures

> This file is used for noting technical things that I want to remember during problems.

## <u>Data Structures – Map</u>

### Common Java Map Implementations

1. **HashMap**

   - Stores key-value pairs.
   - Allows constant time `O(1)` access.
   - Not synchronized.

2. **TreeMap**

   - Stores key-value pairs **sorted by keys**.
   - Implements `SortedMap` interface.
   - Slower than `HashMap` due to sorting.

3. **LinkedHashMap**

   - Maintains **insertion order**.
   - Useful when predictable iteration order is needed.

4. **Hashtable**
   - Synchronized version of `HashMap`.
   - Legacy class; generally replaced by `ConcurrentHashMap` if thread-safety is needed.

### Map Categories in Java

- **SortedMap**
  - Example: `TreeMap`
- **UnsortedMap**
  - Example: `HashMap`

We mostly use **HashMap** to take advantage of its **constant time complexity** and the concept of **key-value pairs**.

### Creating a Map in Java

```java
// in java
Map<Integer, Integer> map = new HashMap<>();
```

```javascript
// in javascript
const map = new Map();
```

### Adding Elements to a Map

```java
// In java
map.put(key, value);
```

```javascript
// In javascript
map.set(key, value);
```

### Getting an key and value from a map

```java
// This will return the value of the key, if there is no such key it returns null
int key = map.get(key);

// if there is no such key then we can set default value as well
int value = map.getOrDefault(key, defaultValue);
```

### Iterating a Map

```java
for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
    int key = entry.getKey();
    int value = entry.getValue();
}
```

---

## <u> Data Strcuture - String </u>

String is immutable in java so you cannot change any character inside string but you can create another string with changed characters.

```java
String s = "abc";
```

```java
s.charAt(index);
s.charAt(0); // return a
```

```java
s.toCharArray(); // return [`a`, `b`, `c`]
```

```java
s.length(); // return 3
```

```java
s.toLowerCase(); // return lowercase of string
s.toUpperCase(); // return uppercase of string
```

```java
s.trim(); // remove leading and trailing WHITESPACE
```

```java
s.equals(otherString); // compare two strings
s.equals("abc"); // true

s.equalsIgnoreCase(otherString);
s.equalsIgnoreCase("ABC"); // true

s.compareTo(otherString); // mostly used to write to compare two same type objects

public class Student implements Comparable<Student> {
    int score;

    public Student(int score) {
        this.score = score;
    }

    @Override
    public int compareTo(Student other) {
        return this.score - other.score; // ascending order by score
    }
}

```

````java
s.substring(startIndex, endIndex); // return substring from startIndex to endIndex-1
s.subSequence(startIndex, endIndex); // return subsequence from startIndex to endIndex-1
```

```java
s.replace(oldChar, newChar); // replace all oldChar with newChar
s.replaceAll(regex, replacement); // replace all matches of regex with replacement
s.replaceFirst(regex, replacement); // replace first match of regex with replacement
```

```java
s.indexOf(charOrSubstring); // return first occurence of char or substring else -1;
s.indexOf(charOrSubstring, fromIndex); // return first occurence of char or substring starting from fromIndex else -1;
s.lastIndexOf(charOrSubstring); // return last occurence of char or substring else -1;

```

```java
s.contains(substring); // check if substring exists in string
```

```java
s.startsWith(prefix); // check if string starts with prefix
s.endsWith(suffix); // check if string ends with suffix
```

```java
s.split(regex); // split string into array of strings using regex

```java
Arrays.toString(arrayOfStrings) // convert arrayOfStrings to string like "[a,b,c]"
````

---

## <u> Data Structure - Array </u>

Array is mutable in java so you can change any element inside array.

```java
int[] arr = {1,2,3};
arr[index] = newValue; // change value at index
Arrays.sort(arr); // sort array in ascending order
Arrays.binarySearch(arr, target); // search for target in sorted array and return index else -1;
Arrays.copyOfRange(arr, start, end); // copy elements from start to end-1 into new array
System.arraycopy(sourceArr, sourceStart, destArr, destStart, numElementsToCopy); // copy elements from sourceArr[start] to sourceArr[end-1] into destArr[start]
```

```

```
