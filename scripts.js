$(document).ready(function() {
	var key = 0;
	var todos = [];	

	$("#newTodo").click(function() {
		var info = $("#todoinp").val();

		todos.push("<div class='todo' editing='false' key=" + key + "><p>" + (key+1) + ": " + info + "</p></div>");
		key++;
		$(".content").html(todos);

		$("#todoinp").val("");
	});

	$("#deleteAll").click(function() {
		todos = [];
		$(".content").html(todos);
		key = 0;
	});

	// To get the edit functionality, might have to check out this stack overflow: http://stackoverflow.com/questions/15435564/click-not-fired-for-p-tag-within-jquery-dialog
	$(document).on("click", ".todo", function() {
		// Can use getAttribute (raw js) or .attr for jquery
		var oneKey = parseInt($(this).attr("key"));
		var status = $(this).attr("editing");

		if (status == "false") {
			var info = $(this).text().split(" ")[1];
			todos[oneKey] = "<div class='todo' editing='true' key=" + oneKey + "><input class='edit' id='inp" + oneKey + "' type='text' value='" + info + "' /></div>";
		} else {
			var info = $("#inp" + oneKey).val();
			todos[oneKey] = "<div class='todo' editing='false' key=" + oneKey + "><p>" + (oneKey+1) + ": " + info + "</p></div>";	
		}

		$(".content").html(todos);
		if (status == "false") {
			$("#inp" + oneKey).focus();
		}
	})
});