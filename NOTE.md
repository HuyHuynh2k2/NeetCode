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
Map<Integer, Integer> map = new HashMap<>();
```

### Adding Elements to a Map

```
map.put(key, value);
```

### Iterating a Map

```
for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
    int key = entry.getKey();
    int value = entry.getValue();
}
```
