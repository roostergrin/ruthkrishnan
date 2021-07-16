<?php
/**
 * Displays Covid Rules section on listing pages.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="listings-covid">
  <div class="listings-covid__container">
      <h2 class="listings-covid__title">All visitors to the property must abide by the following rules.</h2>
      <div class="listings-covid__rules">
        <div class="listings-covid__rules-container">
          <div class="listings-covid__rule">
            <div class="listings-covid__rule-container">
              <?php get_template_part('icons/mask', null, array( 'class' => 'listings-covid__rule-icon')); ?>
              <div class="listings-covid__rule-text">Wear a protective face covering</div>
            </div>
          </div>
          <div class="listings-covid__rule">
            <div class="listings-covid__rule-container">
              <?php get_template_part('icons/hand-wash', null, array( 'class' => 'listings-covid__rule-icon')); ?>
              <div class="listings-covid__rule-text">Wash your hands with soap and water or use hand sanitizer</div>
            </div>
          </div>
          <div class="listings-covid__rule">
            <div class="listings-covid__rule-container">
              <?php get_template_part('icons/social-distance', null, array( 'class' => 'listings-covid__rule-icon')); ?>
              <div class="listings-covid__rule-text">Practice social distancing by keeping at least six feet between yourself and others </div>
            </div>
          </div>
          <div class="listings-covid__rule">
            <div class="listings-covid__rule-container listings-covid__rule-container--large">
              <?php get_template_part('icons/no-touch', null, array( 'class' => 'listings-covid__rule-icon')); ?>
              <div class="listings-covid__rule-text">Avoid touching knobs, faucets, toilets and toilet handles, counters, light switches, and other such items</div>
            </div>
          </div>
          <div class="listings-covid__rule">
            <div class="listings-covid__rule-container listings-covid__rule-container--large">
              <?php get_template_part('icons/garbage', null, array( 'class' => 'listings-covid__rule-icon')); ?>
              <div class="listings-covid__rule-text">After viewing, discard any disposable gloves, face coverings, or shoe coverings worn during the visit</div>
            </div>
          </div>
        </div>
      </div>
      <div class="listings-covid__text-container">
        <div class="listings-covid__text">If you are currently afflicted with or within the last 14 day, have been contact with someone afllicted with Covid-19, or have any symptoms such as fever, cough or difficulty breathing, please do not enter the property.</div>
      </div>
  </div>
</div>