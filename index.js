$(function(){
    $('shopping-list').on('click', '.shopping-item-delete', function(event){
        //alert("Clicked on li")
        //alert("you clicked the delete button");
        $(this).closest('li').remove();
    });
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
        $(this).closest('li').find('.shoping-item').toggleClass("shopping-item__checked")
    });

        $("#js-shopping-list-form").submit(event => {
            //capturing input
        event.preventDefault();
        const listItem = $('.js-shopping-list-entry').val();
        //creating elements that we want to appear on screen
        
        var ul = document.createElement("shopping-list");
        var item_li = document.createElement("li");
        // step 1) Create an element (e.g. div, li, span, button)
        var spanToAdd = document.createElement("span");
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
        item_li.add(divToAdd);

        ul.add(item_li);
        
        form.add(ul);
        });
    });
