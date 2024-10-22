function tshuva(k){
    document.getElementById('tshuvak').style.display='flex';
    document.getElementById('tshuvak').style.backgroundImage='url("mazbiaa.png")';
    const text = document.getElementById(k).innerText;
    const pElement = document.getElementById('tshuvak');
    pElement.innerText=text;
    pElement.style.color='rgb(255, 199, 23)';
}
function backhome(){
    window.location.href = 'https://zamit00.github.io/MyWebSite/';
   
}


function navmiksoee(nav) { 
    document.getElementById('patiach') .style.display='none';
    
    if (nav==='yeled'){
        const yeldt = document.getElementById('tshuvak');
        
        const text = document.getElementById('yeled').innerText;
        document.getElementById('tshuvak').style.display='flex';
        
        yeldt.innerText=text;
        yeldt.style.width='100%';
        yeldt.style.marginRight='20%';
        yeldt.style.marginLeft='10%';
        yeldt.style.color='aliceblue';
        document.getElementById('tshuvak').style.backgroundImage='';
    }
    else{
        
        document.getElementById('controlclick').style.opacity='0'
        
        
            document.getElementById('controlclick').style.display = 'none'; // Set display to none after fading out
         // Match this duration to the CSS transition duration
    }
        document.getElementById('tshuvak').style.backgroundImage='';
        const tk = document.getElementById('tshuvak');
        tk.style.width='50%'
        tk.innerText="";
        
        tk.style.display='flex';
      
        
        const divItems = document.querySelectorAll(
            '#hishquiz-container .hishtalmot, #hishquiz-container .gemel,  #hishquiz-container .gemelhashkaa');   
        divItems.forEach((div) => {
                
            if (div.id === nav){
                setTimeout(() => {
                     div.style.display='block';
                }, 850);


                    

                    document.getElementById('hishquiz-container').style.display= "block";
                    document.getElementById('tshuvak').style.width='55%'
                    document.getElementById('hetz').style.display= "block";
                    
            }
            else{
                    div.style.display='none'
            }
            
            
            
        });
    
    
    }

    
    function controlsback(){
        
        document.getElementById('controlclick').style.display='flex'
        document.getElementById('hishquiz-container').style.display='none'
        document.getElementById('controlclick').style.opacity='1';
        document.getElementById('controls').style.opacity='1';
        
        /*setTimeout(() => {
            hetzElement.classList.add('hidden');
        }, 3000); */
        const hetzElement = document.getElementById('hetz');
        document.getElementById('tshuvak').style.display='none'; 
        document.getElementById('patiach') .style.display='flex';
    }
    
    /*
    function resetControl() {
    const controlClickDiv = document.getElementById('controlclick');
    controlClickDiv.classList.remove('shrink'); // Remove the 'shrink' class
}
        
        
        
   
  */
