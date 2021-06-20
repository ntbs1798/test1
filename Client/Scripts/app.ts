//IFFE -- Imediately Invoked Function Expression
"use strict";

(function(){
    function confirmDelete()
    {
      // confirm deletion
      $("a.delete").on("click", function(event){
        if(!confirm("Chắc chưa?"))
        {
          event.preventDefault();
          location.href = '/contact-list';
        }       
      });
    }

    
    function Start(): void
    {
        confirmDelete();
    }

    
    window.addEventListener("load", Start);
})();