// resets the anagram and sequence_created forms

$(document).ready(
  function() {
    $('input#formReset').bind(
      'click',function(event) {
        $('#anagram form input#anagram_text').empty();
        $('#anagram form input#description').empty();
        $('#anagram form input#reference').empty();
        $('#sequence_created form input#sequence_text').empty();
        $('#sequence_created form input#sequence_creation').empty();
        $('#sequence_created form input#sequence_complete').empty();
        $('#sequence_created form input#sequence_lexigram').empty();
        $('#sequence_created form input#sequence_singular').empty();
      }
    )
  });
