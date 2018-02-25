@extends('layout')
@section('content')

<!--main content start-->
            <div class="col-md-8 ">
                @foreach($posts as $post)
                <div class="post-thumb shadow-md">
                    <a href=""><img src="{{$post->getImage()}}" alt=""></a>    

                    <a href="{{$post->path()}}" class="post-thumb-overlay text-center">
                        <div class="text-uppercase text-center">View Post</div>
                    </a>
                </div>
                <article class="post shadow-md">
                 
                    <div class="post-content">
                        <header class="entry-header text-center text-uppercase">
                            <h6><a href="#"> {{$post->category->title}}</a></h6>

                            <h1 class="entry-title"><a href="{{$post->path()}}">{{$post->title}}</a></h1>


                        </header>
                        <div class="entry-content">
                            <p>{!! $post->description !!}
                            </p>

                            <div class="btn-continue-reading text-center text-uppercase">
                                <a href="{{$post->path()}}" class="more-link">Continue Reading</a>
                            </div>
                        </div>
                        <div class="social-share">
                            <span class="social-share-title pull-left ">by <a href="#">{{$post->owner->name}}</a> on <span style="color:orange">  {{$post->getDate()}}</span></span>
                            <ul class="text-center pull-right">
                                <li><a class="s-facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="s-twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="s-google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a class="s-linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a class="s-instagram" href="#"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </article>
@endforeach
                {{$posts->links()}}
            </div>
<!-- end main content-->
@endsection