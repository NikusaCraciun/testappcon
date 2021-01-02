

$(document).ready(function() {


    const curtain1 = $('.curtain-1');
    const curtain2 = $('.curtain-2');

    setTimeout(function(){
        curtain1.slideUp(250,"swing");
    }, 700);

    setTimeout(function(){
        curtain2.slideUp(200,"swing");
    }, 900);



 
    $(".btn-showroom, .nav-navbar li a, nav-brand a").click(function(e) {
      
        e.preventDefault();
        var href = $(this).attr('href');
        setTimeout(function(){
            curtain1.slideDown(250,"swing");
        }, 200);
    
        setTimeout(function(){
            curtain2.slideDown(200,"swing");
        }, 400);
             // Delay setting the location for one second
        setTimeout(function() {window.location = href}, 800);
        
        return false;
    });

    document.querySelector('#bg-video').playbackRate = 0.5;
    
  

        function cycleBackgrounds() {
            var index = 0;
        
            $imageEls = $('.toggle-image'); // Get the images to be cycled.
        
            setInterval(function () {
                // Get the next index.  If at end, restart to the beginning.
                index = index + 1 < $imageEls.length ? index + 1 : 0;
                // Show the next image.
                $imageEls.eq(index).addClass('show');
                // Hide the previous image.
                $imageEls.eq(index - 1).removeClass('show');
        
            }, 4000);
        };
        
        // Document Ready.
        $(function () {
            cycleBackgrounds();
        });
    
 

})