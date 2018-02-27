<div class="row "><!--blog next previous-->
    <div class="col-md-6 ">
        @if($post->hasPrevious())
        <div class="single-blog-box">
            <a href="{{route('post.show' ,$post->getPrevious())}}">
                <img src="{{$post->getPrevious()->getImage()}}" width="350px" height="200px;" alt="">

                <div class="overlay">

                    <div class="promo-text">
                        <p><i class=" pull-left fa fa-angle-left"></i></p>
                        <h5>{{$post->getPrevious()->title}}</h5>
                    </div>
                </div>


            </a>
        </div>
        @endif

    </div>
    <div class="col-md-6">
            @if($post->hasNext())
        <div class="single-blog-box">
            <a href="{{route('post.show' ,$post->getNext())}}">
                <img src="{{$post->getNext()->getImage()}}" width="350px" height="200px;" alt="">

                <div class="overlay">
                    <div class="promo-text">
                        <p><i class=" pull-right fa fa-angle-right"> </i></p>
                        <h5> {{$post->getNext()->title}}</h5>

                    </div>
                </div>
            </a>
        </div>
        @endif
    </div>
</div><!--blog next previous end-->