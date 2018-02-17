@extends('admin.layouts.layout')
@section('content')

  
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
            Менять пользователя
          </h1>
        </section>
    
        <!-- Main content -->
        <section class="content">
          <form action="/admin/users/{{$user->id}}" method="POST" enctype="multipart/form-data" >
            {{ csrf_field() }} {{ method_field('PATCH') }}
          <!-- Default box -->
          <div class="box">
            <div class="box-header with-border">
              <h3 class="box-title">Меняем пользователя</h3>
            </div>
            <div class="box-body">
              <div class="col-md-6">
               
                <div class="form-group">
                  <label for="exampleInputEmail1">Имя</label>
                  <input type="text" " class="form-control" id="exampleInputEmail1" placeholder="" name="name" value="{{$user->name}}">
                  <div class="form-group danger">
                    <p class="text-danger">{{ $errors->first('name') }}</p>
              </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">E-mail</label>
                  <input type="email  " class="form-control" id="exampleInputEmail1" placeholder="" value="{{$user->email}}" name="email">
                  <div class="form-group danger">
                    <p class="text-danger">{{ $errors->first('email') }}</p>
              </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Пароль</label>
                  <input type="password" class="form-control" id="exampleInputEmail1" placeholder="" name="password" value="">
                  <div class="form-group danger">
                    <p class="text-danger">{{ $errors->first('password') }}</p>
              </div>
                </div>
                <div class="form-group">
                  <img src="{{$user->getImage()}}" alt="" width="200" class="img-responsive">
                  <label for="exampleInputFile">Аватар</label>
                  <input name="avatar" type="file" id="exampleInputFile">
    
                  <p class="help-block">Какое-нибудь уведомление о форматах..</p>
                 <div class="form-group danger">
                  <p class="text-danger">{{ $errors->first('avatar') }}</p>
            </div>
                </div>
            </div>
          </div>
            <!-- /.box-body -->
            <div class="box-footer">
              <b><a href="/admin/users">Назад</a></b>
              <button type="submit" class="btn btn-warning pull-right">Изменить</button>
            </div>
            <!-- /.box-footer-->
          </div>
          <!-- /.box -->
        </form>
        
        </section>
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->
      @endsection