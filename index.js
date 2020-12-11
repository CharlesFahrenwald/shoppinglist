$(function(){
 
        $('#js-shopping-list-form').submit(function(event) {
            //capturing input
        event.preventDefault();
        const listItem = $('.js-shopping-list-entry').val();
        //creating elements that we want to appear on screen
        $('#shopping-list-entry').val('');
       //var ul = document.createElement("shopping-list");
        $('.shopping-list').append(

             `<li>
             <span class="shopping-item">${listItem}</span>

             <div class="shopping-item-controls">

               <button class="shopping-item-toggle">

                 <span class="button-label">check</span>

               </button>

               <button class="shopping-item-delete">

                 <span class="button-label">delete</span>

               </button>

             </div>

           </li>`);
        }); 
       
           
        //var item_li = document.createElement("li");
        // step 1) Create an element (e.g. div, li, span, button)
       /* var spanToAdd = document.createElement("span");
        var divToAdd = document.createElement("div");
        var button_check = document.createElement("button");
        var button_delete = document.createElement("button");
        var spanButCheck = document.createElement("span");
        var spanButDel = document.createElement("span");    
        var form = document.createElement("form")    
        spanToAdd.classList.add("shopping-item");
        spanToAdd.classList.add("shopping-item shopping-item__checked");
        spanToAdd.textContent = userTextElement.val();

        divToAdd.classList.add("shopping-item-controls");

        button_check.add("shopping-item-toggle");
        button_delete.add("shopping-item-delete");

        spanButCheck.add("button-label");
        spanButCheck.textContent = "check"

        spanButDel.add("button-label");
        spanButDel.textContent = "delete"

        button_check.add(spanButCheck);    
        button_delete.add(spanButDel);    

        divToAdd.add(button_check);
        divToAdd.add(button_delete);    

        item_li.add(spanToAdd);
        item_li.add(divToAdd);*/

        //ul.add(item_li);
     $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        //alert("Clicked on li")
        //alert("you clicked the delete button");
        $(this).closest('li').remove();
    });
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

        //form.add(ul);
        });
   


// Step 2) adjusting the elements' fields (e.g. class, textContent)

        // step 3) attatch the elements to the appropriate parent element

    
        //alert("you pressed delete")
        /*$('shopping-list shopping-item').live('click',function(event){
            $(this).parent().remove();
        });*/

/*$("form").submit(event => {
    event.preventDefault();
    const userTextElement = $(event.currentTarget).find("shopping-list-entry");
    $(".js-display-user-text").text(`user text is:  ${userTextElement.val()}`);
    userTextElement.val("");
    $('ul').add("button")
  });*/









  /*$("form").submit(event => {
    //capturing input
    event.preventDefault();
    const userTextElement = $(event.currentTarget).find("#shopping-list-entry");
    //creating elements that we want to appear on screen
    var li = document.createElement("li");
    var div = document.createElement("div");
    var span = document.createElement("span");
    var button_delete = document.createElement("button");
    var button_check = document.createElement("button");
    //span.addClass("shopping-item");
    // Setting the span's text equal to the user input (what they want to add to the list)
    span.textContent = userTextElement.val();
    // Attatching the button elements that we created to the div
    div.append(button_check);
    div.append(button_delete);
    // Attatching the span to the list
    li.append(span);
    // Attatching the div to the list
    li.append(div);
    // Attatching the li to ul
    $("ul").append(li);*/
