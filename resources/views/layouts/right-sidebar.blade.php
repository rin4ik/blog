<div class="col-md-4" data-sticky_column>
    <div class="primary-sidebar">
            <aside class="widget border pos-padding shadow">
                    <h3 class="widget-title text-uppercase text-center">Categories</h3>
                    <ul >
                            @foreach($categories as $category)
                            <li style='text-transform:uppercase'>   <a style="text-decoration:none" href="{{route('category.show',$category->slug)}}">{{$category->title}}</a>
                            <span class="post-count pull-right">{{$category->posts->count()}}</li></span>
                            @endforeach
                         
                       </ul>
                </aside>
 
        <aside class="widget news-letter shadow " >
            <h3 class="widget-title text-uppercase text-center">Tags</h3>
                 <ul >
                        @foreach($tags as $tag)
                        
                         <a style="text-decoration:none; color:#383636" href="{{route('tag.show',$tag->slug)}}"><li class="form-control" style='text-transform:lowercase;margin-bottom:10px; ' >{{$tag->title}}</li></a>
                        @endforeach
                     
                   </ul>
      
         
            </aside>
        <aside class="widget shadow">
            <h3 class="widget-title text-uppercase text-center">Popular posts</h3>
@foreach($popular as $item)
            <div class="popular-post">


                <a href="{{route('post.show',$item)}}" class="popular-img"><img src="{{$item->getImage()}}" alt="">

                    <div class="p-overlay"></div>
                </a>

                <div class="p-content">
                    <a href="{{route('post.show',$item)}}" class="text-uppercase">{{$item->title}}</a>
                    <span class="p-date">{{$item->getDate()}}</span>

                </div>
            </div>
 @endforeach           
        </aside>
        <aside class="widget">
            <h3 class="widget-title text-uppercase text-center">Recomended posts</h3>

            <div id="widget-feature" class="owl-carousel">@foreach($featured as $item)
                <div class="item">
                    <div class="feature-content">
                        <img src="{{$item->getImage()}}" width="200px" height="150px" alt="">

                        <a href="{{route('post.show',$item)}}" class="overlay-text text-center">
                            <h5 class="text-uppercase">{{$item->title}}</h5>

                        </a>
                    </div>
                </div>
                @endforeach      
            </div>

        </aside>
        <aside class="widget pos-padding shadow">
            <h3 class="widget-title text-uppercase text-center">recent posts</h3>

            <div class="thumb-latest-posts">

                @foreach($recent as $item)
                <div class="media">
                    <div class="media-left">
                        <a href="{{route('post.show',$item)}}" class="popular-img"><img src="{{$item->getImage()}}" alt="">
                            <div class="p-overlay"></div>
                        </a>
                    </div>
                    <div class="p-content">
                        <a href="{{route('post.show',$item)}}" class="text-uppercase">{{$item->title}}</a>
                        <span class="p-date">{{$item->getDate()}}</span>
                    </div>
                </div>
                @endforeach
                
            </div>
           
        </aside>
     
    </div>
</div>