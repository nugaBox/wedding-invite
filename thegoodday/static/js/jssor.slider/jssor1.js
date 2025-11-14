gallery_list2_init = function () {
    var options = {    
        $FillMode: 1,                              
        //[Optional] Auto play or not, to enable slideshow, this option must be set to greater than 0. Default value is 0. 0: no auto play, 1: continuously, 2: stop at last slide, 4: stop on click, 8: stop on user navigation (by arrow/bullet/thumbnail/drag/arrow key navigation)
        $AutoPlay: 1,  
        //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
        $Idle: 2500,          
        //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500                  
        $SlideDuration: 500,      
        //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $Cols is greater than 1, or parking position is not 0)                          
        $DragOrientation: 1,                     
        //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).                         
        $UISearchMode: 0,                     

        $ThumbnailNavigatorOptions: {
            //[Required] Class to create thumbnail navigator instance
            $Class: $JssorThumbnailNavigator$,       
            //[Required] 0 Never, 1 Mouse Over, 2 Always       
            $ChanceToShow: 2,                               

            //[Optional] Enable loop(circular) of carousel or not, 0: stop, 1: loop, default value is 1
            $Loop: 0,        
            //[Optional] Horizontal space between each thumbnail in pixel, default value is 0                               
            $SpacingX: 3,       
            //[Optional] Vertical space between each thumbnail in pixel, default value is 0                            
            $SpacingY: 3,                                   
            
            $ArrowNavigatorOptions: {
                //[Requried] Class to create arrow navigator instance
                $Class: $JssorArrowNavigator$,          
                //[Required] 0 Never, 1 Mouse Over, 2 Always    
                $ChanceToShow: 2,
                //[Optional] Steps to go for each navigation request, default value is 1                               
                $Steps: 6                                       
            }
        }
    };

    var jssor_slider1 = new $JssorSlider$('gallery_list2', options);

    /*#region responsive code begin*/
    //you can remove responsive code if you don't want the slider scales while window resizing
    function ScaleSlider() {
        var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
        // console.log(parentWidth);
        if (parentWidth)
            jssor_slider1.$ScaleWidth(Math.min(parentWidth, 720));
        else
            $Jssor$.$Delay(ScaleSlider, 30);
    }

    ScaleSlider();
    $Jssor$.$AddEvent(window, "load", ScaleSlider);

    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};