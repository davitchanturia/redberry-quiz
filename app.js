$(function(){

    // x ცვლადს ვქმნით რომ გვერდებზე გადასვლისას ბოლოდან ისევ პირველზე და პირველიდან ბოლოზე არ დაგვაბრუნოს
    let x = 0; 

    let pageNum = $('.pagenum').attr('id')

    // gverdebze gadasvla
    $('.next').click(function(e){
        if(x < 4){
            $('.active-page').removeClass('active-page').next().addClass('active-page');
            x++;

           let test = checkPage();
            
        }
        
    })
    $('.back').click(function(){
        if(x > 1){
            $('.active-page').removeClass('active-page').prev().addClass('active-page');
            x--;
            
            let sda = checkPage();
            
        }
    })
    

     let checkPage = function(){
         // უიკან გადასასვლელი ღილაკის გაქრობა
         if(x == 1 ){
            $('.back').css({
                'display' : 'none'
            });
        }else{
            $('.back').css({
                'display' : 'inline-block'
            });
        }

        // წინ გადასასვლელი ღილაკის გაქრობა ბოლო გვერდზე
        if(x == 4 ){
            // $('.next').css({
            //     'display' : 'none'
            // });
        }else{
            $('.back').css({
                'display' : 'inline-block'
            });
        }
     }

})















   

