//check specific todos by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
//click on X to delete todos
$("ul").on("click","span",function(event)
{
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
//inputing new todos
$("input[type='text']").keypress(function(event){
	if(event.which==13){
//grabbing new todo		
	var todotext=$(this).val();
//clear input column
$(this).val(" ");
//create a new li and add to ul
$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todotext +"</li>");	
}
});
//query for + icon
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(200);
})