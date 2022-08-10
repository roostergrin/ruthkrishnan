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


<div class="single-neighborhoods-chart__filters-container">
  <div class="single-neighborhoods-chart__filters">
    <a data-filter='Average Sales Price' tabindex="0" role="button" class="single-neighborhoods-chart__filter single-neighborhoods-chart__filter--active">Average Sales Price</a>
    <a data-filter='Median Sales Price' tabindex="0" role="button" class="single-neighborhoods-chart__filter">Median Sales Price</a>
    <a data-filter='Lowest Sales Price' tabindex="0" role="button" class="single-neighborhoods-chart__filter">Lowest Sales Price</a>
  </div>
  <div class="single-neighborhoods-chart__filters">
    <a data-filter='Highest Sales Price' tabindex="0" role="button" class="single-neighborhoods-chart__filter">Highest Sales Price</a>
    <a data-filter='List Price per Sq Foot' tabindex="0" role="button" class="single-neighborhoods-chart__filter">List Price per Sq ft</a>
    <a data-filter='Sale to List Price Ratio' tabindex="0" role="button" class="single-neighborhoods-chart__filter">Sale to List Price</a>
  </div>
</div>

<div class="single-neighborhoods-chart__container">
  <div class="single-neighborhoods-chart__graph">
    <div class="single-neighborhoods-chart__info">
      <div class="single-neighborhoods-chart__title">
        <h3 id="graphTitle">Average Sales Price</h3>
        <hr />
      </div>
      <div class="single-neighborhoods-chart__details">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices sed fringilla pellentesque malesuada condimentum nulla nulla. Vitae, ultrices scelerisque</p>
        <hr />
      </div>
      <div class="single-neighborhoods-chart__key">
        <div class="keys__container">
          <p class="keys__label">key</p>

          <div class="keys__key">
            <div class="keys__circle keys__circle--single"></div>
            <p>single&nbsp;family&nbsp;home</p>
          </div>
          <div class="keys__key">
            <div class="keys__circle keys__circle--condo"></div>
            <p>condominium</p>
          </div>
        </div>

        <hr />
      </div>
    </div>
    <div class="single-neighborhoods-chart__graph-container">
      <canvas id="neighborhoodChart"></canvas>
    </div>
  </div>
</div>