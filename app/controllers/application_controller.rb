class ApplicationController < ActionController::Base
  protect_from_forgery

  def sequenceone(evt)
   @sequenceone = evt[:sequence_text].to_textual
   render :text
  end

end
