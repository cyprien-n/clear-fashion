<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>👕 Clear Fahion | Environmentally & human-friendly clothes</title>
  </head>
  <body>
    <h1>Clear fashion</h1>
    <section id="options">
      <div id="show">
        <label for="show-select">Show:</label>
        <select name="show" id="show-select">
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="48">48</option>
        </select>
      </div>
      <div id="page">
        <label for="page-select">Go to page:</label>
        <select name="page" id="page-select"> </select>
      </div>
      <div id="filters">
        <div id="rp">
        <input type="checkbox" id="reasonably-select" name="reasonably priced" unchecked>reasonably priced</input>
        </div>
      <span></span>
        <div id="rr">
          <input type="checkbox" id="recently-select" name="recently released" unchecked>recently released</input>
        </div>
        <div id="fav">
          <input type="checkbox" id="favorite-select" name="favorite products" unchecked>my favorite products</input>
          </div>
        <div id="brand">
          <label for="brand-select">By brands:</label>
          <select name="brand" id="brand-select"> </select>
        </div>
      </div>
      <div id="sort">
        <label for="sort-select">Sort:</label>
        <select name="sort" id="sort-select">
          <option value="price-asc">Cheaper</option>
          <option value="price-desc">Expensive</option>
          <option value="date-asc">Recently released</option>
          <option value="date-desc">Anciently released</option>
        </select>
      </div>
    </section>
    <section id="indicators">
      <h2>Indicators</h2>
      <div>
        <span>Number of products</span>
        <span id="nbProducts">0</span>
      </div>
      <div>
        <span>Number of brands</span>
        <span id="nbBrands">0</span>
      </div>
      <div>
        <span>Number of new products</span>
        <span id="nbRecentProducts">0</span>
      </div>
      <div>
        <span>p50 price value</span>
        <span id="p50">0</span>
      </div>
      <div>
        <span>p90 price value</span>
        <span id="p90">0</span>
      </div>
      <div>
        <span>p95 price value</span>
        <span id="p95">0</span>
      </div>
      <div>
        <span>Last released date</span>
        <span id="lastReleasedDate">2020-01-01</span>
      </div>
    </section>
    <section id="products"></section>
    <script type="text/javascript" charset="UTF-8" src="portfolio.js"></script>
  </body>
</html>