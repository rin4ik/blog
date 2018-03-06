@auth
<div class="leave-comment shadow-md">
    <!--leave comment-->
    <h4>Leave a reply</h4>


    <form class="form-horizontal contact-form" role="form" method="post" action="#">
        <div class="form-group">
            <div class="col-md-6">
                <input type="text" class="form-control" id="name" name="name" placeholder="Name">
            </div>
            <div class="col-md-6">
                <input type="email" class="form-control" id="email" name="email" placeholder="Email">
            </div>
        </div>

        <div class="form-group">
            <div class="col-md-12">
                <input type="text" class="form-control" id="subject" name="subject" placeholder="Website url">
            </div>
        </div>
        <div class="form-group">
            <div class="col-md-12">
                <textarea class="form-control" rows="6" name="message" placeholder="Write Massage"></textarea>
            </div>
        </div>
        <a href="#" class="btn send-btn">Post Comment</a>
    </form>
</div>
<!--end leave comment-->
@else
<div class="leave-comment shadow-md">
        <!--leave comment-->
        <h4 class="text-center">Please <a href="/login">sign in</a> to participate</h4>
        </div>
@endauth