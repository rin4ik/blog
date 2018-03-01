@extends('layout')
@section('content')

            <div class="col-md-8">
                <article class="post shadow-md">
                    <div class="post-thumb">
                        <a href="blog.html"><img src="{{$post->getImage()}}" alt=""></a>
                    </div>
                    <div class="post-content">
                        <header class="entry-header text-center text-uppercase">
                            <h6><a href="{{route('category.show',$post->category->slug)}}"> {{$post->category->title}}</a></h6>

                            <h1 class="entry-title"><a href="blog.html">{{$post->title}}</a></h1>


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
                <div class="top-comment shadow-md"><!--top comment-->
                    <img src="{{asset('images/comment.jp')}}g" class="pull-left img-circle" alt="">
                    <h4>Rubel Miah</h4>

                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy hello ro mod tempor
                        invidunt ut labore et dolore magna aliquyam erat.</p>
                </div><!--top comment end-->
             @include('layouts.nextPrev')
             @include('layouts._carousel')<!--related post carousel-->
                <div class="bottom-comment  shadow-md"><!--bottom comment-->
                    <h4>3 comments</h4>
                    
                    <div class="comment-img">
                        <img class="img-circle" src="{{asset('images/comment-im')}}g.jpg" alt="">
                    </div>

                    <div class="comment-text">
                        <a href="#" class="replay btn pull-right"> Replay</a>
                        <h5>Rubel Miah</h5>

                        <p class="comment-date">
                            December, 02, 2015 at 5:57 PM
                        </p>


                        <p class="para">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et cusam et justo duo dolores et ea rebum.</p>
                    </div>
                </div>
                <!-- end bottom comment-->

            @include('layouts._form')
@endsection
