<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | DCA Simulator</title>
  <meta name="description" content="Terms of use for the DCA Simulator—a free, static web utility for Dollar-Cost Averaging simulations with no warranties or liabilities." />
  <meta property="og:title" content="Terms and Conditions | DCA Simulator" />
  <meta property="og:description" content="Acceptable use, limitations of liability, and disclaimers for our client-side financial modeling tool." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout"  style="padding-top: 150px;">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">**Effective Date: January 06, 2026**</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the **DCA Simulator** ("Service"), you agree to these Terms and Conditions ("Terms"). The Service provides **client-side Dollar-Cost Averaging simulations** using linear price growth modeling. If you do not agree, do not use the Service.</p>

    <h2>2. Description of Service</h2>
    <p>The DCA Simulator is a **free, static web utility** hosted on GitHub Pages. Users input investment parameters (amount, frequency, periods, initial price, growth rate) to generate hypothetical projections including total units, average cost, and final value. All processing occurs **in-browser** via static JavaScript—no accounts or payments required.</p>

    <h2>3. User Responsibilities</h2>
    <p>You agree to:</p>
    <ul>
      <li>Use the Service only for **lawful purposes** related to financial education and planning.</li>
      <li>Not attempt to reverse-engineer, decompile, or extract source code.</li>
      <li>Not use automated tools to overload or disrupt the static hosting.</li>
      <li>Understand results represent **hypothetical linear projections**, not financial advice.</li>
    </ul>

    <h2>4. No Financial Advice Disclaimer</h2>
    <p>**The DCA Simulator provides educational simulations only**. Results assume simplistic linear growth and do not reflect real market volatility, fees, taxes, or slippage. **We are not financial advisors**. Past performance does not predict future results. Consult qualified professionals before investing.</p>

    <h2>5. Intellectual Property</h2>
    <p>The Service uses **open-source components** (Bootstrap 5.3, SvelteKit). Source code available on GitHub under MIT License. You may fork, modify, or deploy your own instance. **Commercial redistribution requires attribution**.</p>

    <h2>6. Limitation of Liability</h2>
    <p>The Service provided **AS IS** without warranties. To the maximum extent permitted by law:</p>
    <ul>
      <li>**No warranties** of accuracy, reliability, or fitness for purpose.</li>
      <li>**No liability** for investment decisions based on simulations.</li>
      <li>**No responsibility** for lost profits, data loss, or indirect damages.</li>
      <li>Total liability capped at **zero dollars**.</li>
    </ul>

    <h2>7. Accuracy Disclaimer</h2>
    <p>Simulation math uses floating-point arithmetic with display rounding (2 decimals prices, 4 decimals units). **Linear growth oversimplifies markets**. Validate critical scenarios independently via spreadsheets or other tools.</p>

    <h2>8. Termination</h2>
    <p>We may suspend access for violations. GitHub Pages may remove the repository at discretion. **No refunds** (Service free).</p>

    <h2>9. Governing Law</h2>
    <p>These Terms governed by laws of the hosting jurisdiction (GitHub Pages ToS applies). Disputes resolved through platform mechanisms.</p>

    <h2>10. Changes to Terms</h2>
    <p>We may update Terms. Continued use constitutes acceptance. Check periodically.</p>

    <h2>11. Contact</h2>
    <p>Questions via GitHub Issues or Discussions.</p>

    <p class="italic-note">**Use responsibly**. The DCA Simulator educates on *dollar-cost averaging concepts*—*not investment recommendations*.</p>
  </article>
</div>

<!-- Updated <style> block for Privacy Policy and Terms pages -->
<!-- Also compatible with any future long-form content pages -->
<!-- Replace the old <style> in src/routes/privacy/+page.svelte and src/routes/terms/+page.svelte -->

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