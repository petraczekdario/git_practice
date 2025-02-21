console.log("Hello World in JS!");

function read_more() {
  document.getElementById('hidden-first').style.display = 'block';
}

document.getElementById('read-more').addEventListener('click', read_more);