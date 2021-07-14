 var countdown = function(){
	 var date = new Date(); 
		  var now = date.getTime()
		 var str="2021/7/12 00:00:00";
		 var endDate = new Date(str).getTime(); 
		 var cha = endDate -now
		 d = Math.floor(cha/1000/60/60/24)
		 h = Math.floor(cha/1000/60/60%24)
		 m = Math.floor(cha/1000/60%60)
		 s = Math.floor(cha/1000%60)
 }
 
		