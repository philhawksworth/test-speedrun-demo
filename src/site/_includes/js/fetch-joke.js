fetch('.netlify/functions/joke')
  .then(response => response.json())
  .then(json => {
    const element = document.querySelector('#joke');
    if (element) {
      element.innerHTML = json.msg;
    }
  });
