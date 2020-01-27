//Handle Menu Toggler

const togglerBtn = document.querySelector('.toggler');

if (togglerBtn !== null) {
  togglerBtn.addEventListener('click', toggle);
}

function toggle(e) {
  const nav = document.querySelector('.nav');
  if (e.target.checked) {
    nav.classList.add('slide-down');
  } else {
    nav.classList.remove('slide-down');
  }
}

//Handle active page

const pathname = window.location.pathname;
const nav_link = [...document.querySelectorAll('.nav-link')];

nav_link.forEach(link => {
  const link_path = link.getAttribute('href');
  if (pathname === link_path && !link.classList.contains('active')) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
