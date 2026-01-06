<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Filtering & Exporting Long Simulations (520+ Periods) | DCA Simulator Blog</title>
  <meta name="description" content="Master the interactive results table: live period search, visibility toggle, and CSV export for multi-year DCA simulations." />
  <meta property="og:title" content="Filtering & Exporting Long Simulations (520+ Periods) | DCA Simulator Blog" />
  <meta property="og:description" content="Handle hundreds of periods efficiently with instant search filtering and full data export for deeper analysis." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout"  style="padding-top: 150px;">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Filtering & Exporting Long Simulations (520+ Periods)</p>
  </div>

  <article class="prose">
    <h1>Filtering & Exporting Long Simulations (520+ Periods)</h1>
   
    <p class="post-meta">Published: January 06, 2026</p>
   
    <p>The DCA Simulator excels at handling extended investment horizons, supporting up to one thousand periods while maintaining sub-second performance. The interactive results table makes exploring long-term weekly or monthly plans intuitive and productive.</p>
   
    <h2>Live Period Search</h2>
    <p>Type any number in the search field and the table instantly filters to matching periods. Partial matching allows typing twenty to see periods twenty, one hundred twenty, two hundred twenty, and so on. This is perfect for jumping to specific months or years in decade-long simulations.</p>
   
    <h3>Table Controls</h3>
    <ul>
      <li>Search field with clear button for quick reset</li>
      <li>Visibility toggle to hide the table when only summary metrics are needed</li>
      <li>Live badge showing filtered versus total period count</li>
      <li>Responsive design that works smoothly on mobile devices</li>
    </ul>
   
    <h3>CSV Export Feature</h3>
    <p>One click downloads a complete file containing both the summary metrics and every individual period row. The export includes headers and clean formatting, ready for import into spreadsheets or data tools. This enables offline charting, custom calculations, or archiving of specific scenarios.</p>
   
    <h2>Performance in Long Runs</h2>
    <p>Even at five hundred twenty weekly periods—representing ten full years—the calculation and table rendering complete almost instantly. The lightweight JavaScript core ensures smooth experience without pagination or loading delays. Search filtering remains responsive regardless of dataset size.</p>
   
    <h2>Practical Use Cases</h2>
    <p>Long simulations are valuable for retirement planning projections, comparing decade-long weekly versus monthly strategies, or stress-testing extreme growth assumptions. Exporting data allows combining multiple runs or building personal dashboards outside the browser.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>How many periods can I simulate?</summary>
      <p>Up to one thousand periods with full performance—equivalent to nearly twenty years monthly or ten years weekly.</p>
    </details>
    <details>
      <summary>Does filtering affect the summary?</summary>
      <p>No—the summary always reflects the complete simulation; filtering only changes table visibility.</p>
    </details>
    <details>
      <summary>What format is the CSV file?</summary>
      <p>Standard comma-separated values with summary rows followed by detailed period data.</p>
    </details>
   
    <p class="italic-note">Handle years of data with ease and export insights whenever needed.</p>
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