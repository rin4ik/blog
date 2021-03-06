
  <!-- Left side column. contains the sidebar -->
  <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
          <!-- Sidebar user panel -->
          <div class="user-panel">
            <div class="pull-left image">
              <img src="/uploads/user.jpeg" class="img-circle" alt="User Image">
            </div>
            <div class="pull-left info">
              <p>Mirahmad Mirzajonov</p>
              <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
            </div>
          </div>
          <!-- search form -->
          <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
              <input type="text" name="q" class="form-control" placeholder="Search...">
                  <span class="input-group-btn">
                    <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                    </button>
                  </span>
            </div>
          </form>
          <!-- /.search form -->
          <!-- sidebar menu: : style can be found in sidebar.less -->
          <ul class="sidebar-menu">
            <li class="header">MAIN NAVIGATION</li>
            <li class="treeview">
              <a href="#">
                <i class="fa fa-dashboard"></i> <span>Админ-панель</span>
              </a>
            </li>
            <li><a href="/admin/posts"><i class="fa fa-sticky-note-o"></i> <span>Посты</span></a></li>
            <li><a href="/admin/categories"><i class="fa fa-list-ul"></i> <span>Категории</span></a></li>
            <li><a href="/admin/tags"><i class="fa fa-tags"></i> <span>Теги</span></a></li>
            <li>
              <a href="/admin/comments">
                <i class="fa fa-commenting"></i> <span>Комментарии</span>
                <span class="pull-right-container">
                  <small class="label pull-right bg-green">{{$count}}</small>
                </span>
              </a>
            </li>
            <li><a href="/admin/users"><i class="fa fa-users"></i> <span>Пользователи</span></a></li>
            
          </ul>
        </section>
        <!-- /.sidebar -->
      </aside>