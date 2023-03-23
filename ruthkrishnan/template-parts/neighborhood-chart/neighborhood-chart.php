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
    <a data-filter='Average Sales Price' data-text='The average sales price is the aggregate data of quarterly sale prices divided by the amount of sales in that&nbsp;quarter.' tabindex="0" role="button" class="single-neighborhoods-chart__filter single-neighborhoods-chart__filter--active">Average Sales Price</a>
    <a data-filter='Median Sales Price' data-text='The median sales price is the quarterly midpoint. Half of the listed prices were higher and half were&nbsp;lower.' tabindex="0" role="button" class="single-neighborhoods-chart__filter">Median Sales Price</a>
    <a data-filter='Lowest Sales Price' data-text='The lowest sale price in the neighborhood for each&nbsp;quarter.'tabindex="0" role="button" class="single-neighborhoods-chart__filter">Lowest Sales Price</a>
  </div>
  <div class="single-neighborhoods-chart__filters">
    <a data-filter='Highest Sales Price' data-text='The highest sale price in the neighborhood for each&nbsp;quarter.' tabindex="0" role="button" class="single-neighborhoods-chart__filter">Highest Sales Price</a>
    <a data-filter='Sale Price per Sq Foot' data-text='The average sales price divided by the average square&nbsp;footage.' tabindex="0" role="button" class="single-neighborhoods-chart__filter">Sale Price per Sq ft</a>
    <a data-filter='Sale to List Price Ratio' data-text='The average sales price divided by the average listing price tells you how much people pay above or below list price&nbsp;quarterly.' tabindex="0" role="button" class="single-neighborhoods-chart__filter">Sale to List Price</a>
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
        <p id="graphText">The highest sale price in the neighborhood for each&nbsp;quarter.</p>
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
    <?php if (!empty(get_field('single_data')) && !empty(get_field('condo_data'))) : ?>
      <div class="single-neighborhoods-chart__graph-container">
        <canvas id="neighborhoodChart">
          <div id="quarterlyTable"></div>
        </canvas>
      </div>
    <?php endif; ?>
  </div>
</div>