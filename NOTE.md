# Data stucture

<h1>This file is used for noting technical things that I want to remember during of problems.</h1>

<u>Data Structures - Map:</u>

1. HashMap: It stores the key-value pair and it can be accessed in O(1) time complexity.

2. TreeMap: It also stores the key-value pair but it keeps them sorted based on keys.

3. LinkedHashMap: It maintains insertion order, which means that when you iterate over a linked hash map, the elements will be returned in the same order as they were inserted into the map.

4. HashTable: It is synchronized version of HashMap class.

In java, we have two types of maps:

- SortedMap (TreeMap)
- UnsortedMap (HashMap)

We mostly use HashMap to take advange of its constant time complexity and idea of
key-value pairs.

- Create a map:
  Map<Integer, Integer> map = new HashMap<>();
