@extends('admin.layouts.layout')
@section('content')
<div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
            Добавить категорию
            <small>приятные слова..</small>
          </h1>
        </section>
    
        <!-- Main content -->
        <section class="content">
    
          <!-- Default box -->
          <div class="box">
              <form action="/admin/categories" method="post">
                {{csrf_field()}}
            <div class="box-header with-border">
              <h3 class="box-title">Добавляем категорию</h3>
               </div>
            <div class="box-body">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="exampleInputEmail1" >Название</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" placeholder="" name="title" >
                  <div class="form-group danger">
                        <p class="text-danger">{{ $errors->first('title','Необходимо заполнить это поле!') }}</p>
                  </div>
                </div>
            </div>
          </div>
            <!-- /.box-body -->
            <div class="box-footer">
              <a href="{{route('categories.index')}}">Назад</a>
              <button class="btn btn-success pull-right">Добавить</button>
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