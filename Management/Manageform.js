$( function() {
	//$('[]').tooltip();
	var actions = $("table td:last-child").html();
	// Append table with add row form on add new button click
    $(".add-new").click(function(){
        
		$(this).attr("disabled", "disabled");
		var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="name" id="name"></td>' +
            '<td><input type="text" class="form-control" name="department" id="department"></td>' +
            '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
			'<td>' + actions + '</td>' + // add fixed last cell values with add and delete button icons
        '</tr>';
    	$("table").append(row);		
		$("table tbody tr").eq(index + 1).find(".add").toggle();// add add icon
        
      
    });
	// Add row on add button click
	$(document).on("click", ".add", function(){
		var empty = false;
       
		var input = $(this).parents("tr").find('input[type="text"]');
       input.each(function(){
			if(!$(this).val()){
				$(this).addClass("error"); // show error if cell value is empty
				empty = true;
			} else{
                $(this).removeClass("error");
            }
		});
		$(this).parents("tr").find(".error").first().focus();
		if(!empty){
			input.each(function(){
				$(this).parent("td").html($(this).val());// add current cell value
			});			
			$(this).parents("tr").find(".add").toggle();
			$(".add-new").removeAttr("disabled");
		}		
    });

	// Delete row on delete button click
	$(document).on("click", ".delete", function(){
        $(this).parents("tr").remove(); // delete the table row
		$(".add-new").removeAttr("disabled");
    });
});