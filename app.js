$(function(){

    let pageNum = $('.pagenum').attr('id')

    $('.start').click(function(){
        // am kodiT vaqrob start buttons

        $('.starter').removeClass('starter').next().addClass('starter').removeClass('blanke')
        $('.starter-butt').remove();
        $('.logo-div').attr("src", "img/rect.png");
        
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