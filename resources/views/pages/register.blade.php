@extends('layout')
@section('content')

<!--main content start-->

            <div class="col-md-8">

                <div class="leave-comment mr0"><!--leave comment-->
                    
                    <h3 class="text-uppercase">Register</h3>
                    <br>
                    <form class="form-horizontal contact-form" role="form" method="post" action="/register">
                        {{csrf_field()}}
                        <div class="form-group">
                            <div class="col-md-12">
                                <label for="name"> Name:</label>
                                <input type="text" class="form-control" id="name" name="name"
                                        value="{{old('name')}}">
                                       @if($errors->has('name'))
                                       <div class="form-group danger">
                                        <p class="text-danger" style="margin-left:20px"
                                        value="{{ old('name') }}" 
                                        >{{ $errors->first('name') }}</p>
                                      
                                        </div>  
                                        @endif
                            </div>
                           
                        </div>
                        <div class="form-group">
                            <div class="col-md-12">
                                    <label for="email">Email:</label>
                                <input type="text" class="form-control" id="email" name="email"
                                       value="{{old('email')}}">
                                       @if($errors->has('email'))
                                       <div class="form-group danger">
                                        <p class="text-danger" style="margin-left:20px"
                                        value="{{ old('email') }}" 
                                        >{{ $errors->first('email') }}</p>
                                  </div>
                                  @endif
                            </div>
                           
                        </div>
                        <div class="form-group">
                            <div class="col-md-12">
                                    <label for="email">Password:</label>
                                    
                                <input type="password" class="form-control" id="password" name="password"
                                       >
                                       @if($errors->has('password')) 
                                       <div class="form-group danger">
                                        <p class="text-danger" style="margin-left:20px">{{ $errors->first('password') }}</p>
                                      
                                  </div>  @endif
                            </div>
                           
                        </div>
                        <button type="submit" class="btn send-btn">Register</button>

                    </form>
                </div><!--end leave comment-->
            </div>
@endsection