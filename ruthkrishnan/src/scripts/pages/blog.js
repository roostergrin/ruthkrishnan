import { blogArchives } from '../resources/blog-archives'
import { blogArchivesMobile } from '../resources/blog-archives-mobile'
import { blogNavMobile } from '../resources/blog-navigation-mobile';

document.addEventListener('DOMContentLoaded', function () {
  blogNavMobile();
  blogArchives();
  blogArchivesMobile();
  
  const postRows = document.querySelectorAll('.page-blog-main__posts-row');

  postRows.forEach((el, i) => {
    if (i % 2 !== 0) {
      el.classList.add('page-blog-main__posts-row--alt');
    }
  });

});
