$(function(){

    let input1 = $('#first-input');
    let input2 = $('#second-input');
    let input3 = $('#third-input');

    // x ცვლადს ვქმნით რომ ვაკონტროლოთ რომელ გვერდზე ვართ
    let x = 0; 

    let pageNum = $('.pagenum').attr('id')

    // გვერდებზე გადასვლა + ვალიდაცია
    $(document).on('click' , '.next' , function(e){
        e.preventDefault()
        
        if(x < 4){
            $('.active-page').removeClass('active-page').next().addClass('active-page');
            x++;

            

            if( x == 1 ){

                // ამ ფუნქციით იუზერი ვერ გადავა შემდეგზე თუ მეილი სწორად არ შეიყვანა (@redberry.com - ით უნდა მთავრდებოდეს)
                input3.keyup(function(e){
                    // let value = e.target.value;

                    let endValue = input3.val();
                    let valstring = endValue.split('@');

                        if( valstring[1] == "redberry.com" ){
                            $('.next').prop('disabled', false);
                        }else{
                            $('.next').prop('disabled', true);
                            $('.email-error').text('იმეილი არასწორია')
                        }

                })
            
            
            
            
                //    $('.form1').submit(function(e){
            //        if(input1.val() == "123"){
            //         // $('.active-page').removeClass('active-page').next().addClass('active-page');
            //         // x++;
            //        }else{
            //             $('.next').attr("disabled", true);
            //         }
            //    })
                         

            }

            
        }
        
    })
    $('.back').click(function(){
        if(x > 1){
            $('.active-page').removeClass('active-page').prev().addClass('active-page');
            x--;
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            // let sda = checkPage();
            
        }
    })
    

    //  let checkPage = function(){
    //      // უიკან გადასასვლელი ღილაკის გაქრობა
    //      if(x == 1 ){
    //         $('.back').css({
    //             'display' : 'none'
    //         });
    //     }else{
    //         $('.back').css({
    //             'display' : 'inline-block'
    //         });
    //     }

    //     // წინ გადასასვლელი ღილაკის გაქრობა ბოლო გვერდზე
    //     if(x == 4 ){
    //         // $('.next').css({
    //         //     'display' : 'none'
    //         // });
    //     }else{
    //         $('.back').css({
    //             'display' : 'inline-block'
    //         });
    //     }
    //  }


// ეს კოდი უზრუნველყოფს რო რედბერის მეილის გარდა სხვა რამით არ შევიდეს
    let splitString = function(){
        let string = $(this).val();

        let splitString = string.split('@')
    }

})















   

