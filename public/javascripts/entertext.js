$j(document).ready(
  function() {
    $j('#anagram form input#anagram_text').bind({
      focusin: function(event) {
        $j('#anagram form input#anagram_text').css('backgroundColor', 'white'),
        $j('.sequenceCreatedWidgetDisplay').show(),
        $j('.formSequenceCreated input#sequence_text').css('backgroundColor', 'white'),
        $j('.formSequenceCreated input#sequence_creation').css('backgroundColor', 'white'),
        $j('.formSequenceCreated input#sequence_complete').css('backgroundColor', 'white'),
        $j('.formSequenceCreated input#sequence_lexigram').css('backgroundColor', 'white'),
        $j('.formSequenceCreated input#sequence_singular').css('backgroundColor', 'white');
      }
    });
  }
);

$j(document).ready(
  function() {
    $j('#anagram form input#anagram_text').bind({
      focusout: function(event) {
        $j('#anagram form input#anagram_text').css('backgroundColor', 'pink'),
        $j('.formSequenceCreated input#sequence_text').css('backgroundColor', 'pink'),
        $j('.formSequenceCreated input#sequence_creation').css('backgroundColor', 'pink'),
        $j('.formSequenceCreated input#sequence_complete').css('backgroundColor', 'pink'),
        $j('.formSequenceCreated input#sequence_lexigram').css('backgroundColor', 'pink'),
        $j('.formSequenceCreated input#sequence_singular').css('backgroundColor', 'pink');
      }
    });
  }
);