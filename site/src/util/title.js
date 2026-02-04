document.querySelectorAll('.enby-text').forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (el.classList.contains('is-animating')) {
      return;
    }
    el.classList.add('is-animating');    
    setTimeout(() => {
      el.classList.remove('is-animating');
      void el.offsetWidth;                
    }, 3000);
    
  });
});

