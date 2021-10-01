$(document).ready(function() {
  $('#seeAnotherFieldGroup').on('change.states', function() {

    $("#monthly_income").toggle($(this).val() == 'monthly')
    $("#Daily_Income").toggle($(this).val() == 'daily')

  
  }).trigger('change.states');
});