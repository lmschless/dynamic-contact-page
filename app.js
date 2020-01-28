$(document).ready(function() {
	$('#formOne').submit(function() {
		// Old way I used to grab form fields.
		// let employeeName = $('#employee-name').val();
		// $('#test').append(`<td>${employeeName}</td>`);

		// let title = $('#title').val();
		// $('#test').append(`<td>${title}</td>`);

		// let manager = $('#manager').val();
		// $('#test').append(`<td>${manager}</td>`);

		// let address = $('#address').val();
		// $('#test').append(`<td>${address}</td>`);

		// let number = $('#number').val();
		// $('#test').append(`<td>${number}</td>`);

		const contacts = [
			$('#employee-name').val(),
			$('#title').val(),
			$('#manager').val(),
			$('#address').val(),
			$('#number').val()
		];

		createTable = () => {
			//i = 1;

			// This line adds a new table row every time submit is clicked.
			$('tbody').append(`<tr><th scope="row"></th></tr>`);

			// for each or for of loop?
			// contacts, function(index, value)
			// $('tbody').append(`<tr><td>${value}</td></tr>`);

			for (let item of contacts) {
				$('#maybe').append(`<td>${item}</td>`);
			}
			//i++;
		};
		createTable();
		console.log(contacts);
		event.preventDefault();
		$('#formOne').trigger('reset');
	});
});
