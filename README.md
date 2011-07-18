## Welcome to kathyonu's page at github.com.
* http://kathyonu.github.com/



# Getting Started : 20110712
### Visit : 
[kathyonu](http://kathyonu.github.com/ "Sequencers")
### See what you see.

## We are writing this app using the Snow Leopard iMac with : 
### [ruby](http://rubyforge.org/ "Ruby 1.9.2p0 2010-08-18 revision 29036 [x86_64-darwin10]")
### [rails](http://rubyforge.org/projects/rails/ "Rails 3.0.5")
### [apotomo](http://apotomo.de/ "Apotomo 1.1.1")
### [cells](http://cells.rubyforge.org/ "Cells 3.5.6")
### [sqlite3](http://www.sqlite.org/quickstart.html "SQLite")
The app uses sqlite3 for the database, so you have no setup to do there.
### [mysql2](http://rubygems.org/gems/mysql2 "mysql2")
Our in-house app will be using mysql2 in production.
### [jQuery](http://jquery.com/ "jQuery")

### sequencers
> The sequencer methods are what this app is being built for, to sequence any creation in English.
>
> Just as the sequencing of the dna displays its specific characteristics, 
> the sequencing of the words, names, phrase, creates their unique letterings sequences.
> And, those sequences are what we are after in this application.
>
> *apotomoing_sequencers* is built on five sequencing methods.
> we have identified quite a few other "sequencings" that can be generated, however none are germane to our work.
> after *apotomoing_sequencers* is built and tested and humming along, we will add those sequencer methods, just for fun.

## What are the five sequences we generate ? 

If we use, *peace on earth good will all*, as the created phrase, then its sequences will be :

1. sequence_created  : peace on earth good will all
2. sequence_creation : peaceonearthgoodwillall
3. sequence_complete : aaacdeeeghillllnoooprtw
4. sequence_lexigram : acdeeghillnooprtw
5. sequence_singular : acdeghilnoprtw

The application will prove useful to anyone who loves and works with words and has need to find or verify the sequences that creates any name word or phrase. 
Those search methods will be added after we have the application fully working.

### Other sequencers we can add include :

* sequence_reversed - abcdef => fedcba
* sequence_randomized - abcdef => dfbaec
* sequence_center_randomized - abcdef => aecbdf
* sequence_palindrome - "doctor roctod".palindrome?
* anagrams, full or partial
* perfect anagrams - meanings wise, these are a leap beyond the full anagrams offered at wordsmith.org and other anagram generators.
> An anagrams generator is available now at [Wordsmith AnagramGenerator](http://www.wordsmith.org/ "Wordsmith.org AnagramGenerator")

> #### This application is Copyright Will I Am at goodworksonearth.org, held in trust.
> #### You are free to use this application, and make changes to it for your own use, provided this copyright notice remains intact.  
> #### kathyonu is my pen name, a Perfect Anagram of THANK YOU.
> #### Ruby, Ruby on Rails, Apotomo and Cells are all registered to their owners, their copyrights protected.
> #### A good place to begin learning Apotomo and Cells [Peter's Guide](http://apotomo.de/peters-guide-1.1/introduction.html "Peter's Guide")