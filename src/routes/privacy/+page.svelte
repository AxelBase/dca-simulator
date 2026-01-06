<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | DCA Simulator</title>
  <meta name="description" content="Learn how the DCA Simulator protects your privacy with complete client-side processing and zero data collection." />
  <meta property="og:title" content="Privacy Policy | DCA Simulator" />
  <meta property="og:description" content="A fully static, stateless web utility that runs entirely in your browser—no tracking, no storage, no data transmission." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout"  style="padding-top: 150px;">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">**Effective Date: January 06, 2026**</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the **DCA Simulator**, a fully client-side web utility for modeling Dollar-Cost Averaging strategies ("we," "us," or "our"). This Privacy Policy explains our **zero-data-collection approach**. Since all calculations occur in your browser using static HTML, CSS, and JavaScript, **we do not collect, store, track, or transmit any personal information**. This policy ensures complete transparency about our privacy-first design.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>The DCA Simulator operates entirely **client-side** with no server interaction:</p>
    <ul>
      <li>**Personal Identifiable Information (PII)**: No names, emails, phone numbers, or addresses are collected.</li>
      <li>**Investment Parameters**: Amount, frequency, periods, initial price, and growth rate stay in your browser via URL query strings.</li>
      <li>**Usage Analytics**: No IP addresses, browser fingerprints, device info, or location tracking.</li>
      <li>**Simulation Results**: All computations (total units, average cost, final value) happen locally—no data leaves your device.</li>
      <li>**Behavioral Data**: No cookies, localStorage persistence, or session tracking beyond temporary URL state.</li>
    </ul>
    <p>**Your data never touches our servers**—GitHub Pages serves only static assets.</p>

    <h2>3. How the Tool Functions</h2>
    <p>Every interaction remains isolated in your browser:</p>
    <ul>
      <li>**Form Submission**: Parameters encode into URL query strings (e.g., `?amount=100&frequency=weekly`) for stateless navigation.</li>
      <li>**Calculations**: Single `dcaLogic.js` function processes linear growth math locally.</li>
      <li>**Interactive Table**: Search, toggle, and CSV export use native browser APIs—no external calls.</li>
      <li>**Offline Capability**: Works without internet after initial load; all assets cache locally.</li>
    </ul>
    <p>Results pages recompute on refresh from URL params—**truly stateless**.</p>

    <h2>4. No Third-Party Tracking</h2>
    <p>We use **Bootstrap 5.3 via CDN** solely for styling and components. No analytics, advertising, or tracking services integrate:</p>
    <ul>
      <li>No Google Analytics, Facebook Pixel, or similar tools.</li>
      <li>No advertising networks or behavioral profiling.</li>
      <li>CSV downloads use `Blob` API—pure client-side file generation.</li>
    </ul>

    <h2>5. Cookies and Storage</h2>
    <p>The DCA Simulator uses **zero cookies** and **no persistent storage**. Browser sessionStorage may temporarily hold form state, but clears on page close. URL query parameters provide the only "persistence" mechanism, enabling shareable simulation links.</p>

    <h2>6. Data Security Practices</h2>
    <p>With no data collection, security risks are minimized. However, we recommend:</p>
    <ul>
      <li>Use modern browsers with HTTPS Everywhere.</li>
      <li>Avoid sharing sensitive investment scenarios publicly.</li>
      <li>Clear browser cache if concerned about temporary data.</li>
    </ul>
    <p>**We cannot access device-stored data**—your privacy is architecturally guaranteed.</p>

    <h2>7. Children's Privacy</h2>
    <p>This tool targets adult financial planning. We do not knowingly collect data from children under 13. Parents concerned about usage should contact us.</p>

    <h2>8. International Compliance</h2>
    <p>Our **no-data approach complies automatically** with GDPR, CCPA, and global privacy laws. Static hosting on GitHub Pages follows platform security standards.</p>

    <h2>9. Policy Updates</h2>
    <p>We may revise this policy. Changes appear here with updated effective dates. Continued use constitutes acceptance.</p>

    <h2>10. Contact Information</h2>
    <p>Questions? Use GitHub Discussions in the repository or open an issue.</p>

    <p class="italic-note">**Your privacy is paramount**. The DCA Simulator proves powerful tools need *zero data collection* for maximum trust.</p>
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