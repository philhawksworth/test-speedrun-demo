fetch('.netlify/functions/joke')
  .then(response => response.json())
  .then(json => {
    const element = document.querySelector('#joke');
    element.innerHTML = json.msg;
  });
