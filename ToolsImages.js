class ToolsImages {

	constructor(context, width, height) {
		this.Context = context;
		this.Width = width;
		this.Height = height;
	}

	Photomaton() {
		console.log("Photomaton algorithm");
		let width = 256;
		let height = 256;

		for (let y of Array(height).keys()) {
			for (let x of Array(width).keys()) {

				var ctx = canvas.getContext('2d');
				var newCtx = newCanvas.getContext('2d');
				var pixelData = ctx.getImageData(x, y, 1, 1);

				if (x % 2 == 0 && y % 2 == 0)
					newCtx.putImageData(pixelData, x / 2, y / 2)
				else if (x % 2 == 0)
					newCtx.putImageData(pixelData, x / 2, height / 2 + y / 2)
				else if (y % 2 == 0)
					newCtx.putImageData(pixelData, width / 2 + x / 2, y / 2)
				else
					newCtx.putImageData(pixelData, width / 2 + x / 2, height / 2 + y / 2)
			}
		}
		canvas.getContext('2d').drawImage(newCanvas, 0, 0);
	}

	Couplage() {
		console.log("Couplage algorithm")
		Photomaton();
		drawBoulanger();
	}

	Twist() {
        console.log("Twist algorithm");
        let width = 256;
        let height = 256;
        for (let y of Array(height).keys()) {
            for (let x of Array(width).keys()) {

                var ctx = canvas.getContext('2d');
                var newCtx = newCanvas.getContext('2d');
                var pixelData = ctx.getImageData(x, y, 1, 1);
                var newX = x;
                var newY = y;

                newX = x + 1;
                newY = y + 1;

                newCtx.putImageData(pixelData, newX, newY)

            }
        }
        canvas.getContext('2d').drawImage(newCanvas, 0, 0);
	}

	Baker() {
		console.log('Baker algorithm');
		let width = 256;
		let height = 256;

		for (let y of Array(height).keys()) {
			for (let x of Array(width).keys()) {

				var ctx = canvas.getContext('2d');
				var newCtx = newCanvas.getContext('2d');
				var pixelData = ctx.getImageData(x, y, 1, 1);

				if ((y % 2 == 0) && (x < width / 2)) {
					newX = 2 * x;
					newY = y / 2;
				} else if ((y % 2 != 0) && (x < width / 2)) {
					newX = 2 * x + 1;
					newY = (y - 1) / 2;
				} else if ((y % 2 == 0) && (x >= width / 2)) {
					newX = 2 * width - 1 - 2 * x;
					newY = height - 1 - y / 2;
				} else if ((y % 2 != 0) && (x >= width / 2)) {
					newX = 2 * width - 2 - 2 * x;
					newY = height - 1 - (y - 1) / 2;
				}
				newCtx.putImageData(pixelData, newX, newY)
			}
		}
		canvas.getContext('2d').drawImage(newCanvas, 0, 0);
	}

    Fleur() {
        console.log("Fleur al");
        let width = 256;
        let height = 256;
    
        for (let y = height; y >= 0; y--) {
            for (let x = width; x >= 0; x--) {
    
                var ctx = canvas.getContext('2d');
                var newCtx = newCanvas.getContext('2d');
                var pixelData = ctx.getImageData(x, y, 1, 1);
    
                var newX = x;
                var newY = y;
                let l = width / 2;
                let h = height / 2;
    
                if ((x % 2 == 0) && (y % 2 == 0)) {
                    newX = x / 2;
                    newY = y / 2;
                } else if ((x % 2 == 1) && (y % 2 == 0)) {
                    newX = (x - 1) / 2 + l;
                    newY = y / 2;
    
                    let middle = 3 * l / 2;
                    newX += 2 * (middle - newX);
                    if (width / 2 % 2 == 0) {
                        newX--;
                    }
                } else if ((x % 2 == 0) && (y % 2 == 1)) {
                    newX = x / 2;
                    newY = (y - 1) / 2 + h;
    
                    let middle = 3 * h / 2;
                    newY += 2 * (middle - newY);
                    if (height / 2 % 2 == 0) {
                        newY--;
                    }
                } else {
                    newX = (x - 1) / 2 + l;
                    newY = (y - 1) / 2 + h;
    
                    let middle = 3 * l / 2;
                    newX += 2 * (middle - newX);
                    if (width / 2 % 2 == 0) {
                        newX--;
                    }
                    middle = 3 * h / 2;
                    newY += 2 * (middle - newY);
                    if (height / 2 % 2 == 0) {
                        newY--;
                    }
                }
                newCtx.putImageData(pixelData, newX, newY);
            }
        }
        canvas.getContext('2d').drawImage(newCanvas, 0, 0);
    }
	Column() {
		var leftPixels = [this.Width / 2, this.Height];
		var rightPixels = [this.Width / 2, this.Height];
		var finalImage = [this.Width, this.Height];

		var img = this.Context.getImageData(0, 0, this.Width, this.Height);

		for (var i = 0; i < this.Width; i++) {
			for (var j = 0; j < this.Height; j++) {

				if (i < this.Width / 2) {

					leftPixels[i, j] = img.Data[i, j]
				} else {
					rightPixels[i, j] = this.Context.getImageData(i, j, this.Width, this.Height);
				}


			}
		}

		for (var k = 0; k < this.Width; k++) {
			for (var l = 0; l < this.Height; l++) {

				if (k % 2 == 0 && k < this.Width / 2) {

					finalImage[k, l] = rightPixels[k, l];
				} else if (k % 2 !== 0 && k < this.Width / 2) {
					finalImage[k, l] = leftPixels[k, l];
				} else if (k % 2 == 0 && k > this.Width / 2) {
					finalImage[k, l] = leftPixels[k, l];
				} else if (k % 2 !== 0 && k > this.Width / 2) {
					finalImage[k, l] = rightPixels[k, l];
				}


			}

		}

	}

	InX() {

	}

}