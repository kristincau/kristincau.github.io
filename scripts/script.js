var observer = new FontFaceObserver('Lato', {});
observer.check()
  .then( function(){ 
    document.documentElement.className += " fonts-loaded";
  });