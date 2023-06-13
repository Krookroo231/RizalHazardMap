function noscroll(event){
    event.preventDefault();
    window.scrollTo(0, 0);
}
function playGame(){
  window.location.href = 'game.html';
}
function rescroll(){
  window.removeEventListener('scroll', noscroll);
}
function scrollToTop() {
  window.scrollTo({
    top: 0// Adds smooth scrolling animation
  });
}
  // rodriguez rizal
  let erodOpen = document.getElementById('erodEarthquake');
  let erodDesc = document.querySelector('.erodEarthquakeDesc');
  let erodClose = document.getElementById('erodEarthquakeClose');

  let erodOpen2 = document.getElementById('erodFlood');
  let erodDesc2 = document.querySelector('.erodFloodDesc');
  let erodClose2 = document.getElementById('erodFloodClose');

  let erodOpen3 = document.getElementById('erodLandslide');
  let erodDesc3 = document.querySelector('.erodLandslideDesc');
  let erodClose3 = document.getElementById('erodLandslideClose');


  erodOpen.addEventListener('click', function(){
    erodDesc.style.display = 'block';
    scrollToTop();
    window.addEventListener('scroll', noscroll);
  });
  erodClose.addEventListener('click', function(){
    erodDesc.style.display = 'none';
    rescroll();
  });

  erodOpen2.addEventListener('click', function(){
    erodDesc2.style.display = 'block';
    scrollToTop();
    window.addEventListener('scroll', noscroll);
  });
  erodClose2.addEventListener('click', function(){
    erodDesc2.style.display = 'none';
    rescroll();
  });

  erodOpen3.addEventListener('click', function(){
    erodDesc3.style.display = 'block';
    scrollToTop();
    window.addEventListener('scroll', noscroll);
  });
  erodClose3.addEventListener('click', function(){
    erodDesc3.style.display = 'none';
    rescroll();
  });

  // antipolo rizal
  let antipoloOpen = document.getElementById('open2');
  let antipoloDesc = document.querySelector('.description2');
  let antipoloClose = document.getElementById('close2');

  let antipoloOpen2 = document.getElementById('antipoloLandslide');
  let antipoloDesc2 = document.querySelector('.antipoloLandslideDesc');
  let antipoloClose2 = document.getElementById('antipoloLandslideClose');

  let antipoloOpen3 = document.getElementById('antipoloFlood');
  let antipoloDesc3 = document.querySelector('.antipoloFloodDesc');
  let antipoloClose3 = document.getElementById('antipoloFloodClose');
 


  antipoloOpen.addEventListener('click', function(){
    antipoloDesc.style.display = 'block';
    scrollToTop();
    window.addEventListener('scroll', noscroll);
  });
  antipoloClose.addEventListener('click', function(){
    antipoloDesc.style.display = 'none';
    rescroll();
  });

  antipoloOpen2.addEventListener('click', function(){
    antipoloDesc2.style.display = 'block';
    scrollToTop();
    window.addEventListener('scroll', noscroll);
  });
  antipoloClose2.addEventListener('click', function(){
    antipoloDesc2.style.display = 'none';
    rescroll();
  });

  antipoloOpen3.addEventListener('click', function(){
    antipoloDesc3.style.display = 'block';
    scrollToTop();
    window.addEventListener('scroll', noscroll);
  });
  antipoloClose3.addEventListener('click', function(){
    antipoloDesc3.style.display = 'none';
    rescroll();
  });

  // San Mateo
  let sanMateoOpen = document.getElementById('sanMateoLandslide');
  let sanMateoDesc = document.querySelector('.sanMateoLandslideDesc');
  let sanMateoClose = document.getElementById('sanMateoLandslideClose');

  let sanMateoOpen2 = document.getElementById('sanMateoFlood');
  let sanMateoDesc2 = document.querySelector('.sanMateoFloodDesc');
  let sanMateoClose2 = document.getElementById('sanMateoFloodClose');

  let sanMateoOpen3 = document.getElementById('sanMateoEarthquake');
  let sanMateoDesc3 = document.querySelector('.sanMateoEarthquakeDesc');
  let sanMateoClose3 = document.getElementById('sanMateoEarthquakeClose');

  sanMateoOpen.addEventListener('click', function(){
    sanMateoDesc.style.display = 'block';
    scrollToTop();
    window.addEventListener('scroll', noscroll);
  })
  sanMateoClose.addEventListener('click', function(){
    sanMateoDesc.style.display = 'none';
    rescroll();
  })

  sanMateoOpen2.addEventListener('click', function(){
    sanMateoDesc2.style.display = 'block';
    scrollToTop();
    window.addEventListener('scroll', noscroll);
  })
  sanMateoClose2.addEventListener('click', function(){
    sanMateoDesc2.style.display = 'none';
    rescroll();
  })

  sanMateoOpen3.addEventListener('click', function(){
    sanMateoDesc3.style.display = 'block';
    scrollToTop();
    window.addEventListener('scroll', noscroll);
  })
  sanMateoClose3.addEventListener('click', function(){
    sanMateoDesc3.style.display = 'none';
    rescroll();
  })

  //Cainta Rizal

  let caintaOpen = document.getElementById('caintaFlood');
  let caintaDesc = document.querySelector('.caintaFloodDesc');
  let caintaClose = document.getElementById('caintaFloodClose');
  
  let caintaOpen2 = document.getElementById('caintaLandslide');
  let caintaDesc2 = document.querySelector('.caintaLandslideDesc');
  let caintaClose2 = document.getElementById('caintaLandslideClose');

  caintaOpen.addEventListener('click', function(){
    scrollToTop();
    caintaDesc.style.display = 'block';
    window.addEventListener('scroll', noscroll);

  })
  caintaClose.addEventListener('click', function(){
    caintaDesc.style.display = 'none';
    rescroll();
  })


  caintaOpen2.addEventListener('click', function(){
    caintaDesc2.style.display = 'block';
    scrollToTop();
    window.addEventListener('scroll', noscroll);
  })
  caintaClose2.addEventListener('click', function(){
    caintaDesc2.style.display = 'none';
    rescroll();
  })

  //taytay Rizal

  let taytayOpen = document.getElementById('taytayFlood');
  let taytayDesc = document.querySelector('.taytayFloodDesc');
  let taytayClose = document.getElementById('taytayFloodClose');
  
  let taytayOpen2 = document.getElementById('taytayLandslide');
  let taytayDesc2 = document.querySelector('.taytayLandslideDesc');
  let taytayClose2 = document.getElementById('taytayLandslideClose');

  taytayOpen.addEventListener('click', function(){
    scrollToTop();
    taytayDesc.style.display = 'block';
    window.addEventListener('scroll', noscroll);
  })
  taytayClose.addEventListener('click', function(){
    taytayDesc.style.display = 'none';
    rescroll();
  })


  taytayOpen2.addEventListener('click', function(){
    taytayDesc2.style.display = 'block';
    scrollToTop();
    window.addEventListener('scroll', noscroll);
  })
  taytayClose2.addEventListener('click', function(){
    taytayDesc2.style.display = 'none';
    rescroll();
  })

    //angono Rizal

    let angonoOpen = document.getElementById('angonoFlood');
    let angonoDesc = document.querySelector('.angonoFloodDesc');
    let angonoClose = document.getElementById('angonoFloodClose');
    
    let angonoOpen2 = document.getElementById('angonoLandslide');
    let angonoDesc2 = document.querySelector('.angonoLandslideDesc');
    let angonoClose2 = document.getElementById('angonoLandslideClose');
  
    angonoOpen.addEventListener('click', function(){
      scrollToTop();
      angonoDesc.style.display = 'block';
      window.addEventListener('scroll', noscroll);
    })
    angonoClose.addEventListener('click', function(){
      angonoDesc.style.display = 'none';
      rescroll();
    })
  
  
    angonoOpen2.addEventListener('click', function(){
      angonoDesc2.style.display = 'block';
      scrollToTop();
      window.addEventListener('scroll', noscroll);
    })
    angonoClose2.addEventListener('click', function(){
      angonoDesc2.style.display = 'none';
      rescroll();
    })

        //teresa Rizal

        let teresaOpen = document.getElementById('teresaFlood');
        let teresaDesc = document.querySelector('.teresaFloodDesc');
        let teresaClose = document.getElementById('teresaFloodClose');
        
        let teresaOpen2 = document.getElementById('teresaLandslide');
        let teresaDesc2 = document.querySelector('.teresaLandslideDesc');
        let teresaClose2 = document.getElementById('teresaLandslideClose');
      
        teresaOpen.addEventListener('click', function(){
          scrollToTop();
          teresaDesc.style.display = 'block';
          window.addEventListener('scroll', noscroll);
        })
        teresaClose.addEventListener('click', function(){
          teresaDesc.style.display = 'none';
          rescroll();
        })
      
      
        teresaOpen2.addEventListener('click', function(){
          teresaDesc2.style.display = 'block';
          scrollToTop();
          window.addEventListener('scroll', noscroll);
        })
        teresaClose2.addEventListener('click', function(){
          teresaDesc2.style.display = 'none';
          rescroll();
        })

        //morong Rizal

        let morongOpen = document.getElementById('morongFlood');
        let morongDesc = document.querySelector('.morongFloodDesc');
        let morongClose = document.getElementById('morongFloodClose');
        
        let morongOpen2 = document.getElementById('morongLandslide');
        let morongDesc2 = document.querySelector('.morongLandslideDesc');
        let morongClose2 = document.getElementById('morongLandslideClose');
      
        morongOpen.addEventListener('click', function(){
          scrollToTop();
          morongDesc.style.display = 'block';
          window.addEventListener('scroll', noscroll);
        })
        morongClose.addEventListener('click', function(){
          morongDesc.style.display = 'none';
          rescroll();
        })
      
      
        morongOpen2.addEventListener('click', function(){
          morongDesc2.style.display = 'block';
          scrollToTop();
          window.addEventListener('scroll', noscroll);
        })
        morongClose2.addEventListener('click', function(){
          morongDesc2.style.display = 'none';
          rescroll();
        })

        //tanay Rizal

        let tanayOpen = document.getElementById('tanayFlood');
        let tanayDesc = document.querySelector('.tanayFloodDesc');
        let tanayClose = document.getElementById('tanayFloodClose');
        
        let tanayOpen2 = document.getElementById('tanayLandslide');
        let tanayDesc2 = document.querySelector('.tanayLandslideDesc');
        let tanayClose2 = document.getElementById('tanayLandslideClose');
      
        tanayOpen.addEventListener('click', function(){
          scrollToTop();
          tanayDesc.style.display = 'block';
          window.addEventListener('scroll', noscroll);
        })
        tanayClose.addEventListener('click', function(){
          tanayDesc.style.display = 'none';
          rescroll();
        })
      
      
        tanayOpen2.addEventListener('click', function(){
          tanayDesc2.style.display = 'block';
          scrollToTop();
          window.addEventListener('scroll', noscroll);
        })
        tanayClose2.addEventListener('click', function(){
          tanayDesc2.style.display = 'none';
          rescroll();
        })

        //baras Rizal

        let barasOpen = document.getElementById('barasFlood');
        let barasDesc = document.querySelector('.barasFloodDesc');
        let barasClose = document.getElementById('barasFloodClose');
        
        let barasOpen2 = document.getElementById('barasLandslide');
        let barasDesc2 = document.querySelector('.barasLandslideDesc');
        let barasClose2 = document.getElementById('barasLandslideClose');
      
        barasOpen.addEventListener('click', function(){
          scrollToTop();
          barasDesc.style.display = 'block';
          window.addEventListener('scroll', noscroll);
        })
        barasClose.addEventListener('click', function(){
          barasDesc.style.display = 'none';
          rescroll();
        })
      
      
        barasOpen2.addEventListener('click', function(){
          barasDesc2.style.display = 'block';
          scrollToTop();
          window.addEventListener('scroll', noscroll);
        })
        barasClose2.addEventListener('click', function(){
          barasDesc2.style.display = 'none';
          rescroll();
        })

        //pililia Rizal

        let pililiaOpen = document.getElementById('pililiaFlood');
        let pililiaDesc = document.querySelector('.pililiaFloodDesc');
        let pililiaClose = document.getElementById('pililiaFloodClose');
        
        let pililiaOpen2 = document.getElementById('pililiaLandslide');
        let pililiaDesc2 = document.querySelector('.pililiaLandslideDesc');
        let pililiaClose2 = document.getElementById('pililiaLandslideClose');
      
        pililiaOpen.addEventListener('click', function(){
          scrollToTop();
          pililiaDesc.style.display = 'block';
          window.addEventListener('scroll', noscroll);
        })
        pililiaClose.addEventListener('click', function(){
          pililiaDesc.style.display = 'none';
          rescroll();
        })
      
      
        pililiaOpen2.addEventListener('click', function(){
          pililiaDesc2.style.display = 'block';
          scrollToTop();
          window.addEventListener('scroll', noscroll);
        })
        pililiaClose2.addEventListener('click', function(){
          pililiaDesc2.style.display = 'none';
          rescroll();
        })

        //jalajala Rizal

        let jalajalaOpen = document.getElementById('jalajalaFlood');
        let jalajalaDesc = document.querySelector('.jalajalaFloodDesc');
        let jalajalaClose = document.getElementById('jalajalaFloodClose');
        
        let jalajalaOpen2 = document.getElementById('jalajalaLandslide');
        let jalajalaDesc2 = document.querySelector('.jalajalaLandslideDesc');
        let jalajalaClose2 = document.getElementById('jalajalaLandslideClose');
      
        let jalajalaOpen3 = document.getElementById('jalajalaEarthquake');
        let jalajalaDesc3 = document.querySelector('.jalajalaEarthquakeDesc');
        let jalajalaClose3 = document.getElementById('jalajalaEarthquakeClose');
        jalajalaOpen.addEventListener('click', function(){
          scrollToTop();
          jalajalaDesc.style.display = 'block';
          window.addEventListener('scroll', noscroll);
        })
        jalajalaClose.addEventListener('click', function(){
          jalajalaDesc.style.display = 'none';
          rescroll();
        })
      
      
        jalajalaOpen2.addEventListener('click', function(){
          jalajalaDesc2.style.display = 'block';
          scrollToTop();
          window.addEventListener('scroll', noscroll);
        })
        jalajalaClose2.addEventListener('click', function(){
          jalajalaDesc2.style.display = 'none';
          rescroll();
        })

        jalajalaOpen3.addEventListener('click', function(){
          jalajalaDesc3.style.display = 'block';
          scrollToTop();
          window.addEventListener('scroll', noscroll);
        })
        jalajalaClose3.addEventListener('click', function(){
          jalajalaDesc3.style.display = 'none';
          rescroll();
        })

        //binangonan Rizal

        let binangonanOpen = document.getElementById('binangonanFlood');
        let binangonanDesc = document.querySelector('.binangonanFloodDesc');
        let binangonanClose = document.getElementById('binangonanFloodClose');
        
        let binangonanOpen2 = document.getElementById('binangonanStorm');
        let binangonanDesc2 = document.querySelector('.binangonanStormDesc');
        let binangonanClose2 = document.getElementById('binangonanStormClose');
      
        binangonanOpen.addEventListener('click', function(){
          scrollToTop();
          binangonanDesc.style.display = 'block';
          window.addEventListener('scroll', noscroll);
        })
        binangonanClose.addEventListener('click', function(){
          binangonanDesc.style.display = 'none';
          rescroll();
        })
      
      
        binangonanOpen2.addEventListener('click', function(){
          binangonanDesc2.style.display = 'block';
          scrollToTop();
          window.addEventListener('scroll', noscroll);
        })
        binangonanClose2.addEventListener('click', function(){
          binangonanDesc2.style.display = 'none';
          rescroll();
        })

        //cardona Rizal

        let cardonaOpen = document.getElementById('cardonaFlood');
        let cardonaDesc = document.querySelector('.cardonaFloodDesc');
        let cardonaClose = document.getElementById('cardonaFloodClose');
        
        let cardonaOpen2 = document.getElementById('cardonaStorm');
        let cardonaDesc2 = document.querySelector('.cardonaStormDesc');
        let cardonaClose2 = document.getElementById('cardonaStormClose');
      
        cardonaOpen.addEventListener('click', function(){
          scrollToTop();
          cardonaDesc.style.display = 'block';
          window.addEventListener('scroll', noscroll);
        })
        cardonaClose.addEventListener('click', function(){
          cardonaDesc.style.display = 'none';
          rescroll();
        })
      
      
        cardonaOpen2.addEventListener('click', function(){
          cardonaDesc2.style.display = 'block';
          scrollToTop();
          window.addEventListener('scroll', noscroll);
        })
        cardonaClose2.addEventListener('click', function(){
          cardonaDesc2.style.display = 'none';
          rescroll();
        })