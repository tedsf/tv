get '/sessions/new' do
  erb :'sessions/new'
end

post '/sessions' do
  @user = User.find_by(email: params[:email])

  if @user && @user.authenticate(params[:password])
    session[:id] = @user.id
    redirect '/'
  else
    @error = "Your password or email was incorrect"
    erb :'/sessions/new'
  end
end

get '/sessions/delete' do
  session[:id] = nil
  current_user = nil
  redirect '/'
end
