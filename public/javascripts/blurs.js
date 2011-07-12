// this js prevents the computed sequences from being changed by user
// this file is in use
// the call in application.html.erb is :
// <%= javascript_include_tag "blurs.js" %>

$j(document).ready(
  function() {
    $j('.formSequenceCreated input#sequence_text').bind({
      focusin: function(event) {
        $j('.formSequenceCreated input#sequence_text').blur();
      }
    });
  });
  
$j(document).ready(
  function() {
    $j('.formSequenceCreated input#sequence_creation').bind({
      focusin: function(event) {
        $j('.formSequenceCreated input#sequence_creation').blur();
      }
    });
  });
  
$j(document).ready(
  function() {
    $j('.formSequenceCreated input#sequence_complete').bind({
      focusin: function(event) {
        $j('.formSequenceCreated input#sequence_complete').blur();
      }
    });
  });
  
$j(document).ready(
  function() {
    $j('.formSequenceCreated input#sequence_lexigram').bind({
      focusin: function(event) {
        $j('.formSequenceCreated input#sequence_lexigram').blur();
      }
    });
  });
  
$j(document).ready(
  function() {
    $j('.formSequenceCreated input#sequence_singular').bind({
      focusin: function(event) {
        $j('.formSequenceCreated input#sequence_singular').blur();
      }
    });
  });
