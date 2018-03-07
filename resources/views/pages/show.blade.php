@extends('layout')
@section('content')
    
            <div class="col-md-8">
                @if(session('status'))
                    <div class="alert alert-success">
                        {{session('status')}}
                    </div>
                @endif
                <article class="post shadow-md">
                    <div class="post-thumb">
                        <a href="blog.html"><img src="{{$post->getImage()}}" alt=""></a>
                    </div>
                    <div class="post-content">
                        <header class="entry-header text-center text-uppercase">
                            <h6><a href="{{route('category.show',$post->category->slug)}}"> {{$post->category->title}}</a></h6>

                            <h1 class="entry-title">{{$post->title}}</h1>


                        </header>
                        <div class="entry-content">
                           {!!$post->content!!}
                        </div>
                        <div class="tagsM">
                            @foreach($post->tags as $tag)
                            <a href="{{route('tag.show',$tag->slug)}}" >{{$tag->title}}</a>
                            <span class="glyphicon glyphicon-tags" style="margin-right:15px; color:#615b5b">  
                            </span>

                           @endforeach
                        </div>

                       
                       
 @include('layouts._share')
                    </div>
                </article>
              @if($post->owner->status)
                <div class="top-comment shadow-md"><!--top comment-->
                   <div class="row">
                        <img src="{{$post->owner->getImage()}}" class="pull-left" alt="" width="120px" height="100px">
                        <h4>{{$post->owner->name}}</h4>
    
                        <p>{{$post->owner->status}}</p>
                    
                   </div>
                </div><!--top comment end-->@endif
             @include('layouts.nextPrev')
             @include('layouts._carousel')<!--related post carousel-->
             @if(!$post->comments->isEmpty())   
           
                    @foreach($post->getComments() as $comment)
                    <!--bottom comment-->
                    <div class="bottom-comment  shadow-md"> 
                        
                    <div class="comment-img">
                        <img class="img-circle" src="{{$comment->author->getImage()}}"  width="75px" height="75px" alt="">
                    </div>

                    <div class="comment-text">
                        <h5>{{$comment->author->name}}</h5>

                        <p class="comment-date">
                            {{$comment->created_at->diffForHumans()}}
                        </p>


                        <p class="para">{{$comment->text}}</p>
                    </div> </div>
                    @endforeach
               @endif
                <!-- end bottom comment--> @include('layouts._form')

  </div>
           
  
@endsection
