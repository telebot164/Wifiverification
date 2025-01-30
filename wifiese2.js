const eye = document.querySelector('.eye');
const password = document.querySelector('.passnow');
function countLength() {
  if (password.value.length >= 1) {
    eye.src = 'download-5.png';
  }
}
function changeType() {
  if (password.type === 'password') {
    password.type = 'text';
  } else if (password.type === 'text') {
    password.type = 'password';
  }
  if (password.type === 'text') {
    eye.src = 'images-4.jpeg';
  } else if (password.type === 'password') {
    eye.src = 'download-5.png';
  }
}
