$(document).ready(function() {
	var dep_data = [], nb_by_dep_data = [];
	$('#map').on('click', select);

	var xhr = $.getJSON("api/index.php", function(data){
		for (var i = 0; i < data.length; i++) {
			dep_data.push(data[i].dep);
			nb_by_dep_data.push(data[i].numdep);
			$('path[data-num="'+dep_data[i]+'"]').css('fill', '#64ef7b');
		}
	});

	function select(event) {
		var dep_event = $(event.target).attr('')
		var select = $(event.target).attr('data-select');
		if (select === true) {
			$(event.target).attr('data-select', 'false');
			if (true) {}
		}
		else {
			$(event.target).css('fill', '#f24f4f');
			var dep = $(event.target).attr('data-num');
			$(event.target).attr('data-select', 'true');
		}
	}

});