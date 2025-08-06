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

#### Map Categories in Java

- **SortedMap**
  - Example: `TreeMap`
- **UnsortedMap**
  - Example: `HashMap`

We mostly use **HashMap** to take advantage of its **constant time complexity** and the concept of **key-value pairs**.

#### Creating a Map in Java

```java
// in java
Map<Integer, Integer> map = new HashMap<>();
```

```javascript
// in javascript
const map = new Map();
```

#### Adding Elements to a Map

```java
// In java
map.put(key, value);
```

```javascript
// In javascript
map.set(key, value);
```

#### Getting an key and value from a map

```java
// This will return the value of the key, if there is no such key it returns null
int key = map.get(key);

// if there is no such key then we can set default value as well
int value = map.getOrDefault(key, defaultValue);
```

#### Iterating a Map

```java
for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
    int key = entry.getKey();
    int value = entry.getValue();
}
```

---

## <u> Data Strcuture - String </u>

String is immutable in java so you cannot change any character inside string but you can create another string with changed characters.

#### Declare string

```java
String s = "abc";
```

```java
s.charAt(index);
s.charAt(0); // return a
```

#### Convert string to char array

```java
s.toCharArray(); // return [`a`, `b`, `c`]
```

#### Get length of string

```java
s.length(); // return 3
```

#### lowercase/uppercase of string

```java
s.toLowerCase();
s.toUpperCase();
```

#### remove leading and trailing whitespace

```java
s.trim();
```

#### Compare Strings

```java
s.equals(otherString);
s.equals("abc");

s.equalsIgnoreCase(otherString);
s.equalsIgnoreCase("ABC");

// mostly used to write to compare two same type objects
s.compareTo(otherString);

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

#### Splitting a String

```java
s.substring(startIndex, endIndex);
s.subSequence(startIndex, endIndex);
```

#### Replacement

```java
s.replace(oldChar, newChar);
s.replaceAll(regex, replacement);
s.replaceFirst(regex, replacement);
```

#### Specific Character Search

```java
s.indexOf(charOrSubstring);
s.indexOf(charOrSubstring, fromIndex);
s.lastIndexOf(charOrSubstring);

```

# check if substring exists in string

```java
s.contains(substring);
```

#### Check Prefix/Suffix

```java
s.startsWith(prefix);
s.endsWith(suffix);
```

#### Joining Strings

```java
s.split(regex);
```

#### Converting Arrays to Strings

```java
Arrays.toString(arrayOfStrings)
```

---

## <u> Data Structure - Array </u>

Array is mutable in java so you can change any element inside array.

#### Declare array

```java
int[] arr = {1,2,3};
arr[index] = newValue;
```

#### Build in sort function

````java
Arrays.sort(arr);

#### Build in binary search function

```java
Arrays.binarySearch(arr, target);
````

#### Build in copy function

```java
Arrays.copyOfRange(arr, start, end);
```

#### Copy array using System.arraycopy() method

```java
System.arraycopy(sourceArr, sourceStart, destArr, destStart, numElementsToCopy); // copy elements from sourceArr[start] to sourceArr[end-1] into destArr[start]
```
