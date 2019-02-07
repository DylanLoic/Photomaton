
class ToolsImages{
    
    Width = 0;
    Height = 0;
    Context;
    
    constructor(context, width, height)
    {
        this.Context = context;
        this.Width = width;
        this.Height = height;
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

    Column()
    {
        var leftPixels = [this.Width/2, this.Height];
        var rightPixels = [this.Width/2, this.Height];
        var finalImage = [this.Width, this.Height];  
        
        var img = this.Context.getImageData(0, 0, this.Width, this.Height);
        
        for (var i = 0; i < this.Width; i++) {
            for (var j = 0; j < this.Height; j++) {
                
                if(i < this.Width/2)
                {
                    
                    leftPixels[i,j] = img.Data[i,j]
                }
                else
                {
                    rightPixels[i,j] = this.Context.getImageData(i, j, this.Width, this.Height);
                }
                
                
            }
        }
        
        for (var k = 0; k < this.Width; k++) {
            for (var l = 0; l < this.Height; l++) {
                
                if(k % 2 == 0 && k < this.Width/2)
                {
                    
                    finalImage[k,l] = rightPixels[k,l];
                }
                else if(k % 2 !== 0 && k < this.Width/2)
                {
                    finalImage[k,l] = leftPixels[k,l];
                }
                else if (k % 2 == 0 && k > this.Width/2)
                {
                    finalImage[k,l] = leftPixels[k,l];
                }
                else if(k % 2 !== 0 && k > this.Width/2)
                {
                    finalImage[k,l] = rightPixels[k,l];
                }
                
                
            }
            
        }
        
    }

    InX()
    {
        
    }

}