$(function(){

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
                            $('.first-valid').prop('disabled', false);
                            $('.email-error').html('<i class="bi bi-check-lg" style="color:green!important;" ></i>');
                        }else{
                            $('.first-valid').prop('disabled', true);
                            $('.email-error').text('გთხოვთ დარეგისტრირდეთ რედბერის მეილით');
                        }
                })
            }

            if( x == 2){

                $(document).on('change' , '.haveCovid' , function(){

                    var mosanishniCovid = $('.haveCovid[type=radio]:checked').val();

                    // თუ კოვიდი გადატანილი აქვს
                    if( mosanishniCovid == "yes" ){
                        
                        //  შემდეგ გვერდზე გადასასვლელი ვალიდაციის კოდი
                        $('.second-valid').prop('disabled', true);

                        // ვქმნით ანტისხეულების ტესტის შესახებ კითხვას
                           $('.answerOne').append(`
                               
                           <div class="question-div havetest">
    
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

                                                
                             var mosanishniTest = $('.havetest[type=radio]:checked').val();

                             //  თუ ანტისხეულების ტესტი გაკეთებული აქვს
                            if(mosanishniTest == "yes"){

                                  //  შემდეგ გვერდზე გადასასვლელი ვალიდაციის კოდი
                                   $('.second-valid').prop('disabled', true);
                                
                                // ვშლით სხვა პასუხის შესაძლო გაგრძელებებს უკან მიბრუნებისას ბევრჯერ რო არ შექმნას დივი
                                $('.answerTwo').empty();

                                 // ვქმნით ორ ინფუთს - თარიღი და რაოდენობა 
                                 $('.answerTwo').append(`
                                     
                                 <div class="question-div haveAnti">
                                 
                                     <h2>თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*</h2>
                                 
                                     <div class="question-child">
                                         <input type="date" id="yes" name="d"  class="haveAnti num-input forValidation" placeholder="რიცხვი">
                                      </div>
                                   
                                      <div class="question-child">
                                          <input type="number" id="no" value="" name="d" class="haveAnti num-input forValidation" style="margin-top:10px;">   
                                      </div>
                                   
                                   </div>

                                 `);


                               

                               

                            }
                             // თუ ტესტი გაკეთებული არ აქვს
                            if(mosanishniTest == "no"){

                                  //  შემდეგ გვერდზე გადასასვლელი ვალიდაციის კოდი
                                 $('.second-valid').prop('disabled', true);

                                  // ვშლით სხვა პასუხის შესაძლო გაგრძელებებს უკან მიბრუნებისას ბევრჯერ რო არ შექმნას დივი
                                  $('.answerTwo').empty();

                                 // ვქმნით ინფუთს - გადატანის პერიოდი
                                 $('.answerTwo').append(`
                                     
                                 <div class="question-div period">
                                    
                                     <h2>მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</h2>
                                
                                     <div class="question-child">
                                         <input type="date" id="yes" name="d" value="05/07/1999" class="period num-input forValidation" placeholder="რიცხვი">
                                      </div>

                                   </div>
                                    
                                   
                                 `)

                                           

                                }

                                     //  შემდეგ გვერდზე გადასასვლელი ვალიდაციის კოდი
                                    $(document).on('change' , '.forValidation' , function(){
                                   
                                        let dateVal = $('.forValidation[id = yes]').val();
                                        let numVal = $('.forValidation[id = no]').val();

                                        if( dateVal != 0 && numVal != 0){
                                          $('.second-valid').removeAttr('disabled');
                                       }
    
                                 })

                              })

                    }else{
                        // ვშლით სხვა პასუხის შესაძლო გაგრძელებებს უკან მიბრუნებისას ბევრჯერ რო არ შექმნას დივი
                        $('.answerOne').empty();
                        $('.answerTwo').empty();

                        //  შემდეგ გვერდზე გადასასვლელი ვალიდაციის კოდი
                        $('.second-valid').prop('disabled', false);
                        
                    }


                })

                
            }

            if( x == 3){
                
                $(document).on('change' , '.haveVaccine' , function(){

                    var mosanishniVaccine = $('.haveVaccine[type=radio]:checked').val();

                    // თუ ვაქცინა გაკეთებული აქვს   
                    if(mosanishniVaccine == "yes"){

                        //  შემდეგ გვერდზე გადასასვლელი ვალიდაციის კოდი
                        $('.third-valid').prop('disabled', true);
                       
                      // ვშლით სხვა პასუხის შესაძლო გაგრძელებებს უკან მიბრუნებისას ბევრჯერ რო არ შექმნას დივი
                        $('.answerOne2').empty();

                        // ვეკითხებით რა ეტაპზეა
                        $('.answerOne2').append(`
                            
                        <div class="question-div which-stage">
    
                            <h2>აირჩიე რა ეტაპზე ხარ*</h2>
    
                            <div class="question-child">
                                <input type="radio" id="yes" name="m" value="first-Doze" class="stage">
                                <label for="first-Doze">პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label>
                             </div>
                          
                             <div class="question-child">
                                 <input type="radio" id="no" name="m" value="full-vacinated" class="stage">
                                 <label for="full-vacinated">სრულად აცრილი ვარ</label>
                             </div>

                             <div class="question-child">
                             <input type="radio" id="no" name="m" value="onlyFirst" class="stage">
                             <label for="onlyFirst">პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label>
                         </div>

                          
                          </div>
    
                          
                        `);

                        $(document).on('change' , '.stage' , function(){

                            var mosanishniStage = $('.stage[type=radio]:checked').val();

                            // თუ პირველი დოზა გაკეთებული აქვს და მეორეზე არ არის დარეგისტრირებულია
                            if(mosanishniStage == "onlyFirst"){

                                 //  შემდეგ გვერდზე გადასასვლელი ვალიდაციის კოდი
                                 $('.third-valid').prop('disabled', false);

                               // ვშლით სხვა პასუხის შესაძლო გაგრძელებებს უკან მიბრუნებისას ბევრჯერ რო არ შექმნას დივი
                                $('.answerTwo2').empty();

                                // გამოგვაქვს დამატებითი ინფო
                                $('.answerTwo2').append(`
                                
                                    <div class="question-div which-stage  ms-5">
                                        
                                        <h2>რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი </h2>
                                        
                                        <a href="https://booking.moh.gov.ge/" style="font-size:20px;"> https://booking.moh.gov.ge/</a>
                                        
                                     </div>
                                

                                `)
                            }
                            if(mosanishniStage == "full-vacinated" || mosanishniStage == "first-Doze"){

                                // ვშლით სხვა პასუხის შესაძლო გაგრძელებებს უკან მიბრუნებისას ბევრჯერ რო არ შექმნას დივი
                                $('.answerTwo2').empty();

                                //  შემდეგ გვერდზე გადასასვლელი ვალიდაციის კოდი
                                $('.third-valid').prop('disabled', false);

                            }

                        })

                    // თუ ვაქცინა გაკეთებული არ აქვს  
                    }else{

                        // ვშლით სხვა პასუხის შესაძლო გაგრძელებებს უკან მიბრუნებისას ბევრჯერ რო არ შექმნას დივი
                        $('.answerOne2').empty();
                        $('.answerTwo2').empty();

                         //  შემდეგ გვერდზე გადასასვლელი ვალიდაციის კოდი
                         $('.third-valid').prop('disabled', true);

                        // ვეკითხებით რას ელოდება
                        $('.answerOne2').append(`
                            
                        <div class="question-div">
    
                            <h2>რას ელოდები?*</h2>
    
                            <div class="question-child">
                                <input type="radio" id="yes" name="n" value="waiting-second" class="why">
                                <label for="waiting-second">დარეგისტრირებული ვარ და ველოდები რიცხვს</label>
                             </div>
                          
                             <div class="question-child">
                                 <input type="radio" id="no" name="n" value="no" class="why">
                                 <label for="no">არ ვგეგმავ</label>
                             </div>

                             <div class="question-child">
                             <input type="radio" id="no" name="n" value="alreadyHad" class="why">
                             <label for="alreadyHad">გადატანილი მაქვს და ვგეგმავ აცრას</label>
                         </div>

                          
                          </div>
    
                          
                        `);

                        $(document).on('change' , '.why' , function(){

                            var mosanishniWhy = $('.why[type=radio]:checked').val();

                            // თუ პირველი დოზა გაკეთებული აქვს და მეორეზე დარეგისტრირებულია
                            if(mosanishniWhy == "no"){
                                
                                 //  შემდეგ გვერდზე გადასასვლელი ვალიდაციის კოდი
                                 $('.third-valid').prop('disabled', false); 

                               // ვშლით სხვა პასუხის შესაძლო გაგრძელებებს უკან მიბრუნებისას ბევრჯერ რო არ შექმნას დივი
                                $('.answerTwo2').empty();

                                // გამოგვაქვს დამატებითი ინფო
                                $('.answerTwo2').append(`
                                
                                    <div class="question-div which-stage d-flex align-items-center ms-5">
                                        <i class="bi bi-arrow-right-circle" style="color:green!important; font-size:20px;" ></i>
                                        <a href="https://booking.moh.gov.ge/" style="font-size:20px; margin-left:15px;"> https://booking.moh.gov.ge/</a>
                                     </div>
                                

                                `)
                            }
                            // თუ გადატანილი აქვს და გეგმავს აცრას
                            if(mosanishniWhy == "alreadyHad"){

                                 //  შემდეგ გვერდზე გადასასვლელი ვალიდაციის კოდი
                                 $('.third-valid').prop('disabled', false);

                                // ვშლით სხვა პასუხის შესაძლო გაგრძელებებს უკან მიბრუნებისას ბევრჯერ რო არ შექმნას დივი
                                $('.answerTwo2').empty();

                                // გამოგვაქვს დამატებითი ინფო
                                $('.answerTwo2').append(`
                                
                                    <div class="question-div which-stage align-items-center ms-5">

                                        <h2>ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება. </h2>

                                        <div class="d-flex align-items-center">
                                            <i class="bi bi-arrow-right-circle" style="color:green!important; font-size:20px;" ></i>
                                            <h1>რეგისტრაციის ბმული</h1> <br>
                                        </div>
                                         <a href="https://booking.moh.gov.ge/" style="font-size:20px; "> https://booking.moh.gov.ge/</a>
                                     </div>
                                

                                `)

                            }
                            if(mosanishniWhy == "waiting-second"){

                                 //  შემდეგ გვერდზე გადასასვლელი ვალიდაციის კოდი
                                 $('.third-valid').prop('disabled', false);

                                // ვშლით სხვა პასუხის შესაძლო გაგრძელებებს უკან მიბრუნებისას ბევრჯერ რო არ შექმნას დივი
                                $('.answerTwo2').empty();

                            }

                        })

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
