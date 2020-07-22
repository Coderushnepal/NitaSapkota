function Position(width, height) {
	var x = null;
	var y = null;

	this.generateXY = function() {
		this.x = Math.random() * height;
		this.y = Math.random() * width;
	};
}
