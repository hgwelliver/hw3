       <!-- script to run when ORDER button is clicked -->
       $("input[value='Order']").click(buttonClicked);

       <!-- script to run when a MONTH in the dropdown is clicked -->
       $("a").click(monthClicked);

       <!-- function to run when ORDER button is clicked -->
       function buttonClicked(){
           var notes = $.trim($("#notes").val());
           var quantitySelected = $('#quantity option:selected').text();
	   var toppingChecked = $('input[name="type"]:checked').val();

	   <!-- checks textarea for keywords "vegan" "Vegan" "VEGAN" -->
	   <!-- if found, user is alerted that cheesecakes contain dairy -->
           if(notes.indexOf("vegan") >= 0 || notes.indexOf("Vegan") >= 0 || notes.indexOf("VEGAN") >= 0){
                 alert("Our cheesecakes contain dairy!");
	   } 

	   <!-- executes the following when order button is clicked and above conditions do not pass -->
	   else{
               <!-- hides table, form, textarea, button -->
               $("table[id='table1']").hide();
	       $("form").hide();
               $("textarea").hide();
               $("input[value='Order']").hide();

               <!-- adds thank you message and order details -->
	       $("#lbl1").replaceWith("<h3>Thank you! Your order has been placed.<\h3>");
               $("#lbl2").replaceWith("<strong>Order Details:</strong>");
               $("#lbl3").replaceWith(quantitySelected);
               $("#lbl4").replaceWith(toppingChecked + " cheesecake(s)");
	       $("#lbl5").replaceWith("Notes: " + notes);
           }
       }

       <!-- function to run when a MONTH in the dropdown is clicked -->
       function monthClicked(){
           $(".dropdownButton:first-child").html($(this).text());
       }