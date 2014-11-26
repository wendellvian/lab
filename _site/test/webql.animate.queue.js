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
		var getNow=function(){
			return Date.now?Date.now():(new Date()).getTime();
		}
		var lisInit=function(){
			var timei=0;
			for(var i=0;i<lis.length;i++){
				lis[i].time=timei+lis[i].exetime;
				timei=lis[i].time;
				// var timej =0;  
				// for(var j = 0;j<lis[i].length;j++){
				// 	lis[i].queue[j].time=timej+lis[i].queue[j].time;
				// 	timej=lis[i].queue[j].time;
				// }
			}
		};
		lisInit();
		var lastTickTime=getNow();

		(function tick(){
			var tickTime=getNow()-lastTickTime;
			//console.log(tickTime);
			lastTickTime=getNow();
			for(var i=lis.length-1;i>=0;i--){
				lis[i].time -= tickTime;
				if(lis[i].time <= 0){
					for(var j = lis[i].queue.length-1;j>=0;j--){
						console.log(i,j,lis[i].queue[j].time);
						lis[i].queue[j].time -= tickTime;
						console.log(i,j,lis[i].queue[j].time);
						if(lis[i].queue[j].time <= 0){
							lis[i].queue[j].fn.apply(null,lis[i].queue[j].param);
							lis[i].queue.splice(j,1);
						}
					}
					if(lis[i].queue.length==0){
						lis.splice(i,1);
					}
				}

				// for(var j = lis[i].queue.length-1;j>=0;j--){
				// 	console.log(1)
				// 	lis[i].queue[j].time -= 1000/60;
				// 	console.log(lis[i].queue[j].time -= 1000/60);
				// 	if(lis[i].queue[j].time <= 0){
				// 		lis[i].queue[j].fn.apply(null,lis[i].queue[j].param);
				// 		console.log(lis[i].queue[j].fn.apply(null,lis[i].queue[j].param))
				// 	}
				// }
				// lis.splice(i,1);


				// lis[i].time -= 1000/60;
				// console.log(lis[i].time -= 1000/60);
				// if(lis[i].time <= 0){
				// 	// lis[i].fn.apply(null,lis[i].param);
				// 	// 每执行完一条动画就干掉它
				// 	lis.splice(i,1);
				// }

			}
			if(lis.length>0){
				requestAnimationFrame(tick);
			}
		})();

	};
webql.tabClass = function (obj, ClassName){
	obj.addClass(ClassName);
}
