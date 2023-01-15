
        
        alert("Welcome to Online Booking");
        function form()

        {
           var fname = document.forms[0].fname.value;
           var lname = document.forms[0].lname.value;  
           var comment=document.forms[0].myComments.value;
           var days=document.forms[0].myComments.value;
           
           if(fname == '' )
            {
               alert("First Name field is Required");
               return false;
            }
            
            


            if(lname == '' )
            {
               alert("Last Name field is Required");
               return false;
            }

          
            if(comment=="enter here" || comment == "" ) 
            {alert("Comment field is required");
            return false;
            } 

             if( days == '' ) 
            {alert(" Days field is required");
            return false;
            } 
             


        }       
        
        
