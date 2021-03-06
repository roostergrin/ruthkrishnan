<?php
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />

  <?php wp_head(); ?>

  <!-- schema.org structured data -->
  <script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "RealEstateAgent",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94109",
      "streetAddress": "1400 Van Ness Ave"
    },
    "description": "The Krishnan Team is ranked in the top 10 SF real estate agents in San Francisco. See how we can help you buy or sell a home in a competitive market.",
    "name": "Ruth Krishnan - San Francisco Real Estate",
    "telephone": "(415) 735-5867"
  }
  </script>

  <!-- Google Optimize -->
  <script src="https://www.googleoptimize.com/optimize.js?id=GTM-T7VQ4QK"></script>
  <!-- END Google Optimize -->

  <!-- Google Tag Manager -->
  <script>
  (function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
      'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-PWL6QFB');
  </script>

  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWL6QFB" height="0" width="0"
      style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager -->

  <!-- Global site tag (gtag.js) - Google Ads: 781116828 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-781116828"></script>
  <script>
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'AW-781116828');
  </script>
  <!-- END  Google Ads: 781116828 -->

  <meta name="google-site-verification" content="_pBsYFRQpzuyLZ5YEZtV7ml5WTfpe-YIo50CdNjp13o" />
  <meta name="google-site-verification" content="SRI-_fG3Jco8hCZr3Ct4j-hCLEdLCtXZ4sklfZvCK_o" />

  <meta name="facebook-domain-verification" content="yx6e19kqb3vmkha8tdys2575r3z7vo" />

  <!-- Facebook Pixel Code -->
  <script defer>
  ! function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
  }(window, document, 'script',
    'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1871650279749281');
  fbq('track', 'PageView');
  </script>

  <noscript>
    <img height="1" width="1" alt="" src="https://www.facebook.com/tr?id=1871650279749281&ev=PageView&amp;noscript=1" />
  </noscript>
  <!-- End Facebook Pixel Code -->

  <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>

  <?php if ( is_page_template('page-thankyou.php') ) ?>

  <script async="" type="text/javascript">
  var d = document,
    s = "https://a.smtrk.net/trk?t=s&i=6001fc9b3c0c761d8c2a6caf&p=t,i,x&s=ee803f1c9de403c3f27305c30b62fa72&r=" + escape(
      d.referrer) + "&u=" + escape(d.URL),
    n = d.createElement("script"),
    e = d.
  getElementsByTagName("script")[0];
  n.async = !0, n.src = s, e.
  parentNode.insertBefore(n, e);
  </script>

</head>

<body>

  <?php get_template_part('template-parts/navigation/navigation'); ?>