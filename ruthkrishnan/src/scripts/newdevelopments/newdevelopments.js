import { setMap } from '../../resources/gmap-development'

document.addEventListener('DOMContentLoaded', function () {
  const availableNowElems = document.querySelectorAll('.page-new-developments__development--available-now')
  const comingSoonElems = document.querySelectorAll('.page-new-developments__development--coming-soon')
  const soldOutElems = document.querySelectorAll('.page-new-developments__development--sold-out')

  setMap('available-now');
  availableNowElems.forEach((el) => {
    el.classList.add('page-new-developments__development--active')
  })
  
  const filtersArr = document.querySelectorAll('.page-new-developments__filter')

  filtersArr.forEach((el, i) => {
    el.addEventListener('click', () => {
      setMap(el.dataset.filter)
      const allDevelopments = document.querySelectorAll('.page-new-developments__development')
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
    })
  })

});
