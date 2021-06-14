<?php
/**
 * Displays the Blog navigation/categories.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>
<?php 
  global $post;
  $active_slug = $post->post_name;
?>

<div class="blog-navigation">
  <div class="blog-navigation__categories-container">
    <div class="blog-navigation__categories">
      <a href="/blog" class="blog-navigation__category <?php if ($active_slug === 'blog') : echo 'blog-navigation__category--active'; endif; ?>">All</a>
      <a href="/blog/market-updates" class="blog-navigation__category <?php if ($active_slug === 'market-updates') : echo 'blog-navigation__category--active'; endif; ?>">Market Updates</a>
      <a href="/blog/housing-market" class="blog-navigation__category <?php if ($active_slug === 'housing-market') : echo 'blog-navigation__category--active'; endif; ?>">Housing Market</a>
      <a href="/blog/selling-a-home" class="blog-navigation__category <?php if ($active_slug === 'selling-a-home') : echo 'blog-navigation__category--active'; endif; ?>">Selling a Home</a>
      <a href="/blog/buying-a-home" class="blog-navigation__category <?php if ($active_slug === 'buying-a-home') : echo 'blog-navigation__category--active'; endif; ?>">Buying a Home</a>
      <a href="/blog/before-and-after" class="blog-navigation__category <?php if ($active_slug === 'before-and-after') : echo 'blog-navigation__category--active'; endif; ?>">Before & After</a>
      <a href="/blog/case-studies" class="blog-navigation__category <?php if ($active_slug === 'case-studies') : echo 'blog-navigation__category--active'; endif; ?>">Case Studies</a>
      <a href="/blog/webinars" class="blog-navigation__category <?php if ($active_slug === 'webinars') : echo 'blog-navigation__category--active'; endif; ?>">Webinars</a>
      <a href="/blog/success-stories" class="blog-navigation__category <?php if ($active_slug === 'success-stories') : echo 'blog-navigation__category--active'; endif; ?>">Success Stories</a>
      <a href="/blog/homeowner" class="blog-navigation__category <?php if ($active_slug === 'homeowner') : echo 'blog-navigation__category--active'; endif; ?>">Homeowner</a>
    </div>

  </div>
</div>