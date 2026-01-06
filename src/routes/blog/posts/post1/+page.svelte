<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>What is the DCA Simulator? | DCA Simulator Blog</title>
  <meta name="description" content="A client-side, privacy-focused Dollar-Cost Averaging tool that simulates weekly or monthly crypto investments using a linear price growth model." />
  <meta property="og:title" content="What is the DCA Simulator? | DCA Simulator Blog" />
  <meta property="og:description" content="Learn how this stateless web utility computes precise DCA outcomes for crypto with interactive results, table filtering, and CSV export—all running in your browser." />
  <meta property="og:url" content="{base}/blog/posts/post1" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout"  style="padding-top: 150px;">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>What is the DCA Simulator?</p>
  </div>

  <article class="prose">
    <h1>What is the DCA Simulator?</h1>
   
    <p class="post-meta">Published: January 06, 2026</p>
   
    <p>The DCA Simulator is a fully client-side web utility designed to help cryptocurrency investors model Dollar-Cost Averaging strategies. It allows users to simulate regular weekly or monthly purchases of an asset over a defined period, using a straightforward linear price growth model. All calculations happen directly in the browser, ensuring complete privacy—no data is sent to any server.</p>
   
    <h2>Core Functionality</h2>
    <p>Users start on the home page where they input key parameters: the investment amount per period, frequency (weekly or monthly), number of periods, initial asset price, and expected annual growth rate. The tool validates inputs for positive values and then navigates to a dedicated results page by encoding these parameters in the URL query string. This stateless approach means simulations can be shared via links or bookmarked without any backend storage.</p>
   
    <h3>Key Features</h3>
    <ul>
      <li>Precise calculation of units bought each period based on prorated price growth</li>
      <li>Summary metrics including total invested, total units acquired, average cost per unit, final asset price, and portfolio value</li>
      <li>Interactive per-period breakdown in a responsive table with live search filtering</li>
      <li>Toggle to hide or show the detailed table for quick summary views</li>
      <li>One-click CSV export of summary and all period details for offline analysis</li>
    </ul>
   
    <h3>How the Simulation Works</h3>
    <p>The core logic resides in a single JavaScript function that iterates through each period. For every buy, it calculates the current price by applying the prorated portion of the annual growth rate. Units purchased are then the fixed investment amount divided by that period's price. Totals accumulate progressively, yielding accurate averages and final values. This linear model provides a clear, deterministic projection ideal for educational purposes and strategy comparison.</p>
   
    <h2>Why Use This Tool?</h2>
    <p>In volatile crypto markets, Dollar-Cost Averaging helps mitigate timing risks by spreading purchases over time. This simulator lets users experiment with different scenarios instantly—adjusting growth rates from zero (flat price) to high returns—without any external data feeds or accounts. It is particularly useful for validating concepts like how average cost lowers compared to lump-sum investing in rising markets.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>What price model does it use?</summary>
      <p>A simple linear growth model where price increases steadily based on the annual rate, prorated per period (weekly: divided by 52, monthly: by 12).</p>
    </details>
    <details>
      <summary>Can I simulate real historical data?</summary>
      <p>No, it uses a deterministic linear projection rather than historical prices, focusing on hypothetical scenarios.</p>
    </details>
    <details>
      <summary>Is any data stored or tracked?</summary>
      <p>Absolutely not—everything computes client-side, and URL parameters are the only persistence mechanism.</p>
    </details>
   
    <p class="italic-note">This tool empowers informed DCA planning with transparent, reproducible results.</p>
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