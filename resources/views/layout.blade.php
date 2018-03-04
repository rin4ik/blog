<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- favicon icon -->

    <title>Blog</title>

    <!-- common css -->
  <link rel="stylesheet" href="{{asset('css/front.css')}}">

    <!-- HTML5 shim and Respond.js IE9 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="js/html5shiv.js"></script> 
    <script src="js/respond.js"></script>
    <![endif]-->

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="{{asset('images/favicon.png')}}">
<style>
  
</style>
</head>

<body>
@include('layouts.nav') <div id="app">
<div class="main-content">
  <div class="container">
        @yield('content')
      
        <flash message="{{session('flash')}}"></flash>
        
        @include('layouts.right-sidebar')
      </div>
  </div>
</div>

</div>
  
@include('layouts.footer')
<!-- js files -->
<script src="{{asset('js/front.js')}}"></script>
{{--  <script src="{{asset('js/app.js')}}"></script>  --}}

</body>
</html>