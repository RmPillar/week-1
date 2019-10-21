function getItem(arr,index) {
    if (index >= arr.length) {
        return arr[index-arr.length];
    } else {
        return arr[index];
    };
};

module.exports = getItem;
