<!-- src/routes/blog/+page.svelte (Blog Index) -->
<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'What is the DCA Simulator?', description: 'Discover how this client-side utility simulates Dollar-Cost Averaging for weekly and monthly crypto investments with linear price growth modeling.' },
    { href: '/blog/posts/post2', title: 'How Linear Price Growth Powers Accurate DCA Results', description: 'Deep dive into the prorated annual growth formula that calculates per-period prices for realistic weekly/monthly buy simulations.' },
    { href: '/blog/posts/post3', title: 'Setting Up Your First Weekly DCA Plan', description: 'Step-by-step guide to input parameters like $100 weekly buys over 52 periods starting at $10 with 5% growth—stateless URL-based navigation.' },
    { href: '/blog/posts/post4', title: 'Interpreting DCA Metrics: Average Cost vs Final Value', description: 'Break down total units acquired, average cost per unit, and portfolio gains from the summary table—validated against Sample A (507.1797 units at $10.25 avg).' },
    { href: '/blog/posts/post5', title: 'Filtering & Exporting Long Simulations (520+ Periods)', description: 'Master the interactive table: live period search (e.g., "26"), show/hide toggle, and CSV download for edge cases up to 1000 periods under 500ms.' },
    { href: '/blog/posts/post6', title: 'Stateless Design for GitHub Pages Deployment', description: 'How URL query params (amount=100&frequency=weekly) enable full client-side recompute—no prerender errors, adapter-static build to /docs folder.' },
    { href: '/blog/posts/post7', title: 'Validating Results: Zero Growth & High-Return Tests', description: 'Reproduce exact outcomes like Sample C ($5200 invested = 208 units at $25 flat) and stress test 100% annual growth for final value accuracy.' }
  ];
</script>

<svelte:head>
  <title>Blog | DCA Simulator Insights</title>
  <meta name="description" content="Crypto investment tutorials: Master DCA simulations, linear growth math, interactive tables, stateless SvelteKit deployment, and precise metric validation." />
  <meta property="og:title" content="DCA Simulator Blog | Client-Side Crypto Tools" />
  <meta property="og:description" content="Weekly/monthly buy simulations with search, CSV export, and GitHub Pages-ready static builds. Verify totals like $5200 → 507.1797 units." />
  <meta name="keywords" content="DCA simulator, dollar cost averaging, crypto weekly buys, SvelteKit static, linear growth model, client-side calculator" />
</svelte:head>

<div class="container fade-in blog-index" style="padding-top: 150px;">
  <header class="blog-header">
    <h1><i class="bi bi-graph-up-arrow"></i> Blog: DCA Simulator Insights</h1>
    <p class="subtitle">
      Privacy-first tutorials on client-side Dollar-Cost Averaging for crypto. Simulate weekly/monthly plans with exact math (e.g., Sample A: $5200 → $5325.39 gain), interactive Bootstrap tables, and stateless URL params. Fully static for GitHub Pages. <a href="https://github.com/yourusername/dca-simulator" target="_blank" rel="noopener noreferrer">View source</a>.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article →</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<!-- Updated <style> block for src/routes/blog/+page.svelte (Blog Index) -->
<!-- Replace the existing <style> with this dark-mode-compatible version -->

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    color: var(--color-accent);
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .blog-header i {
    color: var(--color-accent);
    margin-right: 0.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--color-text-muted);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .subtitle a {
    color: var(--color-accent);
    text-decoration: underline;
  }

  .subtitle a:hover {
    color: var(--color-accent-hover);
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
  }

  .post-card {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    box-shadow: var(--glass-shadow);
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-decoration: none;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-card:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  .post-card .card-body {
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.35rem;
    color: var(--color-accent);
    margin-bottom: 0.75rem;
    font-weight: 600;
    line-height: 1.3;
  }

  .post-description {
    color: var(--color-text-muted);
    flex-grow: 1;
    margin-bottom: 1.25rem;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .read-more {
    color: var(--color-accent);
    font-weight: 600;
    align-self: flex-start;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .read-more::after {
    content: '→';
    transition: transform 0.3s ease;
  }

  .post-card:hover .read-more {
    color: var(--color-accent-hover);
  }

  .post-card:hover .read-more::after {
    transform: translateX(8px);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .blog-header h1 {
      font-size: 2.4rem;
    }
    .posts-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    .post-card .card-body {
      padding: 1.5rem;
    }
    .post-title {
      font-size: 1.25rem;
    }
  }
</style>