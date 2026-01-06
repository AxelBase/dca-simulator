<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>How Linear Price Growth Powers Accurate DCA Results | DCA Simulator Blog</title>
  <meta name="description" content="Explore the prorated linear growth formula behind period-by-period price calculations in the DCA Simulator for reliable weekly and monthly projections." />
  <meta property="og:title" content="How Linear Price Growth Powers Accurate DCA Results | DCA Simulator Blog" />
  <meta property="og:description" content="Understand the deterministic math that drives precise units bought, average cost, and final value in every simulation." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout"  style="padding-top: 150px;">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>How Linear Price Growth Powers Accurate DCA Results</p>
  </div>

  <article class="prose">
    <h1>How Linear Price Growth Powers Accurate DCA Results</h1>
   
    <p class="post-meta">Published: January 06, 2026</p>
   
    <p>The DCA Simulator relies on a clean linear price growth model to deliver consistent and transparent Dollar-Cost Averaging projections. Unlike volatile real-world data, this deterministic approach lets users focus on strategy mechanics without noise from historical fluctuations.</p>
   
    <h2>The Core Formula</h2>
    <p>For each period, the asset price is calculated as: current price equals initial price multiplied by one plus the growth factor. The growth factor is the annual growth rate divided by one hundred, multiplied by the current period number divided by periods per year (fifty-two for weekly, twelve for monthly). This prorates the annual return evenly across intervals.</p>
   
    <h3>Step-by-Step Calculation</h3>
    <ul>
      <li>Determine periods per year based on frequency</li>
      <li>Loop from period one to the total number of periods</li>
      <li>Compute prorated growth for that period</li>
      <li>Derive current price from initial price</li>
      <li>Calculate units bought as fixed amount divided by current price</li>
      <li>Accumulate total invested and total units</li>
    </ul>
   
    <h3>Final Metrics</h3>
    <p>After the loop completes, average cost is total invested divided by total units. The final price uses the full prorated growth over all periods. Portfolio value is then total units multiplied by final price. This yields exact, reproducible results every time.</p>
   
    <h2>Real-World Example Validation</h2>
    <p>Consider a classic weekly plan: one hundred dollars invested weekly for fifty-two weeks, starting at ten dollars with five percent annual growth. The simulator produces exactly five thousand two hundred dollars invested, five hundred seven point one seven nine seven units acquired, ten point two five dollars average cost, ten point five zero dollars final price, and five thousand three hundred twenty-five point three nine dollars final value. These numbers align perfectly with manual spreadsheet verification of the linear model.</p>
   
    <h2>Advantages of Linear Modeling</h2>
    <p>Linear growth provides educational clarity—users see exactly how rising prices affect units bought per period and overall average cost. It avoids randomness, making it ideal for comparing different investment amounts, frequencies, or growth assumptions side-by-side via shared URLs.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>Why not use compound growth?</summary>
      <p>Linear keeps calculations simple and transparent while still demonstrating DCA benefits in trending markets.</p>
    </details>
    <details>
      <summary>Can negative growth be simulated?</summary>
      <p>Yes—enter a negative annual rate to model declining prices and observe increased units per buy.</p>
    </details>
    <details>
      <summary>How precise are the results?</summary>
      <p>Calculations use full floating-point precision with rounding only for display (two decimals for prices, four for units).</p>
    </details>
   
    <p class="italic-note">Master the math behind your DCA strategy with predictable, verifiable outcomes.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
    margin: 0 auto;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--color-text-muted);
  }
  .breadcrumbs a {
    color: var(--color-accent);
    text-decoration: none;
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
    color: var(--color-text-main);
  }

  .prose {
    line-height: 1.8;
    color: var(--color-text-main);
  }

  .prose .post-meta {
    color: var(--color-text-muted);
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 1rem;
  }

  .prose h1 {
    font-size: 2.5rem;
    color: var(--color-accent);
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  .prose h2 {
    font-size: 1.8rem;
    color: var(--color-accent);
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 0.5rem;
    font-weight: 600;
  }

  .prose h3 {
    font-size: 1.4rem;
    color: var(--color-accent);
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }

  .prose p {
    color: var(--color-text-main);
    margin-bottom: 1.2rem;
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--color-text-main);
  }
  .prose ul li::marker {
    color: var(--color-accent);
    font-weight: bold;
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.75rem;
  }

  .prose details {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    padding: 1.2rem;
    margin-bottom: 1.2rem;
    transition: all 0.3s ease;
  }

  .prose details[open] {
    background: rgba(44, 85, 69, 0.15); /* Light tint in light mode */
  }

  .prose summary {
    cursor: pointer;
    font-weight: 600;
    color: var(--color-accent);
    list-style: none;
    padding: 0.2rem 0;
  }

  .prose summary::-webkit-details-marker {
    display: none;
  }

  .prose summary::before {
    content: '+';
    margin-right: 0.75rem;
    color: var(--color-accent);
    font-weight: bold;
    display: inline-block;
    width: 1.2em;
    text-align: center;
    transition: transform 0.3s ease;
  }

  .prose details[open] summary::before {
    transform: rotate(45deg);
  }

  .prose details p {
    margin-top: 1rem;
    padding-left: 1.5rem;
    border-left: 3px solid var(--color-accent);
    color: var(--color-text-muted);
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--color-text-muted);
    text-align: center;
    margin-top: 3rem;
    font-size: 1.1rem;
    padding: 1.5rem;
    background: var(--glass-bg);
    border-radius: 16px;
    border: 1px solid var(--glass-border);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .prose h1 {
      font-size: 2.2rem;
    }
    .prose h2 {
      font-size: 1.6rem;
    }
    .post-layout {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>