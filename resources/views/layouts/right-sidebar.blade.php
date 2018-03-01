<div class="col-md-4" data-sticky_column>
    <div class="primary-sidebar">
            <aside class="widget border pos-padding shadow">
                    <h3 class="widget-title text-uppercase text-center">Категории</h3>
                    <ul >
                            @foreach($categories as $category)
                            <li style='text-transform:uppercase'>   <a style="text-decoration:none" href="{{route('category.show',$category->slug)}}">{{$category->title}}</a></li>
                            @endforeach
                         
                       </ul>
                </aside>
 
        <aside class="widget news-letter shadow " >
            <h3 class="widget-title text-uppercase text-center">Теги</h3>
                 <ul >
                        @foreach($tags as $tag)
                        
                         <a style="text-decoration:none; color:#383636" href="{{route('tag.show',$tag->slug)}}"><li class="form-control" style='text-transform:lowercase;margin-bottom:10px; ' >{{$tag->title}}</li></a>
                        @endforeach
                     
                   </ul>
      
         
            </aside>
        <aside class="widget shadow">
            <h3 class="widget-title text-uppercase text-center">Popular Posts</h3>

            <div class="popular-post">


                <a href="#" class="popular-img"><img src="{{asset('images/p1.jpg')}}" alt="">

                    <div class="p-overlay"></div>
                </a>

                <div class="p-content">
                    <a href="#" class="text-uppercase">Home is peaceful Place</a>
                    <span class="p-date">February 15, 2016</span>

                </div>
            </div>
            <div class="popular-post">

                <a href="#" class="popular-img shadow"><img src="{{asset('images/p1.jpg')}}" alt="">

                    <div class="p-overlay"></div>
                </a>

                <div class="p-content">
                    <a href="#" class="text-uppercase">Home is peaceful Place</a>
                    <span class="p-date">February 15, 2016</span>
                </div>
            </div>
            <div class="popular-post">


                <a href="#" class="popular-img"><img src="{{asset('images/p1.jpg')}}" alt="">

                    <div class="p-overlay"></div>
                </a>

                <div class="p-content">
                    <a href="#" class="text-uppercase">Home is peaceful Place</a>
                    <span class="p-date">February 15, 2016</span>
                </div>
            </div>
        </aside>
        <aside class="widget  shadow">
            <h3 class="widget-title text-uppercase text-center">Featured Posts</h3>

            <div id="widget-feature" class="owl-carousel">
                <div class="item">
                    <div class="feature-content">
                        <img src="{{asset('images/p1.jpg')}}" alt="">

                        <a href="#" class="overlay-text text-center">
                            <h5 class="text-uppercase">Home is peaceful</h5>

                            <p>Lorem ipsum dolor sit ametsetetur sadipscing elitr, sed </p>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="feature-content">
                        <img src="{{asset('images/p2.jpg')}}" alt="">

                        <a href="#" class="overlay-text text-center">
                            <h5 class="text-uppercase">Home is peaceful</h5>

                            <p>Lorem ipsum dolor sit ametsetetur sadipscing elitr, sed </p>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="feature-content">
                        <img src="{{asset('images/p3.jpg')}}" alt="">

                        <a href="#" class="overlay-text text-center">
                            <h5 class="text-uppercase">Home is peaceful</h5>

                            <p>Lorem ipsum dolor sit ametsetetur sadipscing elitr, sed </p>
                        </a>
                    </div>
                </div>
            </div>
        </aside>
        <aside class="widget pos-padding shadow">
            <h3 class="widget-title text-uppercase text-center">Recent Posts</h3>

            <div class="thumb-latest-posts">


                <div class="media">
                    <div class="media-left">
                        <a href="#" class="popular-img"><img src="{{asset('images/r-p.jp')}}g" alt="">
                            <div class="p-overlay"></div>
                        </a>
                    </div>
                    <div class="p-content">
                        <a href="#" class="text-uppercase">Home is peaceful Place</a>
                        <span class="p-date">February 15, 2016</span>
                    </div>
                </div>
            </div>
            <div class="thumb-latest-posts">


                <div class="media">
                    <div class="media-left">
                        <a href="#" class="popular-img"><img src="{{asset('images/r-p.jp')}}g" alt="">
                            <div class="p-overlay"></div>
                        </a>
                    </div>
                    <div class="p-content">
                        <a href="#" class="text-uppercase">Home is peaceful Place</a>
                        <span class="p-date">February 15, 2016</span>
                    </div>
                </div>
            </div>
            <div class="thumb-latest-posts">


                <div class="media">
                    <div class="media-left">
                        <a href="#" class="popular-img"><img src="{{asset('images/r-p.jp')}}g" alt="">
                            <div class="p-overlay"></div>
                        </a>
                    </div>
                    <div class="p-content">
                        <a href="#" class="text-uppercase">Home is peaceful Place</a>
                        <span class="p-date">February 15, 2016</span>
                    </div>
                </div>
            </div>
            <div class="thumb-latest-posts">


                <div class="media">
                    <div class="media-left">
                        <a href="#" class="popular-img"><img src="{{asset('images/r-p.jp')}}g" alt="">
                            <div class="p-overlay"></div>
                        </a>
                    </div>
                    <div class="p-content">
                        <a href="#" class="text-uppercase">Home is peaceful Place</a>
                        <span class="p-date">February 15, 2016</span>
                    </div>
                </div>
            </div>
        </aside>
     
    </div>
</div>