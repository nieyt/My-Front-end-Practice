
$(function () {
	var render={
		url:['images/spic1.jpg',
			'images/spic2.jpg',
			'images/spic3.jpg',
			'images/spic4.jpg',
			'images/spic5.jpg',
			'images/spic6.jpg'],
		change:function () {
			$('.piclist').append('<li class='+(j+4)+'></li>');
				var y=this.url.length;
				$('.'+j).css({
					'left': '-378px'
				});
				$('.'+(j+1)).css({
					'left': '0px'
				});
				$('.'+(j+2)).css({
					'left': '378px'					
				});
				$('.'+(j+3)).css({
					'left': '756px'					
				});
				$('.'+(j+4)).css({
					'background': 'url('+this.url[(j+3)%y]+') 100% 100%',
					'left': '1134px'
					
				});
				var delay=setTimeout(function () {
					$('.'+j).remove();//移除前面的节点
					j+=1;
				},1000);
				console.log(1);
		},

		init:function () {
			var list=$('.piclist').find('li');
			 for(var i=0;i<list.length;i++){
				list.eq(i).css('background', 'url('+this.url[i]+') 100% 100%');
			}
			j=1;
			var _this=this;
			 timer=setInterval(this.change.bind(this),5000);
				$('.piclist').hover(function() {
					clearInterval(timer);
				}, function() {
					timer=setInterval(_this.change.bind(_this),5000);
				});
		},
		changeBefore:function () {
			var y=this.url.length;
				if(j>1){
					$('.'+j).before('<li class='+(j-1)+'></li>');
				$('.'+(j-1)).css({
					'transition': 'all 0.99s',//因下面延时了10ms，所以这里设置0.99s
					'background': 'url('+this.url[(j-2)%y]+') 100% 100%',
					'left': '-378px'
				});	
				setTimeout(function () {
					$('.'+(j)).css({
					'left': '0px',
					})   //延时执行以生成动画效果（-378=>0）；
				},10);	//延时后，最后一句j-=1已经执行，所以此class名等于上面的（j-1）class名

				$('.'+j).css({
					'left': '378px'
				});
				$('.'+(j+1)).css({
					'left': '756px'
				});
				$('.'+(j+2)).css({
					'left': '1134px'
				});
				$('.'+(j+3)).remove();//移除后面的节点
				j-=1;
			}
		}
	};
	render.init();
	var Tag=0;//控制左右键同时点击或在1s内反复点击时点击无效

	$('.right,.left').hover(function() {
			clearInterval(timer);
	}, function() {
		timer=setInterval(render.change.bind(render),5000);
	});//悬浮到左右键就清计时器

	$('.right').click(function () {
		
		if (Tag==0) {
			Tag=1;
			// clearInterval(timer);
			render.change();
			console.log("ric");
			var delay=setTimeout(function() {
				// timer=setInterval(render.change.bind(render),5000);
				Tag=0;
			}, 1000);
		}
	});
	
	$('.left').click(function() {
		console.log(Tag);
		if (Tag==0) {
			Tag=1;
			console.log(Tag);
			// clearInterval(timer);
			render.changeBefore();
			var delay=setTimeout(function() {
				// timer=setInterval(render.change.bind(render),5000);
				Tag=0;
			}, 1000);
		}
	});
})