const svgElement = document.querySelectorAll('.icon')

svgElement.forEach(icon => {
    icon.addEventListener('click', function() {
        if (this.classList == 'icon eye') {
            
        }
        // Переключаем класс и получаем текущее состояние
        const isNowActive = this.classList.toggle('active');
        
        // Улучшенное сообщение в консоль
        console.log(`Продукт ${isNowActive ? 'добавлен в избранное' : 'удалён из избранного'}!`);    
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const sliderContainer = document.querySelector('.slider-container');
  const button1 = document.querySelector('.slider-buttons1');
  const button2 = document.querySelector('.slider-buttons2');

  button1.addEventListener('click', function() {
    sliderContainer.classList.remove('slide-active');
    button1.classList.add('active');
    button2.classList.remove('active');
  });

  button2.addEventListener('click', function() {
    sliderContainer.classList.add('slide-active');
    button2.classList.add('active');
    button1.classList.remove('active');
  });
});