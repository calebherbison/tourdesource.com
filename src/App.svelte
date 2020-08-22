<script>
   window.onload = function() {
      document.getElementById("year").innerHTML = new Date().getFullYear();
   }
</script>
<header>
   <h1></h1>
</header>
<main>
   <div class="container-fluid">
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