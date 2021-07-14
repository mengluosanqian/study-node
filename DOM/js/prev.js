var prevclick =  function() {
	var right1 = (parseInt(ulstyle.style.left) + 500) / 500
	if (right1 == 1) {
		console.log((lis.length - 1) * 500, '222')
		ulstyle.style.left = -(lis.length - 1) * 500 + 'px'
		console.log(ulstyle.style.left, '11111')

	} else {
		var right = parseInt(ulstyle.style.left) + 500

		ulstyle.style.left = right + 'px'
	}

}
