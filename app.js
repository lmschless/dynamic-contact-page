$(document).ready(function() {
	$('#formOne').submit(function() {
		$('#employee-name').val().append('#test');

		// below is future use to store contacts in an iterable list
		// const employeeNames = [];
		// const employeeNumbers = [];
		// const employeeTitles = [];
		// const employeeName = $('#person1').map(function() {
		// 	return $(this).val();
		// });

		// employeeInfo.push(employeeName);

		// $('.person2').append('blah blah');
		// $('.animal').append('blah blah');
		// $('.exclamation').append('blah blah');
		// $('.verb').append('blah blah');
		// $('.noun').append('blah blah');
		event.preventDefault();
		$('#formOne').trigger('reset');
	});
});
