@extends('admin.layouts.layout')
@section('content')
  <!-- =============================================== -->

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
            Менять категорию
          </h1>
        </section>
    
        <!-- Main content -->
        <section class="content">
    
          <!-- Default box -->
          <div class="box">
            <div class="box-header with-border">
              <h3 class="box-title">Меняем категорию</h3>
            </div>
            <div class="box-body">
              <form action="/admin/categories/{{$category->id}}" method="POST">
                {{ csrf_field() }} {{ method_field('PATCH') }}
              <div class="col-md-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">Название</label>
                  <input name="title" type="text" class="form-control" id="exampleInputEmail1" placeholder="" value="{{$category->title}}">
                </div>
              
            </div>
          </div>
            <!-- /.box-body -->
            <div class="box-footer">
              <b><a href="{{route('categories.index')}}">Назад</a></b>
              <button type="submit" class="btn btn-warning pull-right">Изменить</button>
         </div>
            <!-- /.box-footer-->
          </form>
          </div>
          <!-- /.box -->
    
        </section>
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->
      @endsection