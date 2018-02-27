<div class="related-post-carousel shadow-md"><!--related post carousel-->
    <div class="related-heading">
        <h4>You might also like</h4>
    </div>
    <div class="items">
        
        @foreach($post->related() as $item) 

        <div class="single-item">
            <a href="{{route('post.show',$item)}}" >
                <img src="{{$item->getImage()}}" width="215px" height="100px" alt="">
                <p>{{$item->title}}</p>
            </a>
            </div>
          @endforeach
    </div>
    
</div><!--related post carousel-->