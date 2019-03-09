// strike through effect of the done objects
$("#container ul").on("click" ,"li", function(){
    $(this).toggleClass("completed")
});

// Click to delete the todo list

$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove()
    })
    event.stopPropagation()
})


// Adding new todos using the input
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + todoText + "</li>")
	}
});

// Hiding the input area when the + is pressed
$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle(500)
})