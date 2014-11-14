window.webql = window.webql || {};
webql.animateMove = function (arr){
		var requestAnimationFrame = window.requestAnimationFrame
		|| window.webkitRequestAnimationFrame
		|| window.mozRequestAnimationFrame
		|| window.msRequestAnimationFrame
		|| window.oRequestAnimatonFrame
		|| function(callback){
			setTimeout(callback,1000/60);
		};
		var lis = arr || [];
		(function tick(){
			for(var i=lis.length-1;i>=0;i--){
				lis[i].time -= 1000/60;
				if(lis[i].time <= 0){
					lis[i].fn();
					lis.splice(i,1);
				}
			}
			requestAnimationFrame(tick);
		})();
	};
webql.tabClass = function (ele, ClassName){
	ele.addClass(ClassName);
}
