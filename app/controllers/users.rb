get '/users/new' do
  erb :'/users/new'
end

post '/users' do
  @user = User.new(username: params[:username], email: params[:email], password: params[:password])
  if @user.save
    redirect '/'
  else
    #error handling goes here
    @errors = "Your username or email are already used."
    erb :'/users/new'
  end
end
