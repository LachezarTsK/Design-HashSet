
#include <list>
#include <array>
#include <algorithm>

using namespace std;

template <typename T> class Bucket {
    
    list<T> bucketValues;

public:
    void insertIntoBucket(T value) {
        if (find(bucketValues.begin(), bucketValues.end(), value) == bucketValues.end()) {
            bucketValues.emplace_front(value);
        }
    }

    void removeFromBucket(T value) {
        if (find(bucketValues.begin(), bucketValues.end(), value) != bucketValues.end()) {
            bucketValues.remove(value);
        }
    }

    bool isInBucket(T value) {
        return find(bucketValues.begin(), bucketValues.end(), value) != bucketValues.end();
    }
};

class MyHashSet {
    
    inline static const size_t size = 809; //prime number
    array< Bucket<int>, size> buckets{};

public:
    MyHashSet() = default;

    int hashKey(int key) {
        return key % size;
    }

    void add(int key) {
        buckets[hashKey(key)].insertIntoBucket(key);
    }

    void remove(int key) {
        buckets[hashKey(key)].removeFromBucket(key);
    }

    bool contains(int key) {
        return buckets[hashKey(key)].isInBucket(key);
    }
};
