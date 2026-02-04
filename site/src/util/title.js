document.querySelectorAll('.enby-text').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.classList.remove('is-animating');
    void el.offsetWidth;                
    el.classList.add('is-animating');    
  });
});

