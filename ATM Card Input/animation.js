$(document).ready(function () {
   
   $(".gw-cn-one").focus();
    
    
    $(".gw-cn-one").on('input',function(e)
    {
      
      
        if($(this).val().length==4)
        {
            $(".gw-cn-two").focus();
         
        }
       
    });

    $(".gw-cn-two").on('input',function(e)
    {
      
      
        if($(this).val().length==4)
        {
            $(".gw-cn-three").focus();
         
        }
       
    });
    $(".gw-cn-three").on('input',function(e)
    {
      
      
        if($(this).val().length==4)
        {
            $(".gw-cn-four").focus();
         
        }
       
    });

    $(".gw-cn-four").on('input',function(e)
    {
      
      
        if($(this).val().length==4)
        {
            $(".gw-ce-date").focus();
         
        }
       
    });
    $(".gw-ce-date").on('input',function(e)
    {
        if($(this).val().length==1)
        {
            try
            {
                if(Number($(this).val())>1)
                {
                 
                    $(".gw-card-expire label").html("invalid thru").css("color","red");
                }
                else
                {
                 
                    $(".gw-card-expire label").html("valid thru").css("color","#aaa9a9");
                }
                
            }
            catch(error)
            {
                alert(error);
                $(".gw-card-expire label").html("invalid thru").css("color","red");
            }
           
        }
      
        if($(this).val().length==2)
        {
            try
            {
                if(Number($(this).val()>12))
                {
                    $(".gw-card-expire label").html("invalid thru").css("color","red");
                }
                else
                {
                    $(".gw-card-expire label").html("valid thru").css("color","#aaa9a9");
                    $(this).val($(this).val()+"/");
                }
                
            }
        

               catch(error)
            {
                $(".gw-card-expire label").html("invalid thru").css("color","red");
            }
        }
      
        if($(this).val().length==5)
        {
            if(Number($(this).val().split("/")[1])<22)   //   {12,22}
            {
                $(this).val($(this).val().split("/")[0]+"/");
                $(".gw-card-expire label").html("invalid thru").css("color","red");
            }
            else if($(".gw-cn-one").val().length!=4 || $(".gw-cn-two").val().length!=4 || $(".gw-cn-three").val().length!=4 || $(".gw-cn-four").val().length!=4)
            {
                $(".gw-card-expire label").html("valid thru").css("color","#aaa9a9");
            }
            else
            {
                $(".gw-card-expire label").html("valid thru").css("color","#aaa9a9");

                setTimeout(function()
                {
                    $(".gw-card").css('transform','rotateY(180deg)');
                    $(".gw-card-front").css('display','none');
                    $(".gw-card-back").css('display','block');
                    $(".gw-card-back div").css('visibility','hidden');
                },
                100);
                setTimeout(function()
                {
                    $(".gw-card-back div").css('visibility','visible');
                    $(".gw-cvv input").focus();
                   
                },
                500);
            }


            
           
        }
       
    });

    $(".gw-cvv input").on("input",function(){
        if($(this).val().length==3)
        {
            $("#cardPaymentForm").submit();
            $(".gw-cvv input").blur();
        }
    });

 

  


});