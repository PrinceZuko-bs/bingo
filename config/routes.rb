Rails.application.routes.draw do
  get 'board/index'
  
  root 'board#index'
end
