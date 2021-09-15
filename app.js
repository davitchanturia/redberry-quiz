$(function(){
    

    let pageNum = $('.pagenum').attr('id')

    $('.start').click(function(){
        // am kodiT vaqrob start buttons

        $('.starter').removeClass('starter').next().addClass('starter').removeClass('blanke')
        $('.starter-butt').remove();
        $('.logo').attr("src", "img/rect.png");
        $('.logo').animate({
            'width' : '622px' , 
            'height' : '75px' ,
            'border-radius' : '0px!important' ,
            'bottom' : '100px' ,
            'left' : '50px' ,
            'opacity' : '0.6!important' , 
        })
        
        // am kodiT vnomravt gverdebs
        $('.pagenum').text(pageNum);
        
    })

    // es kodi uzrunvelyofs ro tu pirvel gverdzea momxmarebeli ukan gadmosvlis gilaki ar mushaobdes
    if(pageNum = 1){
        $('.back').css({
            'display' : 'none'
        })
    }



})