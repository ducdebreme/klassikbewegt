//= require_tree .
if (!Modernizr.svg) { 
  // fallback, if browser does not know SVG  
  $("#logo").attr("src", "/assets/klassikbewegt-logo.png"); 
}

