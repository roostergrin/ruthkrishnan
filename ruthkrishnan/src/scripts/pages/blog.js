document.addEventListener('DOMContentLoaded', function () {

    const postRows = document.querySelectorAll('.page-blog-main__posts-row');

    postRows.forEach((el, i) => {
      if (i % 2 !== 0) {
        el.classList.add('page-blog-main__posts-row--alt');
      }
    });

});
