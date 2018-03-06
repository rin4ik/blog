@extends('layout') @section('content')

<!--main content start-->
<div class="col-md-8">
    @foreach($posts as $post)
 
    <article class="post shadow-md">

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
                </div>
            </div>
            
            @include('layouts._share')
        </div>
    </article>
    @endforeach {{$posts->links()}}
</div>
<!-- end main content-->
@endsection