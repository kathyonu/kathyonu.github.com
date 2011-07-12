class Anagram < ActiveRecord::Base
  attr_accessible :id, :anagram_text
  belongs_to :sequence_created

end
