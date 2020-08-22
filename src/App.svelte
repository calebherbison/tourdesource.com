<script>
   window.onload = function() {
      document.getElementById("year").innerHTML = new Date().getFullYear();
   }
</script>
<main>
   <div class="container-fluid">
      <header class="blog-header py-3">
         <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-4 text-center">
               <h1 class="blog-header-logo">Welcome to tour de ~/src!</h1>
            </div>
           <div class="col-4 text-center"></div>
         </div>
      </header>
      <div class="nav-scroller py-1 mb-2">
         <nav class="nav d-flex">
            <a class="nav-link" href="#">Home</a>
            <a class="nav-link" href="#about">About</a>
         </nav>
      </div>
      <div class="row content">
         <div class="col-sm-3 sidenav">
            <br>
         </div>
         <div class="col-sm-9">
            <br>
         </div>
      </div>
   </div>
</main>
<footer class="container-fluid">
	<div class="row">
		<div class="col" style="text-align: left;">
			See this site's source code on<a href="https://github.com/timetravelingmoose/tourdesource.com" class="fab fa-github-square fa-lg"></a>
		</div>
		<div class="col-6">
		</div>
		<div class="col" style="text-align: right; padding-top: 5px;">
			&#169; <span id="year"></span> Caleb Herbison
		</div>
	</div>
</footer>