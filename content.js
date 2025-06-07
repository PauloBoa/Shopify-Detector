(function () {
  function checkIfShopify(html) {
    const shopifyMetaPatterns = [
      /<meta[^>]+name=["']shopify-digital-wallet["'][^>]*>/i,
      /<meta[^>]+name=["']shopify-checkout-api-token["'][^>]*>/i,
      /<meta[^>]+name=["']shopify-section-id["'][^>]*>/i,
      /cdn\.shopify\.com/i,
      /window\.Shopify\s*=/i,
      /shopify-section/i,
    ];

    const isShopify = shopifyMetaPatterns.some((pattern) => pattern.test(html));

    if (isShopify) {
      console.log("✅ This page is likely a Shopify store.");
    } else {
      console.log("❌ This page does NOT appear to be a Shopify store.");
    }
  }

  const html = document.documentElement.outerHTML;
  checkIfShopify(html);
})();
