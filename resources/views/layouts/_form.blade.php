@auth
<div class="leave-comment shadow-md">
    <!--leave comment-->
    <h4>Leave a reply</h4>


    <form class="form-horizontal contact-form" role="form" method="post" action="/comment">
{{csrf_field()}}
<input type="hidden" name="post_id" value="{{$post->id}}">
        <div class="form-group">
            <div class="col-md-12">
                <textarea class="form-control" rows="6" name="message" placeholder="Write Massage"></textarea>
            </div>
        </div>
       <button class="btn send-btn">Post comment</button>
    </form>
</div>
<!--end leave comment-->
@else
<div class="leave-comment shadow-md">
        <!--leave comment-->
        <h4 class="text-center">Please <a href="/login">sign in</a> to participate</h4>
        </div>
@endauth