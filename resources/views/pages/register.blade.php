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
                                <input type="text" class="form-control" id="name" name="name"
                                       placeholder="Name" value="{{old('name')}}">
                                       <div class="form-group danger">
                                        <p class="text-danger" style="margin-left:20px">{{ $errors->first('name') }}</p>
                                  </div>
                            </div>
                           
                        </div>
                        <div class="form-group">
                            <div class="col-md-12">
                                <input type="text" class="form-control" id="email" name="email"
                                       placeholder="Email" value="{{old('email')}}">
                                       <div class="form-group danger">
                                        <p class="text-danger" style="margin-left:20px">{{ $errors->first('email') }}</p>
                                  </div>
                            </div>
                           
                        </div>
                        <div class="form-group">
                            <div class="col-md-12">
                                <input type="password" class="form-control" id="password" name="password"
                                       placeholder="Password">
                                       <div class="form-group danger">
                                        <p class="text-danger" style="margin-left:20px">{{ $errors->first('password') }}</p>
                                  </div>
                            </div>
                           
                        </div>
                        <button type="submit" class="btn send-btn">Register</button>

                    </form>
                </div><!--end leave comment-->
            </div>
@endsection