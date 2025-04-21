document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    const message = document.getElementById('formMessage');
  
    if (form && message) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        form.reset();
        message.classList.add('show');
  
        setTimeout(() => {
          message.classList.remove('show');
        }, 4000); // через 4 секунды исчезнет
      });
    }
  });
  