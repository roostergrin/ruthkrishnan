<?php

/**
 * Displays image gallery.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>
<!-- If this is ever refactored you can use this  -->
<!-- https://gridjs.io/docs/integrations/laravel -->
<script src="https://unpkg.com/gridjs/dist/gridjs.umd.js"></script>

<?php if (!empty(get_field('single_yearly'))) : ?>
  <div class="neighborhood-data-table">
    <div class="neighborhood-data-table__background" aria-hidden='true'>
      <img src="https://d1nkwan2sp5tun.cloudfront.net/wp-content/uploads/2021/06/10-column-bg.jpg.webp" class="neighborhood-data-table__background-image entered lazyloaded" alt="Neighborhoods" data-lazy-srcset="https://d1nkwan2sp5tun.cloudfront.net/wp-content/uploads/2021/06/10-column-bg.jpg.webp 1280w,https://d1nkwan2sp5tun.cloudfront.net/wp-content/uploads/2021/06/10-column-bg-768x343.jpg.webp 768w" data-lazy-sizes="(max-width: 1280px) 100vw, 1280px" data-lazy-src="https://d1nkwan2sp5tun.cloudfront.net/wp-content/uploads/2021/06/10-column-bg.jpg.webp" data-ll-status="loaded" sizes="(max-width: 1280px) 100vw, 1280px" srcset="https://d1nkwan2sp5tun.cloudfront.net/wp-content/uploads/2021/06/10-column-bg.jpg.webp 1280w,https://d1nkwan2sp5tun.cloudfront.net/wp-content/uploads/2021/06/10-column-bg-768x343.jpg.webp 768w">
    </div>
    <div class="neighborhood-data-table__container">
      <h2 class="neighborhood-data-table__title"><?php echo the_title(); ?> Neighborhood <span id="residenceType">Home</span> Sales and Price Data</h2>
      <p class="neighborhood-data-table__subtitle">Pulled from MLS (Yearly)</p>
      <div class="neighborhood-data-table__wrapper">
        <p class="neighborhood-data-table__scroll-indicator">>></p>
        <div id="wrapper" data-hjisingleyearly='<?php echo get_field('single_yearly'); ?>' data-hjicondoyearly='<?php echo get_field('condo_yearly'); ?>' ></div>
      </div>
    </div>
  </div>
<?php endif; ?>
