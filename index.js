$(function(){
    /*$('ul').on('click','li', function(event){
        alert("you clicked a list");

        /*$('li').on('click', 'shopping-item-delete', function(event){
            //this.closest('li').remove();
        });
    });*/
    $('li').on('click', '.shopping-item-delete', function(event){
        //alert("Clicked on li")
        //alert("you clicked the delete button");
        this.closest('li').remove();
    });
    $('li').on('click', '.shopping-item-toggle', function(event){
        $(this).toggleClass("shopping-item shopping-item__checked")
    });

        $("form").submit(event => {
            //capturing input
        event.preventDefault();
        const userTextElement = $(event.currentTarget).find("#shopping-list-entry");
        //creating elements that we want to appear on screen
        var Name;
        var ul = document.getElementsByClassName("shopping-list");
        var item_li = document.createElement("li");
        // step 1) Create an element (e.g. div, li, span, button)
        var spanToAdd = document.createElement("span");
        var divToAdd = document.createElement("div");
        var button_check = document.createElement("button");
        var button_delete = document.createElement("button");
        var spanButCheck = document.createElement("span");
        var spanButDel = document.createElement("span");    

        spanToAdd.classList.add("shopping-item");
        spanToAdd.classList.add("shopping-item shopping-item__checked");
        spanToAdd.textContent = userTextElement.val();

        divToAdd.classList.add("shopping-item-controls");

        button_check.setAttribute('className', "shopping-item-toggle");
        button_delete.setAttribute('className', "shopping-item-delete");

        spanButCheck.setAttribute('className', "button-label");
        spanButCheck.textContent = "check"

        spanButDel.setAttribute('className', "button-label");
        spanButDel.textContent = "delete"

        button_check.appendChild(spanButCheck);    
        button_delete.appendChild(spanButDel);    

        divToAdd.appendChild(button_check);
        divToAdd.appendChild(button_delete);    

        item_li.appendChild(spanToAdd);
        item_li.appendChild(divToAdd);

        ul[0].appendChild(item_li);
        // Step 2) adjusting the elements' fields (e.g. class, textContent)

        // step 3) attatch the elements to the appropriate parent element

    })
        //alert("you pressed delete")
        /*$('shopping-list shopping-item').live('click',function(event){
            $(this).parent().remove();
        });*/
});
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
