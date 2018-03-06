<div class="social-share">
        <span class="social-share-title pull-left ">by
            <a href="{{route('profile',$post->owner->name)}}">{{$post->owner->name}}</a> on
            <span style="color:orange"> {{$post->getDate()}}</span>
        </span>
        <ul class="text-center pull-right">
            <li>
                <a class="s-facebook" href="#">
                    <i class="fa fa-facebook"></i>
                </a>
            </li>
            <li>
                <a class="s-twitter" href="#">
                    <i class="fa fa-twitter"></i>
                </a>
            </li>
            <li>
                <a class="s-google-plus" href="#">
                    <i class="fa fa-google-plus"></i>
                </a>
            </li>
            <li>
                <a class="s-linkedin" href="#">
                    <i class="fa fa-linkedin"></i>
                </a>
            </li>
            <li>
                <a class="s-instagram" href="#">
                    <i class="fa fa-instagram"></i>
                </a>
            </li>
        </ul>
    </div>