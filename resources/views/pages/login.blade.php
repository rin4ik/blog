@extends('layout')
@section('content')
            <div class="col-md-8">
    
                    <div class="leave-comment mr0"><!--leave comment-->
                        @if(session('status'))
                        <div class="alert alert-danger">
                        {{session('status')}}                        
                        </div>    
                        @endif
                        <h3 class="text-uppercase">Login</h3>
                        <br>
  
                        <form class="form-horizontal contact-form" role="form" method="post" action="/login">
                            {{csrf_field()}}
                            <div class="form-group">
                                <div class="col-md-12">
                                        <label for="email">Email:</label>
                                    <input type="text" class="form-control" id="email" name="email"
                                         >
                                           @if($errors->has('email'))
                                           <div class="form-group danger">
                                            <p class="text-danger" style="margin-left:20px">{{ $errors->first('email') }}</p>
                                      </div>@endif
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-12">
                                        <label for="password">Password:</label>
                                    <input type="password" class="form-control" id="password" name="password"
                                           >
                                           @if($errors->has('password'))
                                           <div class="form-group danger">
                                            <p class="text-danger" style="margin-left:20px">{{ $errors->first('password') }}</p>
                                      </div>@endif
                                </div>
                            </div>
                            <button type="submit" name="submit" class="btn send-btn">Login</button>
    
                        </form>
                    </div><!--end leave comment-->
                </div>
@endsection