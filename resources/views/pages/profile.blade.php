@extends('layout')
@section('content')
@if(auth()->id() == $user->id)
<div class="col-md-8 ">

                <div class="leave-comment mr0 shadow-md"><!--leave comment-->
                    @if(session('message'))
                    <div class="alert alert-success">
                    {{session('message')}}                        
                    </div>    
                    @endif
                    <h3 class="text-uppercase">My profile</h3>
                    <br>
                    <img src="{{$user->getImage()}}" alt="" width="100px" height="100px" style="margin:10px" >
                    <form class="form-horizontal contact-form" role="form"   action="/profile/{{$user->name}}" method="post"  enctype="multipart/form-data">
   {{csrf_field()}}
   
                        <div class="form-group">
                            <div class="col-md-12">
                                <input type="text" class="form-control" id="name" name="name"
                                       placeholder="Name" value="{{$user->name}}">
                                       @if($errors->has('name'))
                                       <div class="form-group danger">
                                        <p class="text-danger" style="margin-left:20px">{{ $errors->first('name') }}</p>
                                  </div>@endif
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-12">
                                <input type="email" class="form-control" id="email" name="email"
                                       placeholder="Email" value="{{$user->email}}">
                                       @if($errors->has('email'))
                                       <div class="form-group danger">
                                        <p class="text-danger" style="margin-left:20px">{{ $errors->first('email') }}</p>
                                  </div>@endif
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-12">
                                <input type="password" class="form-control" id="password" name="password"
                                       placeholder="password">
                                       @if($errors->has('password'))
                                       <div class="form-group danger">
                                        <p class="text-danger" style="margin-left:20px">{{ $errors->first('password') }}</p>
                                  </div>@endif
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-12">
                                <input type="file" class="form-control" id="avatar" name="avatar">	
                                @if($errors->has('avatar'))
                                <div class="form-group danger">
                                 <p class="text-danger" style="margin-left:20px">{{ $errors->first('avatar') }}</p>
                           </div>@endif
                            </div>
                        </div>
                        <button type="submit" name="submit" class="btn send-btn">Update</button>

                    </form>
                </div><!--end leave comment-->
            </div>
            @else
            <div class="col-md-8"><div class="row">
                    <div class="leave-comment mr0 shadow-md">
            <br> 
            <img  src="{{$user->getImage()}}" style="margin:10px" style="border-radius:50px" alt="" width="100px" height="100px" >
            
            <h3 class="text-uppercase text-center">
                   user activity
            </h3>
            @foreach($user->posts as $post)
                            <div class="post-content">
                                  
                                <header class="entry-header text-center text-uppercase">
                                    @if($post->hasCategory())
                                    <h6>
                                        <a href="{{route('category.show',$post->category->slug)}}"> {{$post->category->title}}</a>
                                    </h6>
                                    @else
                                    <h6>
                                            <a href="#">Нет категорий</a>
                                        </h6>
                                        @endif
                                    <h1 class="entry-title">
                                        <a href="{{$post->path()}}">{{$post->title}}</a>
                                    </h1>
                    
                    
                                </header>
                                <div class="entry-content">
                                    <p>{!! $post->description !!}
                                    </p>
                    
                                    <div class="btn-continue-reading text-center text-uppercase">
                                        <a href="{{$post->path()}}" class="more-link">Continue Reading</a>
                                    </div> <p style="color:#635757" class="pull-right">
                                            {{$post->created_at->diffForHumans()}}
                                    </p> 
                                </div>
                                
                            </div><hr>
            @endforeach
            </div></div></div>
            @endif
@endsection