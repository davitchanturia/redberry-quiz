$(function(){

    // let input = $('.inputs')''
    let input1 = $('#first-input');
    let input2 = $('#second-input');
    let input3 = $('#third-input');

    // x ცვლადს ვქმნით რომ ვაკონტროლოთ რომელ გვერდზე ვართ
    let x = 0; 

    let pageNum = $('.pagenum').attr('id')

    // გვერდებზე გადასვლა + ვალიდაცია
    $('.next').on('click' , function(e){
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
                            $('.email-error').html('<i class="bi bi-check-lg" style="color:green!important;" ></i>');
                        }else{
                            $('.next').prop('disabled', true);
                            $('.email-error').text('გთხოვთ დარეგისტრირდეთ რედბერის მეილით');
                        }
                })
            }

            if( x == 2){
                $(document).on('change' , '.haveCovid' , function(){

                    // პირველი შეკითხვის value
                    var mosanishniCovid = $('.haveCovid[type=radio]:checked').val();
          
                    console.log(mosanishniCovid)

                    if(mosanishniCovid == "yes"){
                        $('.left-content').append(`
                            
                        <div class="question-div">
    
                            <h2>ანტისხეულების ტესტი გაქვს გაკეთებული?*</h2>
    
                            <div class="question-child">
                                <input type="radio" id="yes" name="c" value="yes" class="havetest">
                                <label for="yes">კი</label>
                             </div>
                          
                             <div class="question-child">
                                 <input type="radio" id="no" name="c" value="no" class="havetest">
                                 <label for="no">არა</label>
                             </div>

                          
                          </div>
    
                          
                        `);
                                       
                                      $(document).on('change' , '.havetest' , function(){

                                                // მეორე შეკითხვის value
                                                var mosanishniTest = $('.havetest[type=radio]:checked').val();
                                            console.log(mosanishniTest)

                                                if(mosanishniTest == "yes"){
                                                    $('.left-content').append(`
                                                        
                                                    <div class="question-div">
                                
                                                        <h2>თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*</h2>
                                
                                                        <div class="question-child">
                                                            <input type="date" id="yes" name="d" value="05/07/1999" class="haveAnti num-input" placeholder="რიცხვი">
                                                            
                                                         </div>
                                                      
                                                         <div class="question-child">
                                                             <input type="number" id="no" value="2131" name="d" class="haveAnti num-input" style="margin-top:10px;">
                                                             
                                                         </div>
                            
                                                      
                                                      </div>
                                
                                                      
                                                    `);
                        
                                            }
                                        })

                    }


                })
            }

            if( x == 3){
                
                $(document).on('change' , '.haveCovid' , function(){

                    // პირველი შეკითხვის value
                    var mosanishniCovid = $('.haveCovid[type=radio]:checked').val();
          
                    console.log(mosanishniCovid)

                    if(mosanishniCovid == "yes"){
                        $('.left-content').append(`
                            
                        <div class="question-div">
    
                            <h2>ანტისხეულების ტესტი გაქვს გაკეთებული?*</h2>
    
                            <div class="question-child">
                                <input type="radio" id="yes" name="c" value="yes" class="havetest">
                                <label for="yes">კი</label>
                             </div>
                          
                             <div class="question-child">
                                 <input type="radio" id="no" name="c" value="no" class="havetest">
                                 <label for="no">არა</label>
                             </div>

                          
                          </div>
    
                          
                        `);
                                       
                                      

                    }


                })

            }

            
        }
        
    })
    $('.back').click(function(){
        if(x > 1){
            $('.active-page').removeClass('active-page').prev().addClass('active-page');
            x--;
            
        }
    })

})
    

   

