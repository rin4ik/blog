
<nav class="navbar main-menu navbar-default shadow">
    <div class="" >
        <div class="menu-content">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/"><img src="{{asset('images/logo.png')}}" alt="" width="120" height="120" style="margin-top:-40px; "></a>
            </div>


            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                <ul class="nav navbar-nav text-uppercase">
                    <li><a href="#">Homepage</a></li>
                    <li><a href="about-me.html">ABOUT ME </a></li>
                    <li><a href="contact.html">CONTACT</a></li>
                </ul>

                <ul class="nav navbar-nav text-uppercase pull-right">
                    <li><a href="#">Register</a></li>
                    <li><a href="about-me.html">Login</a></li>
                    <li><a href="contact.html">My profile</a></li>
                </ul>

            </div>
            <!-- /.navbar-collapse -->


            <div class="show-search">
                <form role="search" method="get" id="searchform" action="#">
                    <div>
                        <input type="text" placeholder="Search and hit enter..." name="s" id="s">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- /.container-fluid -->
</nav>