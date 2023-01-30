import React from "react";


function head(){
 
  
    return(<div className="scroll-wrapper">
    <div className="scroll-wrapper2">
    <span id="PHead">
        {/* <img id="PHead" src="/imeges/P_20221211_154157-05.jpeg" alt="amaan"></img> */}
        {window.addEventListener('scroll', function(){
         this.document.getElementById("PHead").style.backgroundSize =160 -  +window.pageYOffset/12+"%";
         this.document.getElementById("PHead").style.opacity =95 -  +window.pageYOffset/100+"%";
     })}
</span>
<span>
        <main class="Hcontainer">
  <p>Hello 👋 I'm</p>
  <section class="animation">
    <div class="Hfirst"><div>Syed Amaan</div></div>
    <div class="Hsecond"><div>Full Stack Engineer</div></div>
    <div class="Hthird"><div>Systems Engineer</div></div>
  </section>
</main>
        {/* <h1 className="FHead">
        Hello I Amaan Iqbal.
        <hr></hr>
        Am a Full Stack Engineer.
        </h1> */}
    </span>
    </div>
    </div>
    )


}


export default head;