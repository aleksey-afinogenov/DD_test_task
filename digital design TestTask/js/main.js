//кнопка наверх
const btnUp = {
  el: document.querySelector('.btn-go-top'),
  show() {
    this.el.classList.remove('hidden');
  },
  hide() {
    this.el.classList.add('hidden');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 100 ? this.show() : this.hide();
    });
    document.querySelector('.btn-go-top').addEventListener('click', () => {
      window.scrollTo({top: 0,behavior: 'smooth'})});
  }
}

btnUp.addEventListener();

//открываем форму
const buttons = document.querySelectorAll('.catalog-button');
const modal = document.querySelector('.modal');

for (let elem of buttons) {
  elem.addEventListener('click', function() {
    modal.classList.remove('hidden');
  })
}

//закрваем форму
const closeModals = document.querySelectorAll('.close-modal');

for (let el of closeModals) {
el.addEventListener('click', function() {
  modal.classList.add('hidden');
  newModal.classList.add('hidden');
})
}

//выводим сообщение об отправке формы
const form = document.querySelector('.modal__form');
const sendForm = document.querySelector('.button-end');
const newModal = document.querySelector('.newModal');

sendForm.addEventListener('click', function() {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  })
  modal.classList.add('hidden');
  newModal.classList.remove('hidden');
})

//смена темы

const flag = document.querySelector('.themes__option');

flag.addEventListener('click', function() {
  document.documentElement.classList.toggle('dark');
})

//обработка даты
const dataAllText = document.querySelectorAll('.data');

function getDayInfo(str) {
  let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  let months = ['Января', 'Февраль', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

  function getWeekNumber(num) {
    if (num > 0 && num <=7)   {return '1';}
    if (num > 7 && num <=14)  {return '2';}
    if (num > 14 && num <=21) {return '3';}
    if (num > 21 && num <=28) {return '4';}
    if (num > 28 && num <=31)  {return '5';}
    else{return 'неверная дата';}
  }
  let arr = str.split('.');
  let date = new Date(arr[2], arr[1]-1, arr[0]);

  let newStr = days[date.getDay()] + ', ' + getWeekNumber(date.getDate())+' неделя' + ' '+ months[date.getMonth()] + ' ' + date.getFullYear()+ ' ' + 'года.';
  return newStr;
}

for (let elem of dataAllText) {
elem.textContent = getDayInfo(elem.textContent);
}
