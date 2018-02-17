@extends('admin.layouts.layout')
@section('content')
 <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          Добавить пользователя
          <small>приятные слова..</small>
        </h1>
      </section>
  
      <!-- Main content -->
      <section class="content">
  
        <!-- Default box -->
        <div class="box">
          <form action="/admin/users" method="POST"  enctype="multipart/form-data" >
            {{csrf_field()}}
          <div class="box-header with-border">
            <h3 class="box-title">Добавляем пользователя</h3>
          </div>
          <div class="box-body">
            <div class="col-md-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Имя</label>
                <input name="name" type="text" class="form-control" id="exampleInputEmail1" placeholder="" value="{{old('name')}}">
                <div class="form-group danger">
                    <p class="text-danger">{{ $errors->first('name') }}</p>
              </div>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">E-mail</label>
                <input type="text" name="email" class="form-control" id="exampleInputEmail1" placeholder="" value="{{old('email')}}">
                <div class="form-group danger">
                    <p class="text-danger">{{ $errors->first('email') }}</p>
              </div>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Пароль</label>
                <input type="password" name="password"  class="form-control" id="exampleInputEmail1" placeholder="">
                <div class="form-group danger">
                    <p class="text-danger">{{ $errors->first('password') }}</p>
              </div>
              </div>
              <div class="form-group">
                <label for="exampleInputFile">Аватар</label>
                <input name="avatar" type="file" id="exampleInputFile">
                <div class="form-group danger">
                    <p class="text-danger">{{ $errors->first('avatar') }}</p>
              </div>
              </div>
          </div>
        
        </div>
          <!-- /.box-body -->
          <div class="box-footer">
            <b><a href="/admin/users">Назад</a></b>
            <button type="submit" class="btn btn-success pull-right">Добавить</button>
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