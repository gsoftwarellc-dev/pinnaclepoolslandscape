import Script from "next/script";

import { business } from "@/data/business";

/**
 * Google Tag Manager container for the whole site. The container ID is a public
 * identifier that ships in the page HTML, so it lives with the other site
 * constants rather than in an env var.
 *
 * Tags themselves (GA4, conversion pixels, call tracking) are configured inside
 * the GTM container, not here — this only loads the container.
 */
export default function GoogleTagManager() {
  const gtmId = business.gtmId;

  if (!gtmId) return null;

  return (
    <Script
      id="gtm-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
      }}
    />
  );
}

/**
 * The GTM `<noscript>` iframe fallback, which must sit at the top of `<body>`.
 * Kept separate from the script so each can be placed where GTM expects it.
 */
export function GoogleTagManagerNoScript() {
  const gtmId = business.gtmId;

  if (!gtmId) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
