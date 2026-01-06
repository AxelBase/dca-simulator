<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Stateless Design for GitHub Pages Deployment | DCA Simulator Blog</title>
  <meta name="description" content="How URL query parameters enable fully static, shareable DCA simulations with zero server requirements using adapter-static." />
  <meta property="og:title" content="Stateless Design for GitHub Pages Deployment | DCA Simulator Blog" />
  <meta property="og:description" content="Discover the privacy and portability advantages of encoding all inputs in the URL for instant sharing and bookmarking." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout"  style="padding-top: 150px;">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Stateless Design for GitHub Pages Deployment</p>
  </div>

  <article class="prose">
    <h1>Stateless Design for GitHub Pages Deployment</h1>
   
    <p class="post-meta">Published: January 06, 2026</p>
   
    <p>The DCA Simulator is built as a completely static site that runs entirely in the browser. This design choice enables deployment on free platforms like GitHub Pages while preserving user privacy and enabling powerful sharing capabilities.</p>
   
    <h2>URL-Based State Management</h2>
    <p>All simulation parameters are encoded directly into the results page URL as query strings. When the home form is submitted, the application constructs a link containing amount, frequency, periods, initial price, and growth rate. Navigation occurs via client-side routing, and the results page reads these values to perform calculations on load.</p>
   
    <h3>Key Advantages</h3>
    <ul>
      <li>No cookies, local storage, or server state required</li>
      <li>Results can be bookmarked for later reference</li>
      <li>Links can be shared—recipients see identical simulation instantly</li>
      <li>Full compatibility with static hosting platforms</li>
    </ul>
   
    <h3>Static Build Process</h3>
    <p>The site uses adapter-static to generate pure HTML, CSS, and JavaScript files during build. Static pages like home and blog are prerendered for instant loading. The dynamic results page disables prerendering to allow runtime access to URL parameters, while remaining fully client-side.</p>
   
    <h2>Privacy and Reliability Benefits</h2>
    <p>Since no data ever leaves the browser, users maintain complete control and privacy. There are no tracking scripts, analytics, or external requests beyond the initial page load. The entire application works offline after the first visit, with all assets cached locally.</p>
   
    <h2>Deployment Simplicity</h2>
    <p>Building produces a docs folder containing the complete site. This folder is deployed directly to GitHub Pages with zero configuration beyond enabling the feature in repository settings. Updates require only pushing changes and rebuilding—no server management needed.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>Why not use local storage?</summary>
      <p>URL parameters enable sharing and bookmarking without requiring permissions or persistence.</p>
    </details>
    <details>
      <summary>Can I host this myself?</summary>
      <p>Yes—any static file host works, including Netlify, Vercel static, or simple web servers.</p>
    </details>
    <details>
      <summary>Are there any server requirements?</summary>
      <p>None—the entire experience is pure client-side JavaScript and static assets.</p>
    </details>
   
    <p class="italic-note">Enjoy fast, private, and shareable DCA simulations anywhere.</p>
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