  const searchInput = document.querySelector('input[name="search"]');
  const searchBtn = document.querySelector('.search button');
  const boxes = document.querySelectorAll('.box');


  function filterBoxes() {
      const query = searchInput.value.toLowerCase().trim();

      boxes.forEach(box => {
          const boxText = box.textContent.toLowerCase();
          if (boxText.includes(query)) {
              box.style.display = "block"; 
          } else {
              box.style.display = "none"; 
          }
      });
  }

 
  searchBtn.addEventListener("click", function(e){
      e.preventDefault(); 
      filterBoxes();      
  });