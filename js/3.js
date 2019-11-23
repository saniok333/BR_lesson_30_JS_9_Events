  // if (!((event.clientX < coords.right) &&
  //     (event.clientX > (coords.right - 5)) &&
  //     (event.clientY < coords.bottom) &&
  //     (event.clientY > (coords.bottom - 5)))) return;

  // Создать HTML-страницу с блоком текста в рамочке. 
  // Реализовать возможность изменять размер блока, 
  // если зажать мышку в правом нижнем углу и тянуть ее дальше.

  let div = document.querySelector("div");

  document.addEventListener("mousedown", function (event) {

    let coords = div.getBoundingClientRect();

    if (!((Math.floor(event.clientX / 5) == Math.floor(coords.right / 5)) &&
        (Math.floor(event.clientY / 5) == Math.floor(coords.bottom / 5))
      )) return;

    document.addEventListener('mousemove', changeElementSize);
    document.addEventListener('mouseup', stopChangeElementSize);

    function changeElementSize(event) {
      div.style.width = `${event.clientX - coords.left}px`;
      div.style.height = `${event.clientY - coords.top}px`;
    }

    function stopChangeElementSize() {
      document.removeEventListener('mouseup', stopChangeElementSize);
      document.removeEventListener('mousemove', changeElementSize);
    }
  });