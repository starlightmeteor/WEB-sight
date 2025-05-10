function showblowup(src) {
    const overlay = document.getElementById('blowup');
    const img = document.getElementById('blowup_img');
    img.src = src;
    overlay.style.display = 'flex';
  }
  
  function hideblowup() {
    document.getElementById('blowup').style.display = 'none';
  }