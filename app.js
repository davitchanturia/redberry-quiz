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

                    var mosanishniCovid = $('.haveCovid[type=radio]:checked').val();

                    // თუ კოვიდი გადატანილი აქვს
                    if(mosanishniCovid == "yes"){
                        
                        // ვქმნით ანტისხეულების ტესტის შესახებ კითხვას
                           $('.answers').append(`
                               
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

                                                    // ვქმნით ორ ინფუთს - თარიღი და რაოდენობა
                                                    $('.answers').append(`
                                                        
                                                    <div class="question-div haveAnti">
                                
                                                        <h2>თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*</h2>
                                
                                                        <div class="question-child">
                                                            <input type="date" id="yes" name="d"  class="haveAnti num-input" placeholder="რიცხვი">
                                                         </div>
                                                      
                                                         <div class="question-child">
                                                             <input type="number" id="no" value="2131" name="d" class="haveAnti num-input" style="margin-top:10px;">   
                                                         </div>
                            
                                                      
                                                      </div>
                                                      
                                
                                                      
                                                    `);
                                                    // ვშლით სხვა პასუხის შესაძლო გაგრძელებებს უკან მიბრუნებისას ბევრჯერ რო არ შექმნას დივი

                                                    $('.period').remove();



                                                // თუ ტესტი გაკეთებული არ აქვს
                                                 }
                                                 if(mosanishniTest == "no"){

                                                    // ვქმნით ინფუთს - გადატანის პერიოდი
                                                    $('.answers').append(`
                                                        
                                                    <div class="question-div period">
                                
                                                        <h2>მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</h2>
                            
                                                        <div class="question-child">
                                                            <input type="date" id="yes" name="d" value="05/07/1999" class="period num-input" placeholder="რიცხვი">
                                                         </div>

                                                      </div>
                                
                                                      
                                                    `)

                                                    // ვშლით სხვა პასუხის შესაძლო გაგრძელებებს უკან მიბრუნებისას ბევრჯერ რო არ შექმნას დივი

                                                    $('.haveAnti').remove();

                                                 }
                              })

                    }else{
                        // ვშლით სხვა პასუხის შესაძლო გაგრძელებებს უკან მიბრუნებისას ბევრჯერ რო არ შექმნას დივი
                        $('.answers').empty();
                        
                    }


                })
            }

            if( x == 3){
                
                $(document).on('change' , '.haveVaccine' , function(){

                    // პირველი შეკითხვის value
                    var mosanishniVaccine = $('.haveVaccine[type=radio]:checked').val();

                    console.log(mosanishniVaccine)
                    if(mosanishniVaccine == "yes"){
                        y++;
                        $('.left-cont').append(`
                            
                        <div class="question-div">
    
                            <h2>აირჩიე რა ეტაპზე ხარ*</h2>
    
                            <div class="question-child">
                                <input type="radio" id="yes" name="m" value="first-Doze" class="">
                                <label for="first-Doze">პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label>
                             </div>
                          
                             <div class="question-child">
                                 <input type="radio" id="no" name="m" value="full-vacinated" class="">
                                 <label for="full-vacinated">სრულად აცრილი ვარ</label>
                             </div>

                             <div class="question-child">
                             <input type="radio" id="no" name="m" value="only-first" class="link">
                             <label for="only-first">პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label>
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
    

   

