$(function(){

    let pageNum = $('.pagenum').attr('id')

    $('.start').click(function(){
        // am kodiT vaqrob start buttons
        $('.absolute-element').addClass('del');
        
        // am kodiT vnomravt gverdebs
        $('.pagenum').text(pageNum);
        pageNum++;

        
        
    })

    // es kodi uzrunvelyofs ro tu pirvel gverdzea momxmarebeli ukan gadmosvlis gilaki ar mushaobdes
    if(pageNum = 1){
        $('.back').css({
            'display' : 'none'
        })
    }



})