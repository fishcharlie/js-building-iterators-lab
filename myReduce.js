// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {

//  CODE INSIDE HERE   //
	if (arr.length !== 0) {
		var last = arr[0];
		var current = arr[1];

		for (var i = 0; i < arr.length; i++) {
			if (initialValue) {
				if (i === 0) {
					last = callback(initialValue,current,i,arr);
					current = arr[i+1];
				}
				else {
					last = callback(last,current,i,arr);
					current = arr[i+1];
				}
			}

			else {
				if (i === 0) {
					last = callback(arr[0],current,i+1,arr);
					current = arr[i+1];
				}
				else {
					last = callback(last,current,i,arr);
					current = arr[i+1];
				}
			}
		}

		return last;
	}
	else {
		return initialValue;
	}

}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
