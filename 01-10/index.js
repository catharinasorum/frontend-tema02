const bilder = [
    "./ny-1.jpg",  
    "./ny-2.jpg",  
    "./ny-3.jpg",  
    "./ny-4.jpg"  
  ];
  
  let i = 0;
  
  function bytteBilde() {
    if(i >= bilder.length) {
      i = 0;
    }
    
    console.log(i);
    
    const bilde = bilder[i];
    document.body.style.backgroundImage = `url("${bilde})`;
    
    i++;
  }
  
  setInterval(bytteBilde, 1000);
  