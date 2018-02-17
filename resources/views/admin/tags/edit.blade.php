@extends('admin.layouts.layout')
@section('content')

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Менять тег
      </h1>
    </section>

    <!-- Main content -->
    <section class="content">

      <!-- Default box -->
      <div class="box">
       <form action="/admin/tags/{{$tag->id}}" method="POST">
        {{ csrf_field() }} {{ method_field('PATCH') }}
        <div class="box-header with-border">
          <h3 class="box-title">Меняем тег</h3>
        </div>
        <div class="box-body">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Название</label>
              <input type="text" name="title" class="form-control" id="exampleInputEmail1" placeholder="" value="{{$tag->title}}">
            </div>
        </div>
      </div>
        <!-- /.box-body -->
        <div class="box-footer">
          <b><a href="/admin/tags">Назад</a></b>
          <button class="btn btn-warning pull-right">Изменить</button></div>
    </form>


    <!-- /.box-footer-->
      </div>
      <!-- /.box -->

    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
      @endsection