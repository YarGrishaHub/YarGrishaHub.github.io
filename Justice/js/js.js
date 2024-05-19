document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 80) {
        document.getElementById('cf').classList.add('shapka');
        document.getElementById('cf1').classList.add('c-black');
        document.getElementById('cf2').classList.add('c-black');
        document.getElementById('cf3').classList.add('c-black');
        document.getElementById('cf4').classList.add('c-black');
        document.getElementById('cf5').classList.add('c-black');
        document.getElementById('cf6').classList.add('c-white');
        document.getElementById('cf6').classList.remove('rrg');
          
        
      } else {
        document.getElementById('cf').classList.remove('shapka');
        document.getElementById('cf1').classList.remove('c-black');
        document.getElementById('cf2').classList.remove('c-black');
        document.getElementById('cf3').classList.remove('c-black');
        document.getElementById('cf4').classList.remove('c-black');
        document.getElementById('cf5').classList.remove('c-black');
        document.getElementById('cf6').classList.remove('c-white');
        document.getElementById('cf6').classList.add('rrg');
      } 
  });
});