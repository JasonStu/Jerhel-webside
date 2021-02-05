const baseSize = 75; // 这个是设计稿中1rem的大小。
function setRem() {
	// 实际设备页面宽度和设计稿的比值
	const scale =
		document.documentElement.clientWidth > 5000
			? 5000
			: document.documentElement.clientWidth; // 计算实际的rem值并赋予给html的font-size
	document.documentElement.style.fontSize = (baseSize * scale) / 1920 + 'px';
}
setRem();
window.addEventListener('resize', () => {
	setRem();
});
