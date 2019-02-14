class ToolsImages {

	constructor(canvas, newCanvas)
    {
        this.OldCanvas = canvas;
        this.NewCanvas = newCanvas;
        this.OldContext = this.OldCanvas.getContext("2d");
        this.NewContext = this.NewCanvas.getContext("2d");
        this.Width = this.OldCanvas.width;
        this.Height = this.OldCanvas.height;
        this.Counter = 0;
    }

	Photomaton() {
		console.log("Photomaton algorithm");
		let width = 256;
		let height = 256;

		for (let y of Array(height).keys()) {
			for (let x of Array(width).keys()) {

				var ctx = this.OldContext;
				var newCtx = this.NewContext;
				var pixelData = ctx.getImageData(x, y, 1, 1);

				if (x % 2 == 0 && y % 2 == 0)
					newCtx.putImageData(pixelData, x / 2, y / 2);
				else if (x % 2 == 0)
					newCtx.putImageData(pixelData, x / 2, height / 2 + y / 2);
				else if (y % 2 == 0)
					newCtx.putImageData(pixelData, width / 2 + x / 2, y / 2);
				else
					newCtx.putImageData(pixelData, width / 2 + x / 2, height / 2 + y / 2);
			}
		}
		canvas.getContext('2d').drawImage(newCanvas, 0, 0);
	}

	Couplage() {
		console.log("Couplage algorithm")
		this.Photomaton();
		this.Baker();
	}

	Twist() {
        console.log("Twist algorithm");
        let width = 256;
        let height = 256;
        for (let y of Array(height).keys()) {
            for (let x of Array(width).keys()) {

                var ctx = this.OldContext;
				var newCtx = this.NewContext;
                var pixelData = ctx.getImageData(x, y, 1, 1);
                
                var newX = x;
                var newY = y;
                if(x == 255)
                {
                    newX = 0;
                }else{
                    newX = x+1;
                }
                if(y == 255){
                    newY = 0;
                }else{
                    newY = y + 1;
                }
                
                newCtx.putImageData(pixelData, newX, newY);
            }
        }
        canvas.getContext('2d').drawImage(newCanvas, 0, 0);
    }

    Column()
    { 
        console.log("Column algorithm");
        var counterX = 0;
        var counterY = 0;
        for (let y of Array(this.Height).keys()) {
            for (let x of Array(this.Width).keys()) {
                this.OldContext = this.OldCanvas.getContext('2d');
                this.NewContext = this.NewCanvas.getContext('2d');
                var pixelData = this.OldContext.getImageData(x, y, 1, 1);
                counterX = x;
                counterY = y;
                
                if(y % 2 == 0)
                {
                    if(counterX == 0)
                    {
                        counterX = 255;
                        this.NewContext.putImageData(pixelData, counterX, counterY);
                    }
                    else
                    {
                        this.NewContext.putImageData(pixelData, x-1, counterY);
                    }
                }
                else
                {
                    if(counterX == 255)
                    {
                        counterX = 0;
                        this.NewContext.putImageData(pixelData, counterX, counterY);
                    }
                    else
                    {
                        this.NewContext.putImageData(pixelData, counterX+1, counterY);
                    }
                }
                counterX++;
            }
            counterY++;
        }
        canvas.getContext('2d').drawImage(newCanvas, 0, 0);
	}

	Baker() {
		console.log('Baker algorithm');
		let width = 256;
		let height = 256;

		for (let y of Array(height).keys()) {
			for (let x of Array(width).keys()) {

				var ctx = this.OldContext;
				var newCtx = this.NewContext;
				var pixelData = ctx.getImageData(x, y, 1, 1);
                var newX = x;
                var newY = y;
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
				newCtx.putImageData(pixelData, newX, newY);
			}
		}
		canvas.getContext('2d').drawImage(newCanvas, 0, 0);
	}

    Fleur() {
        console.log("Fleur algorithm");
        let width = 256;
        let height = 256;
    
        for (let y = height; y >= 0; y--) {
            for (let x = width; x >= 0; x--) {
    
                var ctx = this.OldContext;
				var newCtx = this.NewContext;
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


}