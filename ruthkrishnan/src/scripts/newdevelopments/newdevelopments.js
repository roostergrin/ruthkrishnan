import { setMap } from '../resources/gmap-development'

document.addEventListener('DOMContentLoaded', function () {
  const allDevelopments = document.querySelectorAll('.page-new-developments__development')
  const availableNowElems = document.querySelectorAll('.page-new-developments__development--available-now')
  const comingSoonElems = document.querySelectorAll('.page-new-developments__development--coming-soon')
  const soldOutElems = document.querySelectorAll('.page-new-developments__development--sold-out')
  const filtersArr = document.querySelectorAll('.page-new-developments__filter')

  setMap('available-now');
  availableNowElems.forEach((el) => {
    el.classList.add('page-new-developments__development--active')
  })
  
  filtersArr.forEach((el, i) => {
    el.addEventListener('click', () => {
      setMap(el.dataset.filter)
      allDevelopments.forEach(elem => elem.classList.remove('page-new-developments__development--active'))
      if (el.dataset.filter === 'available-now') {
        availableNowElems.forEach((availableElem) => {
          availableElem.classList.add('page-new-developments__development--active')
        })
      } else if (el.dataset.filter === 'coming-soon') {
        comingSoonElems.forEach((elem) => {
          elem.classList.add('page-new-developments__development--active')
        })
      } else if (el.dataset.filter === 'sold-out') {
        soldOutElems.forEach((elem) => {
          elem.classList.add('page-new-developments__development--active')
        })
      }
      if (!el.classList.contains('page-new-developments__filter--active')) {
        document.querySelector('.page-new-developments__filter--active').classList.remove('page-new-developments__filter--active')
        el.classList.add('page-new-developments__filter--active')
      }
    })
  })

});
