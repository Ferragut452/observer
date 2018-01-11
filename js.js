//Создаем класс
class EventObserver {
  constructor () {
    this.observers = []
  }
  subscribe (fn) {
    this.observers.push(fn)
  }
  broadcast (data) {
    this.observers.forEach(subscriber => subscriber(data))
  }
}

//Создаем екземпляр класса EventObserver
let observer = new EventObserver()

//Заносим в переменные необходимые узлы
let textField = document.querySelector('.textField')
let countField = document.querySelector('.countField')

//количество символов в textarea
let getWordsCount = text =>
  text.length;

//добавляем в селектор '.countField' количество символов из textarea
observer.subscribe(text => {
  countField.innerHTML = getWordsCount(text)
})
//Прослушиваем изменения. Связываем количество символов из textarea и показателя счетчика в '.countField'
textField.addEventListener('keyup', () => {
  observer.broadcast(textField.value)
})
