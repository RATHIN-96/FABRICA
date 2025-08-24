  $(document).ready(function(){
        $('.off').click(function(){
            $('.offer1').toggle(1500)
        })
     });


//  javascript for toggle menu 
     
    var MenuItems = document.getElementById('MenuItems');
   MenuItems.style.maxHeight="0px";

    function  menutoggle(){
        if(MenuItems.style.maxHeight == "0px")
        {
         MenuItems.style.maxHeight = "200px";
    
        }else{
             MenuItems.style.maxHeight = "0px";
        }
    
    };
