import React from "react"


function first(){

    function openNav() {
        document.getElementById("myNav").style.width = "100%"
      }
      
      function closeNav() {
        document.getElementById("myNav").style.width = "0%"
      }
     return(<div>  
    <div id="myNav" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
  <div class="overlay-content">
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
</div>

<div className="TB" style={{fontSize:"30px",cursor:"pointer"}} onClick={openNav}>&#9776; open</div>



     

</div>)
}

export default first;