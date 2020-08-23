<script>
   window.onload = function() {
      document.getElementById("year").innerHTML = new Date().getFullYear();
   }
</script>
<main>
   <div class="container-fluid">
      <header class="blog-header">
         <div class="nav-scroller py-1 mb-2">
            <nav class="nav d-flex">
               <a class="nav-link" href="#">Home</a>
               <a class="nav-link" href="#about">About</a>
            </nav>
         </div>
      </header>
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
	<div class="row flex-nowrap justify-content-between align-items-center">
		<div class="col" style="text-align:center">
			<span class="text-nowrap">&#169; <span id="year"></span> Caleb Herbison</span> | <span class="text-nowrap" style="padding-right: 60px;"><a href="https://github.com/timetravelingmoose/tourdesource.com" class="fab fa-github-square fa-lg">Github</a></span>
		</div>
	</div>
</footer>