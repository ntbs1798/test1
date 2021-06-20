//IFFE -- Imediately Invoked Function Expression
"use strict";

(function(){
    function confirmDelete()
    {
      // confirm deletion
      $("a.delete").on("click", function(event){
        if(!confirm("Are you sure?"))
        {
          event.preventDefault();
          location.href = '/contact-list';
        }       
      });
    }

    function clickToAbout(){
      window.location.href="/about";
    }

    function Start(): void
    {
        confirmDelete();
    }

    document.getElementById("btnToAboutMe").addEventListener("click", clickToAbout);
    window.addEventListener("load", Start);
})();