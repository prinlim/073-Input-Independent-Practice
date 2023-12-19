 $("img").hide();
$("button").click(function() {
    var foodOne = $(".favFood").val();
    $("img").show();
    var foodTwo = $(".favDessert").val();
    var foodThree = $(".favSnack").val();
	$(".vote-result").text("Food Vote: " +foodOne);
    $(".vote-result-dessert").text("Dessert Vote: " +foodTwo);
    $(".vote-result-snack").text("Snack Vote: " +foodThree);

       alert("Thank you for voting!");
    
    
});