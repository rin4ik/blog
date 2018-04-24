@extends('admin.layouts.layout')
@section('content')

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
            Blank page
            <small>it all starts here</small>
          </h1>
          <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Examples</a></li>
            <li class="active">Blank page</li>
          </ol>
        </section>
    
        <!-- Main content -->
        <section class="content">
    
          <!-- Default box -->
          <div class="box">
                <div class="box-header">
                  <h3 class="box-title">Листинг сущности</h3>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                  <div class="form-group">
                    <a href="create.html" class="btn btn-success">Добавить</a>
                  </div>
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                    <tr>
                      <th>ID</th>
                      <th>Текст</th>
                      <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                        @foreach($comments as $comment)
                    <tr>
                      <td>{{$comment->id}}</td>
                      <td>{{$comment->text}}
                      </td>
                      <td> @if($comment->status ==1 )
                            <a href="/admin/comments/toggle/{{$comment->id}}" class="fa fa-lock"></a>  
                      @else 
                      <a href="/admin/comments/toggle/{{$comment->id}}" class="fa fa-thumbs-o-up"></a>  
                      @endif
                      <form action="{{route('comments.destroy',$comment)}}" method="POST">
                        {{ csrf_field() }} {{ method_field('DELETE') }}
                     <button onclick="return confirm('Вы уверены?')" type="submit" class="delete">
                            <i  class="fa fa-remove"></i> 
                     </button>
                </form>
                      </td>
                    </tr>
                    
                    @endforeach
                    </tfoot>
                  </table>
                </div>
                <!-- /.box-body -->
              </div>
          <!-- /.box -->
    
        </section>
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->
@endsection
 
        <div>
          <label for="prod_cat">Product Categories:</label>
  
          <br />
          @php ($i = 0)
        @foreach($categories as $category)
          <label class="checkbox">
            <input type="checkbox" name="prod_cat[]" value="{{ $category->cat_id }}"
  
  
            @foreach($product->productMetas->toArray() as $metas)
              @if($metas['prod_meta_type'] == 1)
                @if($metas['value'] == $category->cat_id)
                  checked
                @endif
              @endif
            @endforeach
  
            ><strong> {{$category->cat_name}} </strong></input>
          </label>
  
  
  
            @foreach($categories[$i]->subCategories as $subcategory)
            <label class="checkbox-inline">
                &boxur;  <input type="checkbox" name="prod_subcat[]" value="{{ $subcategory->subcat_id }}"
  
                @foreach($product->productMetas->toArray() as $metas)
                  @if($metas['prod_meta_type'] == 2)
                    @if($metas['value'] == $subcategory->subcat_id)
                      checked
                    @endif
                  @endif
                @endforeach
  
  
                >{{$subcategory->subcat_name}}</input>
              </label>
  
              <br />
            @endforeach
            @php ($i++)
          @endforeach
        </div>
  
      </div>