@extends('admin.layouts.layout')
@section('content')

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Добавить статью
        <small>приятные слова..</small>
      </h1>
    </section>

    <!-- Main content -->
    <section class="content">
<form action="/admin/posts" method="POST" enctype="multipart/form-data">
         <!-- Default box -->
    {{csrf_field()}}
         <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">Добавляем статью</h3>
        </div>
        <div class="box-body">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Название</label>
              <input name="title" type="text" class="form-control" id="exampleInputEmail1" placeholder="" value="{{old('title')}}">
              <div class="form-group danger">
                    <p class="text-danger">{{ $errors->first('title') }}</p>
              </div>
            </div>
            
            <div class="form-group">
              <label for="exampleInputFile">Лицевая картинка</label>
              <input type="file" id="exampleInputFile" name="image" >

              <p class="help-block">Какое-нибудь уведомление о форматах..</p>
              <div class="form-group danger">
                    <p class="text-danger">{{ $errors->first('image') }}</p>
              </div>
            </div>
            <div class="form-group">
              <label>Категория</label>
              <select class="form-control select2" name="category_id">
                   <option value="">Choose One...</option>
                        @if ($categories->count())
                    
                            @foreach($categories as $category)
                                <option value="{{ $category->id }}">{{ $category->title }}</option>    
                            @endforeach
                        @endif
                    
                    </select>
            </div>
              <div class="form-group">
                <label>Теги</label>
                <select class="form-control select2" multiple="multiple" data-placeholder="Выберите теги" name="tags[]">
                      
                          @if ($tags->count())
                      
                              @foreach($tags as $tag)
                                  <option value="{{ $tag->id }}">{{ $tag->title }}</option>    
                              @endforeach
                          @endif
                      
                      </select>
              </div>
            <!-- Date -->
            <div class="form-group">
              <label>Дата:</label>

              <div class="input-group date">
                <div class="input-group-addon">
                  <i class="fa fa-calendar"></i>
                </div>
                <input type="text" class="form-control pull-right" id="datepicker" name="date" value="{{old('date')}}">
              </div>
              <!-- /.input group -->
              <div class="form-group danger">
                  <p class="text-danger">{{ $errors->first('date') }}</p>
            </div>
            </div>

            <!-- checkbox -->
            <div class="form-group">
              <label>
                <input type="checkbox" class="minimal" name="is_featured">
              </label>
              <label>
                Рекомендовать
              </label>
            </div>

            <!-- checkbox -->
            <div class="form-group">
              <label>
                <input type="checkbox" class="minimal" name="status">
              </label>
              <label>
                Черновик
              </label>
            </div>
          </div>
          <div class="col-md-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Описание</label>
                <input name="description" type="text" class="form-control" value="{{old('description')}}">
                <div class="form-group danger">
                    <p class="text-danger">{{ $errors->first('description') }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <label for="exampleInputEmail1">Полный текст</label>
              <textarea name="content" id="" cols="30" rows="10" class="form-control" >{{old('content')}}</textarea>
              <div class="form-group danger">
                  <p class="text-danger">{{ $errors->first('content') }}</p>
            </div>
          </div>
        </div>
      </div>

        <!-- /.box-body -->
        <div class="box-footer">
          <b><a href="/admin/posts" >Назад</a></b>
          <button type="submit" class="btn btn-success pull-right">Добавить</button>
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