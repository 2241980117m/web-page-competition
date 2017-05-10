window.onload = function() {
	imgTrans();
};
//图片的自动切换和左右箭头点击切换
function imgTrans() {
	var img = document.getElementById('home_img');
	var timer;
	//自动播放
	function play() {
		timer = setInterval(function() {
			toTop(-600);
		},3000);
	}
	//鼠标悬浮时停止自动播放
	function stop() {
		clearInterval(timer);
	}
	img.onmouseout = play;
	img.onmouseover = stop;
	play();
}
//设置偏移量
function toTop(offset) {
	var img = document.getElementById('home_img');
	var newTop = parseInt(img.style.marginTop) + offset;
	var time;
	img.style.marginTop = newTop + "px";
	if(newTop > 0) {
		img.style.marginTop = -1200 + 'px';
	}
	if(newTop < -1200) {
		img.style.marginTop = 0 + 'px';
	}
}