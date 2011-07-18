KathyonuGithubCom::Application.routes.draw do

  resources :sequences

  resources :quotes

  resources :anagrams

  resources :sequence_createds

  get "sequencer/display"
  
  #root :to => "dashboard#index"

end
