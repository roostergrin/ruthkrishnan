<?php
/**
 * Displays the Blog navigation/categories on mobile.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<?php
  global $post;
  $active_slug = $post->post_name
?>

<div class="blog-navigation-mobile">
  <div class="blog-navigation-mobile__container">
    <div class="blog-navigation-mobile__categories">
      <div class="blog-navigation-mobile__category <?php if ($active_slug === 'blog') : echo 'blog-navigation-mobile__category--active'; endif; ?>">All</div>
      <div class="blog-navigation-mobile__category <?php if ($active_slug === 'market-updates') : echo 'blog-navigation-mobile__category--active'; endif; ?>">Market Updates</div>
      <div class="blog-navigation-mobile__category <?php if ($active_slug === 'housing-market') : echo 'blog-navigation-mobile__category--active'; endif; ?>">Housing Market</div>
      <div class="blog-navigation-mobile__category <?php if ($active_slug === 'selling-a-home') : echo 'blog-navigation-mobile__category--active'; endif; ?>">Selling a Home</div>
      <div class="blog-navigation-mobile__category <?php if ($active_slug === 'buying-a-home') : echo 'blog-navigation-mobile__category--active'; endif; ?>">Buying a Home</div>
      <div class="blog-navigation-mobile__category <?php if ($active_slug === 'before-and-after') : echo 'blog-navigation-mobile__category--active'; endif; ?>">Before & After</div>
      <div class="blog-navigation-mobile__category <?php if ($active_slug === 'case-studies') : echo 'blog-navigation-mobile__category--active'; endif; ?>">Case Studies</div>
      <div class="blog-navigation-mobile__category <?php if ($active_slug === 'webinars') : echo 'blog-navigation-mobile__category--active'; endif; ?>">Webinars</div>
      <div class="blog-navigation-mobile__category <?php if ($active_slug === 'success-stories') : echo 'blog-navigation-mobile__category--active'; endif; ?>">Success Stories</div>
      <div class="blog-navigation-mobile__category <?php if ($active_slug === 'homeowner') : echo 'blog-navigation-mobile__category--active'; endif; ?>">Homeowner</div>
    </div>

    <div class="blog-navigation-mobile__archive">Most Recent</div>

    <div id="blog-filter" class="blog-navigation-mobile__filter">
      <?php get_template_part('icons/filter'); ?>
    </div>
  </div>

  <div id="blog-fixed-nav" class="blog-navigation-mobile__fixed-nav">
    <div class="blog-navigation-mobile__container">
      <div class="blog-navigation-mobile__categories">
        <div class="blog-navigation-mobile__category <?php if ($active_slug === 'blog') : echo 'blog-navigation-mobile__category--active'; endif; ?>">All</div>
        <div class="blog-navigation-mobile__category <?php if ($active_slug === 'market-updates') : echo 'blog-navigation-mobile__category--active'; endif; ?>">Market Updates</div>
        <div class="blog-navigation-mobile__category <?php if ($active_slug === 'housing-market') : echo 'blog-navigation-mobile__category--active'; endif; ?>">Housing Market</div>
        <div class="blog-navigation-mobile__category <?php if ($active_slug === 'selling-a-home') : echo 'blog-navigation-mobile__category--active'; endif; ?>">Selling a Home</div>
        <div class="blog-navigation-mobile__category <?php if ($active_slug === 'buying-a-home') : echo 'blog-navigation-mobile__category--active'; endif; ?>">Buying a Home</div>
        <div class="blog-navigation-mobile__category <?php if ($active_slug === 'before-and-after') : echo 'blog-navigation-mobile__category--active'; endif; ?>">Before & After</div>
        <div class="blog-navigation-mobile__category <?php if ($active_slug === 'case-studies') : echo 'blog-navigation-mobile__category--active'; endif; ?>">Case Studies</div>
        <div class="blog-navigation-mobile__category <?php if ($active_slug === 'webinars') : echo 'blog-navigation-mobile__category--active'; endif; ?>">Webinars</div>
        <div class="blog-navigation-mobile__category <?php if ($active_slug === 'success-stories') : echo 'blog-navigation-mobile__category--active'; endif; ?>">Success Stories</div>
        <div class="blog-navigation-mobile__category <?php if ($active_slug === 'homeowner') : echo 'blog-navigation-mobile__category--active'; endif; ?>">Homeowner</div>
      </div>

      <div class="blog-navigation-mobile__archive">Most Recent</div>

      <div id="blog-filter-fixed" class="blog-navigation-mobile__filter">
        <?php get_template_part('icons/filter'); ?>
      </div>
    </div>
  </div>
  
  <div id="blog-filter-popup" class="blog-navigation-mobile__popup">
    <div class="blog-navigation-mobile__popup-overlay"></div>
    <div class="blog-navigation-mobile__popup-container">
      <div class="blog-navigation-mobile__popup-card">
        <div class="blog-navigation-mobile__popup-icon">
          <?php get_template_part('icons/tag'); ?>
        </div>
        <div class="blog-navigation-mobile__popup-categories">
          <a href="/blog" class="blog-navigation-mobile__popup-category <?php if ($active_slug === 'blog') : echo 'blog-navigation-mobile__popup-category--active'; endif; ?>">All</a>
          <a href="/blog/market-updates" class="blog-navigation-mobile__popup-category <?php if ($active_slug === 'market-updates') : echo 'blog-navigation-mobile__popup-category--active'; endif; ?>">Market Updates</a>
          <a href="/blog/housing-market" class="blog-navigation-mobile__popup-category <?php if ($active_slug === 'housing-market') : echo 'blog-navigation-mobile__popup-category--active'; endif; ?>">Housing Market</a>
          <a href="/blog/selling-a-home" class="blog-navigation-mobile__popup-category <?php if ($active_slug === 'selling-a-home') : echo 'blog-navigation-mobile__popup-category--active'; endif; ?>">Selling a Home</a>
          <a href="/blog/buying-a-home" class="blog-navigation-mobile__popup-category <?php if ($active_slug === 'buying-a-home') : echo 'blog-navigation-mobile__popup-category--active'; endif; ?>">Buying a Home</a>
          <a href="/blog/before-and-after" class="blog-navigation-mobile__popup-category <?php if ($active_slug === 'before-and-after') : echo 'blog-navigation-mobile__popup-category--active'; endif; ?>">Before & After</a>
          <a href="/blog/case-studies" class="blog-navigation-mobile__popup-category <?php if ($active_slug === 'case-studies') : echo 'blog-navigation-mobile__popup-category--active'; endif; ?>">Case Studies</a>
          <a href="/blog/webinars" class="blog-navigation-mobile__popup-category <?php if ($active_slug === 'webinars') : echo 'blog-navigation-mobile__popup-category--active'; endif; ?>">Webinars</a>
          <a href="/blog/success-stories" class="blog-navigation-mobile__popup-category <?php if ($active_slug === 'success-stories') : echo 'blog-navigation-mobile__popup-category--active'; endif; ?>">Success Stories</a>
          <a href="/blog/homeowner" class="blog-navigation-mobile__popup-category <?php if ($active_slug === 'homeowner') : echo 'blog-navigation-mobile__popup-category--active'; endif; ?>">Homeowner</a>
        </div>
      </div>

      <div class="blog-navigation-mobile__popup-card">
          <div class="blog-navigation-mobile__popup-icon">
            <?php get_template_part('icons/clock'); ?>
          </div>
          <div class="blog-navigation-mobile__popup-archive">
            <?php get_template_part('template-parts/blog/blog-archive-mobile'); ?>
          </div>
      </div>
    </div>
  </div>

</div>