// Check off specific Todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on x to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Append a task into the Todo list
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// Grab new todo text from input
		let todoText = $(this).val();
		$(this).val("");
		// Create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
})