
class ToolsImages{
    
    /*width = 0;
    height = 0;
    canvas;
    image;*/

    constructor(pImage, pCanvas)
    {
        this.image = pImage;
        this.canvas = pCanvas;
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