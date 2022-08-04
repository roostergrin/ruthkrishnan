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

<?php if (!empty(get_field('field_62e9a3ed06487'))) : ?>
  <div>
    <h2 class="single-neighborhoods-content__title"><?php echo the_title(); ?> Neighborhood Home Sales and Price Data</h2>
    <p class="single-neighborhoods-content__title">Pulled from MLS</p>
    <div id="wrapper" data-hjisingleyearly='<?php echo json_encode(get_field('field_62e9a3ed06487')); ?>'></div>
  </div>
<?php endif; ?>