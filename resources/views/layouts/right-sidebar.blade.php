<div class="col-md-4" data-sticky_column>
    <div class="primary-sidebar">
            <div class="panel panel-default shadow-md">
                   
                    <h3 class=" widget-title text-uppercase text-center" style="margin:20px">Категории</h3>
                   <ul  class="list-group">
                        @foreach($categories as $category)
                        <li  class="list-group-item" style='text-transform:uppercase'>   <a style="text-decoration:none" href="{{route('category.show',$category->slug)}}">{{$category->title}}</a></li>
                        @endforeach
                     
                   </ul>
             </div>
        <aside class="widget news-letter shadow " >
            <h3 class="widget-title text-uppercase text-center">Теги</h3>
                 <ul >
                        @foreach($tags as $tag)
                         <a style="text-decoration:none; color:#383636" href="{{route('tag.show',$tag->slug)}}"><li  style='text-transform:lowercase;margin-bottom:10px; ' >{{$tag->title}}<span class="glyphicon glyphicon-tag" style="margin-right:10px; color:#615b5b"></li></a>
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
        <aside class="widget border pos-padding shadow">
            <h3 class="widget-title text-uppercase text-center">Categories</h3>
            <ul>
                <li>
                    <a href="#">Food & Drinks</a>
                    <span class="post-count pull-right"> (2)</span>
                </li>
                <li>
                    <a href="#">Travel</a>
                    <span class="post-count pull-right"> (2)</span>
                </li>
                <li>
                    <a href="#">Business</a>
                    <span class="post-count pull-right"> (2)</span>
                </li>
                <li>
                    <a href="#">Story</a>
                    <span class="post-count pull-right"> (2)</span>
                </li>
                <li>
                    <a href="#">DIY & Tips</a>
                    <span class="post-count pull-right"> (2)</span>
                </li>
                <li>
                    <a href="#">Lifestyle</a>
                    <span class="post-count pull-right"> (2)</span>
                </li>
            </ul>
        </aside>
    </div>
</div>