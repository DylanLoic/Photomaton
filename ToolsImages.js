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

    Photomaton(){
        

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

    Boustrophedon()
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
                        if(counterY == 0)
                        {
                            counterY = 255;
                            this.NewContext.putImageData(pixelData, counterX+1, counterY);
                        }
                        else
                        {
                            this.NewContext.putImageData(pixelData, counterX, counterY);
                        }
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
                        if(counterY == 255)
                        {
                            counterY = 0;
                            this.NewContext.putImageData(pixelData, counterX, counterY);
                        }
                        else
                        {
                            this.NewContext.putImageData(pixelData, counterX, counterY);
                        }
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
        
    }

}