class ToolsImages{
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
    

    Photomaton(nb = 2, action='do'){
        var nbx = Array.isArray(nb) ? nb[0] : nb;
        var nby = Array.isArray(nb) ? nb[1] : nb;

        var width = 256;
        var height = 256;

        width -= width%nbx;
        height -= height%nby;

        var copy = createImage(width, height, RGB);
    }

    Svastika()
    {
        
    }

    DoubleRotation()
    {

    }

    Baker()
    {

    }

    Column()
    { 
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
        this.Counter++;
        this.OldCanvas.getContext('2d').drawImage(this.NewCanvas, 0, 0);
        
    }

    InX()
    {
        var imagedata = this.canvas.getImageData(0,0,this.canvas.canvas.width, this.canvas.canvas.height);
        var tmpimagedata = imagedata;
        console.log(imagedata);
        for(var i = 0; i < this.canvas.canvas.width; i++)
        {
            for(var j = 0; j < this.canvas.canvas.height; j++)
            {
                if(i % 2 == 0)
                {
                    tmpimagedata.data[i + 2] = imagedata.data[i];
                }
                else
                {
                    tmpimagedata.data[i - 2] = imagedata.data[i];
                }
            }
        }
        console.log(tmpimagedata);
        //console.log("Largeur = " + this.canvas.canvas.width + " \nHauteur = " + this.canvas.canvas.height);
    }

}