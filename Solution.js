
var MyHashSet = function () {
    this.size = 809; //prime number
    this.buckets = new Array(this.size).fill(new Bucket());
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashSet.prototype.hashKey = function (key) {
    return key % this.size;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    this.buckets[this.hashKey(key)].insertIntoBucket(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    this.buckets[this.hashKey(key)].removeFromBucket(key);
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    return this.buckets[this.hashKey(key)].isInBucket(key);
};

class Bucket {

    constructor() {
        this.bucketValues = [];
    }

    /** 
     * @param {number} value
     * @return {void}
     */
    insertIntoBucket(value) {
        if (this.bucketValues.indexOf(value) === -1) {
            this.bucketValues.push(value);
        }
    }

    /** 
     * @param {number} value
     * @return {void}
     */
    removeFromBucket(value) {
        const index = this.bucketValues.indexOf(value);
        if (index !== -1) {
            this.bucketValues.splice(index, 1);
        }
    }

    /** 
     * @param {number} value
     * @return {boolean}
     */
    isInBucket(value) {
        return this.bucketValues.indexOf(value) !== -1;
    }
}
