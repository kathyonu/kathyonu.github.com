    // this file affects KathyOnuGithubCom/app/widgets/anagram/_form.html.haml
// this file affects KathyOnuGithubCom/app/widgets/sequence_created/_form.html.haml

$j(document).ready(
  function() {
    $j('form[0] > input#anagram_text').bind(
      'focusin',function(event) {
         if (this.value == 'Enter_Your_Data') {
           (this.value = '')
         }
         if (this.value == 'Please Enter Data Here') {
           (this.value = '')
           }
           else
           {
           (this.value = '')
           }
         }
      ).bind(
      'focusout',function(event) {
        if (this.value !== '') {
          var userentry = (this.value)
          var anagramtext = document.getElementById('anagram_text'); 
          anagramtext.form.onsubmit = function() { return false; }
          $j('p').removeClass('explain');
          $j('p').addClass('explains');
          var text = anagramtext.value.toString();
          $j('form[0] > input#sequence_text').val(text);
          var creation = anagramtext.value.toString();
          $j('form[0] > input#sequence_creation').val(creation);
          var complete = anagramtext.value.split('').sort().join('');
          $j('form[0] > input#sequence_complete').val(complete);
          var lexigrams = anagramtext.value.split('').sort().reverse().join('');
          $j('form[0] > input#sequence_lexigram').val(lexigrams);
          var singulars = lexigrams.split('').sort(); 
          var singular = $j.unique(singulars).reverse(); 
          $j('form[0] > input#sequence_singular').val(singular);
        }
        else
        {
          $j('form[0] > input#anagram_text').val("Please Enter Your Data");
        }
      })
    });
