
class ToolsImages{

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

    }

}