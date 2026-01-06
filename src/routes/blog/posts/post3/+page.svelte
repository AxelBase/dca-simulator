<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Setting Up Your First Weekly DCA Plan | DCA Simulator Blog</title>
  <meta name="description" content="Step-by-step tutorial for creating a weekly DCA simulation with one hundred dollars over fifty-two weeks at five percent growth—matching verified Sample A results." />
  <meta property="og:title" content="Setting Up Your First Weekly DCA Plan | DCA Simulator Blog" />
  <meta property="og:description" content="Beginner guide to input parameters, running simulations, and interpreting summary metrics plus interactive table features." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout" v>
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Setting Up Your First Weekly DCA Plan</p>
  </div>

  <article class="prose">
    <h1>Setting Up Your First Weekly DCA Plan</h1>
   
    <p class="post-meta">Published: January 06, 2026</p>
   
    <p>Getting started with the DCA Simulator is straightforward. This beginner guide walks through creating a typical weekly investment plan and understanding the output, using the widely referenced Sample A scenario as our example.</p>
   
    <h2>Entering Parameters</h2>
    <p>On the home page, fill in the form fields. For a standard one-year weekly plan: set investment amount per period to one hundred dollars, frequency to weekly, number of periods to fifty-two, initial asset price to ten dollars, and annual growth rate to five percent. These defaults are pre-filled for quick testing. The tool validates all inputs must be positive numbers before proceeding.</p>
   
    <h3>Running the Simulation</h3>
    <ul>
      <li>Click the Run Simulation button</li>
      <li>The app encodes parameters into the URL query string</li>
      <li>Navigates to the results page where calculations execute instantly in the browser</li>
      <li>No page reload needed—results appear immediately</li>
    </ul>
   
    <h3>Reading the Summary</h3>
    <p>The summary card displays five key metrics. For our example: total invested five thousand two hundred dollars, total units acquired five hundred seven point one seven nine seven, average cost per unit ten point two five dollars, final asset price ten point five zero dollars, and final portfolio value five thousand three hundred twenty-five point three nine dollars. This shows the benefit of DCA in a moderately rising market.</p>
   
    <h2>Exploring the Interactive Table</h2>
    <p>Below the summary is a detailed per-period breakdown table. Use the search field to filter by any period number instantly—typing twenty-six jumps straight to mid-year data. Toggle the table visibility for mobile or quick checks, and download everything as CSV for spreadsheet analysis. The table lists period number, asset price, units bought, and amount invested for full transparency.</p>
   
    <h2>Tips for Beginners</h2>
    <p>Start with small changes: try zero percent growth to see flat-price behavior, or increase to one hundred percent annual growth to observe aggressive accumulation. Share results by copying the URL—anyone can view the exact same simulation without accounts.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>What if I enter invalid values?</summary>
      <p>An alert prevents submission, requiring positive numbers for all numeric fields.</p>
    </details>
    <details>
      <summary>Can I change frequency mid-plan?</summary>
      <p>No—each simulation uses one consistent frequency, but you can run separate monthly vs weekly comparisons.</p>
    </details>
    <details>
      <summary>How long can simulations be?</summary>
      <p>Up to one thousand periods with sub-second computation thanks to lightweight JavaScript.</p>
    </details>
   
    <p class="italic-note">Start simulating today and build confidence in your DCA approach.</p>
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