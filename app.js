$(function(){

    // ამ კოდის საშალებით იუზერი ვერ შეიყვანს რიცხვებს სახელის და გვარის ინფუთებში
    onlyAlphabet();

    // x ცვლადს ვქმნით რომ ვაკონტროლოთ რომელ გვერდზე ვართ
    let x = 0; 
 
    let pageNum = $('.pagenum').attr('id')

     // გვერდებზე გადასვლა + ვალიდაცია
     $('.next').on('click' , function(e){
        e.preventDefault()
        
        if(x <= 5){
            $('.active-page').removeClass('active-page').next().addClass('active-page');
            x++;

            if( x == 1 ){                

                // პირველი გვერდის ვალიდაციის კოდი
                $('.forValidation').keyup(function(){

                    let input1 = $('#first-input').val();
                    let input2 = $('#second-input').val();
                    let input3 = $('#third-input').val();

                    // let endValue = input3.val();
                    let valstring = input3.split('@');

                    // ამ კოდით ვამოწმებთ ინფუთში ასოების რაოდენბა თუ არის 3-255 შუალედში და თუ მეილი მთავრდება redberry.ge ზე
                    if( valstring[1] == "redberry.ge" && input1.length > 2 && input1.length < 255 && input2.length > 2  && input2.length < 255){
                        $('.first-valid').removeAttr('disabled');
                        $('.error').html('<i class="bi bi-check-lg" style="color:green!important;" ></i>');
                    }else {
                        $('.first-valid').prop('disabled', true);
                    }
                })

                // enter ღილაკის დაჭერით რომ არ გადავიდეს ინფუთების შეუვსებლად შემდეგ გვერდზე
                disableEnter();
            }

            if( x == 2){

                // enter ღილაკის დაჭერით რომ არ გადავიდეს ინფუთების შეუვსებლად შემდეგ გვერდზე
                disableEnter();

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
                                         <input type="date" id="yes" name="d"  class="haveAnti num-input forValidation date">
                                      </div>
                                   
                                      <div class="question-child">
                                          <input type="number" id="no" value="" name="d" class="haveAnti num-input forValidation Num" style="margin-top:10px;">   
                                      </div>
                                   
                                   </div>

                                 `);

                                //  ამ კოდის საშუალებით დინამიურად შექმნილი ინფუთისგან ამოვიღებთ ველიუს(კერძოდ, სტატიკურ ინფუთს გავატანთ ატრიბუტად)
                                
                                // data-test მინიჭება
                                $('.haveCovid:checked').attr('data-test' , 'yes');
                                 let UserHasTest = $('.haveCovid:checked').attr('data-test');
                                
                                  //  ივენთით ვგებულობთ იუზერის მიერ შეყვანილ ანტისხეულების რაოდენობას და ვინახავთ
                                  $(document).on('change' , '.Num' , function(){
                                    var input = $(this).val();

                                    $('.haveCovid:checked').attr('data-num' , input);
                                    let UserHasTest = $('.haveCovid:checked').attr('data-num');
                                }) 
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
                                         <input type="date" id="yes" name="d" class="period num-input forValidation date" placeholder="რიცხვი">
                                      </div>

                                   </div>
                                    
                                 `)
                                }

                                //  ამ კოდის საშუალებით დინამიურად შექმნილი ინფუთისგან ამოვიღებთ ველიუს(კერძოდ, სტატიკურ ინფუთს გავატანთ ატრიბუტად)
                                $('.haveCovid:checked').attr('data-test' , 'no');
                                let UserHasTest2 = $('.haveCovid:checked').attr('data-test');

                                     //  შემდეგ გვერდზე გადასასვლელი ვალიდაციის კოდი
                                    $(document).on('change' , '.forValidation' , function(){
                                   
                                        let dateVal = $('.forValidation[id = yes]').val();
                                        let numVal = $('.forValidation[id = no]').val();

                                        if( dateVal != 0 && numVal != 0){
                                          $('.second-valid').removeAttr('disabled');
                                       }
                                 })

                                //  ივენთით ვგებულობთ იუზერის მიერ შეყვანილ თარიღს და ვინახავთ
                                $(document).on('change' , '.date' , function(){
                                   var input = $(this).val();
                                   $('.haveCovid:checked').attr('data-date' , input);
                                   let UserHasTest = $('.haveCovid:checked').attr('data-date');
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

                // enter ღილაკის დაჭერით რომ არ გადავიდეს ინფუთების შეუვსებლად შემდეგ გვერდზე
                disableEnter();
                
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
                                <input type="radio" id="first-Doze" name="m" value="first-Doze" class="stage">
                                <label for="first-Doze">პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label>
                             </div>
                          
                             <div class="question-child">
                                 <input type="radio" id="full-vacinated" name="m" value="full-vacinated" class="stage">
                                 <label for="full-vacinated">სრულად აცრილი ვარ</label>
                             </div>

                             <div class="question-child">
                                 <input type="radio" id="onlyFirst" name="m" value="onlyFirst" class="stage">
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

                            //  ამ კოდის საშუალებით დინამიურად შექმნილი ინფუთისგან ამოვიღებთ ველიუს(კერძოდ, სტატიკურ ინფუთს გავატანთ ატრიბუტად)

                            let a = $('.stage:checked').attr('id')
    
                            $('.haveVaccine:checked').attr('data-stage' , a );
                            let stage = $('.haveVaccine:checked').attr('data-stage');
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
                                <input type="radio" id="waiting-second" name="n" value="waiting-second" class="why">
                                <label for="waiting-second">დარეგისტრირებული ვარ და ველოდები რიცხვს</label>
                             </div>
                          
                             <div class="question-child">
                                 <input type="radio" id="no" name="n" value="no" class="why">
                                 <label for="no">არ ვგეგმავ</label>
                             </div>

                             <div class="question-child">
                                 <input type="radio" id="alreadyHad" name="n" value="alreadyHad" class="why">
                                <label for="alreadyHad">გადატანილი მაქვს და ვგეგმავ აცრას</label>
                             </div>

                          </div>
    
                        `);

                        $(document).on('change' , '.why' , function(){

                            var mosanishniWhy = $('.why[type=radio]:checked').val();

                            // თუ არ გეგმავს
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

                            // სხვა პასუხის შემთხვევაში ამ ატრიბუტის წაშლა ახალ არჩეულს როარ გადაეწეროს    
                            $('.haveVaccine:checked').removeAttr('data-why');

                           //  ამ კოდის საშუალებით დინამიურად შექმნილი ინფუთისგან ამოვიღებთ ველიუს(კერძოდ, სტატიკურ ინფუთს გავატანთ ატრიბუტად)

                          let b = $('.why:checked').attr('id')
    
                          $('.haveVaccine:checked').attr('data-why' , b );
                          let stage = $('.haveVaccine:checked').attr('data-why');

                        })
                    }
                })
            }  
            
            if( x == 4){
                
                // enter ღილაკის დაჭერით რომ არ გადავიდეს ინფუთების შეუვსებლად შემდეგ გვერდზე
                disableEnter();

                //   ბოლო გვერდის ვალიდაციის კოდი
                  $(document).on('change' , '.final-validation' , function(){

                      var mosanishniLastValid1 = $('.last-valid[type=radio]:checked').attr('name');
                      var mosanishniLastValid2 = $('.last-valid2[type=radio]:checked').attr('name');
   
                      if(mosanishniLastValid1 == 'g' && mosanishniLastValid2 == 'h'){
                          $('.end').prop('disabled', false);
                      }else{
                           $('.end').prop('disabled', true);
                      }
                  })
             }

            //  მადლობის მესიჯის გამოსატანი კოდი
            if($('.final-page').hasClass('active-page')){
                setTimeout(function(){ 
                    $('.thanks').addClass('scrollDown');
                }, 600);
                setTimeout(function(){ 
                    $('.up').addClass('up-show');
                }, 1200);
                setTimeout(function(){ 
                    $('.down').addClass('down-show');
                }, 1200);
            }
        } 
    })
    $('.back').click(function(){
        if(x > 1){
            $('.active-page').removeClass('active-page').prev().addClass('active-page');
            x--;   
        }
    })

    let user = {
        name: $('.first-input').val(),
    };

    // შეყვანილი ინფორმაციის შენახვა 

    $(document).on('click' , '.end' , function(e){

        let userName = $('#first-input').val();
        let userLastName = $('#second-input').val();
        let UserEmail = $('#third-input').val();

        let hadCovid = $('.haveCovid:checked').val();
        let hadTest = $('.haveCovid:checked').attr('data-test');
        let date = $('.haveCovid:checked').attr('data-date');

        let vaccine = $('.haveVaccine:checked').val();
        let stage = $('.haveVaccine:checked').attr('data-stage');
        let why = $('.haveVaccine:checked').attr('data-why');
        let num = $('.haveCovid:checked').attr('data-num');

        let meetingCount = $('.last-valid:checked').val();
        let office = $('.last-valid2:checked').val();
        let meet = $('#meet').val();
        let reco = $('#yourReco').val();

        // ვქმნით მასივს ობიექტებისთის 
        let usersArr = [];

        let user = {
            სახელი: `${userName}` ,
            გვარი : `${userLastName}` ,
            იმეილი : `${UserEmail}` ,

            კოვიდი : `${hadCovid}` , 
            ტესტი : `${hadTest}` ,
            თარიღი : `${date}` , 
            ანტისხეულები : `${num}` , 
            
            ვაქცინაცია : `${vaccine}` , 
            ეტაპი : `${stage}` , 
            აიცრება : `${why}` , 

            შეხვედრებისრაოდენობა : `${meetingCount}` ,
            ოფისშიმუშაობა : `${office}` ,
            შეხედულება : `${meet}` ,
            ახალიიდეები : `${reco}`
        };

        // ობიექტს ვინახავთ მასივში
        usersArr.push(user);

        // მასივი გადაგვყავს JSON ფორმატში
        let jsonArr = JSON.stringify(usersArr)

        console.log(jsonArr)

    })

})

 // enter ღილაკის დაჭერით რომ არ გადავიდეს ინფუთების შეუვსებლად შემდეგ გვერდზე
function disableEnter(){
    
     $(document).on('keyup keypress', 'input', function(e) {
        if(e.which == 13) {
          e.preventDefault();
          return false;
        }
      });

}

 // ამ კოდის საშალებით იუზერი ვერ შეიყვანს რიცხვებს სახელის და გვარის ინფუთებში
function onlyAlphabet(){

$('.inputs').keydown(function(e) {
    if (e.shiftKey || e.ctrlKey || e.altKey) {
      e.preventDefault();
    } else {
      var key = e.keyCode;
      if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
        e.preventDefault();
      }
    }
  });
}