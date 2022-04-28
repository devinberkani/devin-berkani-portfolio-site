const getElement = (selector) => {
  const el = document.querySelector(selector);
  if (el) return el;
  throw new Error(`Please check your classes : ${selector} does not exist`);
};

const navToggle = getElement('.nav-toggle');
const links = getElement('.links');
const main = getElement('#home');

// close navbar when navbar icon is clicked
const toggleClasses = () => {
  links.classList.toggle('show-links');
};

// close navbar when anywhere else is clicked
const closeNavbar = () => {
  if (links.classList.contains('show-links')) {
    toggleClasses();
  }
};

navToggle.addEventListener('click', toggleClasses);
main.addEventListener('click', closeNavbar);
