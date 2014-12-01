/*
 * animateQueue v1.0
 * Copyright (c) 2014 Wendell  http://blog.webql.info/
 * http://lab.webql.info
*/

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
		var getNow = function(){
			return Date.now ? Date.now() : (new Date()).getTime();
		}
		// 队列转换执行时间方法
		var lisInit = function(){
			var timei = 0;
			for(var i=0;i<lis.length;i++){
				lis[i].time = timei + lis[i].exetime;
				timei = lis[i].time;
			}
		}();
		var lastTickTime = getNow();

		(function tick(){
			var tickTime = getNow() - lastTickTime;
			lastTickTime = getNow();
			for(var i=lis.length-1;i>=0;i--){
				lis[i].time -= tickTime;
				if(lis[i].time <= 0){
					for(var j=lis[i].queue.length-1;j>=0;j--){
						lis[i].queue[j].time -= tickTime;
						if(lis[i].queue[j].time <= 0){
							lis[i].queue[j].fn.apply(null,lis[i].queue[j].param);
							// 每执行完一条动画就干掉它
							lis[i].queue.splice(j,1);
						}
					}
					if(lis[i].queue.length == 0){
						lis.splice(i,1);
					}
				}
			}
			if(lis.length>0){
				requestAnimationFrame(tick);
			}
		})();

	};
webql.tabClass = function (obj, ClassName){
	obj.addClass(ClassName);
}
