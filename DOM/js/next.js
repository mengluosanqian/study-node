var nextclick = function() {
 	var left1 = -(parseInt(ulstyle.style.left) - 500) / 500
 	console.log(lis.length)
 	if (left1 == lis.length) {
 		console.log('11111')
 		ulstyle.style.left = '0px'
 	} else {
 		var left = parseInt(ulstyle.style.left) - 500
 		console.log(left)
 		ulstyle.style.left = left + 'px'
 	}

 }
