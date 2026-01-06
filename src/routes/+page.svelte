<script>
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import { fade, fly, slide } from 'svelte/transition';

  let amount = 100;
  let frequency = 'weekly';
  let periods = 52;
  let initialPrice = 10;
  let annualGrowth = 5;

  let showDisclaimer = true;

  function handleSubmit(event) {
    event.preventDefault();
    const params = new URLSearchParams({
      amount: amount.toString(),
      frequency,
      periods: periods.toString(),
      initialPrice: initialPrice.toString(),
      annualGrowth: annualGrowth.toString()
    });
    goto(`${base}/results?${params.toString()}`);
  }
</script>

<svelte:head>
  <title>DCA Simulator | Client-Side Dollar-Cost Averaging Tool</title>
  <meta name="description" content="Free, privacy-first DCA simulator for weekly/monthly crypto investments. Linear growth model, interactive table with search & CSV export. Fully static—no data collection." />
  <meta name="keywords" content="DCA simulator, dollar cost averaging, crypto investment calculator, weekly monthly DCA, linear growth model, client-side tool, privacy focused, GitHub Pages" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="DCA Simulator – Privacy-First Dollar-Cost Averaging Tool" />
  <meta property="og:description" content="Simulate weekly or monthly investments with accurate linear growth projections. Interactive results, table filtering, CSV export—all in-browser with zero tracking." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://dca-simulator.vercel.app/" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="DCA Simulator – Client-Side Investment Modeling" />
  <meta name="twitter:description" content="Educational DCA tool: simulate strategies, view detailed breakdowns, export CSV. No data collection, fully static." />
  <link rel="canonical" href="https://dca-simulator.vercel.app/" />
</svelte:head>

<div class="container py-5 mt-5">
  <div class="text-center mb-5" in:fade={{ duration: 1000 }}>
    <h1 class="display-3 fw-bold mb-3" style="color: var(--brand-green)">AxelBase DCA</h1>
    <p class="lead text-muted">Wealth building, automated by math.</p>
  </div>

  <div class="row justify-content-center">
    <div class="col-lg-6 col-md-8" in:fly={{ y: 50, duration: 800, delay: 200 }}>
      <div class="glass-card p-4 p-md-5">
        <form on:submit={handleSubmit}>
          <div class="mb-4">
            <label for="amount" class="form-label fw-bold small text-uppercase">Investment per Period ($)</label>
            <input type="number" class="form-control" id="amount" bind:value={amount} min="1" required />
          </div>
          <div class="row">
            <div class="col-md-6 mb-4">
              <label for="frequency" class="form-label fw-bold small text-uppercase">Frequency</label>
              <select class="form-select" id="frequency" bind:value={frequency}>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
            <div class="col-md-6 mb-4">
              <label for="periods" class="form-label fw-bold small text-uppercase">Total Periods</label>
              <input type="number" class="form-control" id="periods" bind:value={periods} min="1" required />
            </div>
          </div>
          <div class="mb-4">
            <label for="initialPrice" class="form-label fw-bold small text-uppercase">Initial Price ($)</label>
            <input type="number" class="form-control" id="initialPrice" bind:value={initialPrice} step="0.01" required />
          </div>
          <div class="mb-4">
            <label for="annualGrowth" class="form-label fw-bold small text-uppercase">Estimated Annual Growth (%)</label>
            <input type="number" class="form-control" id="annualGrowth" bind:value={annualGrowth} step="0.1" required />
          </div>
          <button type="submit" class="btn btn-primary w-100 py-3 mt-2 shadow-lg">Run Simulation</button>
        </form>
      </div>
    </div>
  </div>

  <div class="row justify-content-center mt-5 pt-5 g-4">
    
    {#if showDisclaimer}
      <div class="col-md-10" transition:slide>
        <div class="alert disclaimer-box d-flex align-items-start p-4 shadow-sm" role="alert">
          <div class="me-3 mt-1">
            <i class="bi bi-info-circle-fill fs-4 text-warning"></i>
          </div>
          <div class="flex-grow-1">
            <h5 class="alert-heading fw-bold mb-1">Important Legal Disclaimer</h5>
            <p class="mb-0 small text-muted">
              This simulator is an educational modeling tool and <strong>does not constitute financial advice</strong>. 
              The results are purely mathematical projections based on a simplified linear growth model. 
              Actual market conditions involve significant volatility, fees, slippage, and external economic factors that this simulation does not account for. 
              Investors should perform their own due diligence. For more information, please review our 
              <a href="{base}/terms" class="fw-bold text-pine text-decoration-none">Terms and Conditions</a>.
            </p>
          </div>
          <button type="button" class="btn-close ms-2" aria-label="Close" on:click={() => showDisclaimer = false}></button>
        </div>
      </div>
    {/if}

<section id="about" class="col-md-10 mb-5" in:fade={{ delay: 400 }}>
  <div class="glass-card p-4">
    <h2 class="h3 fw-bold mb-3" style="color: var(--brand-green)">About the Simulator</h2>
    <p class="text-muted mb-3">
      The DCA Simulator is a fully client-side, privacy-focused web utility designed to model Dollar-Cost Averaging (DCA) strategies for cryptocurrency or any asset. It enables users to simulate regular weekly or monthly investments over a chosen period using a transparent linear price growth model. All calculations occur directly in the browser—no data is collected, stored, or transmitted to any server. This stateless design, powered by SvelteKit and deployed via GitHub Pages with adapter-static, ensures complete user privacy and seamless sharing of simulation links through URL query parameters.
    </p>
    <p class="text-muted mb-3">
      Dollar-Cost Averaging is an investment approach where a fixed amount is invested at regular intervals, regardless of price. This strategy helps mitigate the impact of volatility by purchasing more units when prices are low and fewer when prices are high, potentially lowering the average cost per unit over time. The simulator implements this concept precisely: for each period, it calculates the current asset price by prorating the user-specified annual growth rate (weekly: divided by 52, monthly: by 12). Units bought are the fixed investment amount divided by that period’s price, accumulating totals for invested capital, units acquired, and final portfolio value.
    </p>
    <p class="text-muted mb-3">
      The tool satisfies three core functional requirements: input collection via a validated form (FR1), accurate client-side computation using a single JavaScript function (FR2), and clear results display with summary metrics and an interactive per-period table (FR3). The results page features live period search with partial matching, table visibility toggle, and one-click CSV export—ideal for long simulations up to 1,000 periods. Summary metrics include total invested, total units (to four decimals), average cost per unit, final price, and final portfolio value, all rounded appropriately for readability.
    </p>
    <p class="text-muted mb-3">
      A deterministic linear growth model was chosen for educational clarity: users can exactly reproduce outcomes (e.g., Sample A: $100 weekly for 52 weeks at $10 initial price and 5% annual growth yields 507.1797 units, $10.25 average cost, and $5,325.39 final value). Zero-growth tests confirm flat-price behavior, while high-growth scenarios demonstrate amplified returns. The simulator supports negative growth rates to model declining markets, helping users understand DCA performance across various hypothetical conditions.
    </p>
    <p class="text-muted mb-0">
      Built as a lightweight static site with Bootstrap 5 styling, the DCA Simulator works offline after initial load and requires no accounts, cookies, or external APIs. It serves as an educational resource to explore investment mechanics transparently and reproducibly.
    </p>
  </div>
</section>

<section id="how-to" class="col-md-10 mb-5" in:fade={{ delay: 500 }}>
  <div class="glass-card p-4">
    <h2 class="h3 fw-bold mb-4 text-center" style="color: var(--brand-green)">How to Use</h2>
    <p class="text-muted text-center mb-5">
      Follow these steps to run accurate Dollar-Cost Averaging simulations and explore results interactively.
    </p>
    <div class="row g-4 text-center">
      <div class="col-md-4">
        <div class="step-icon-wrapper mb-3">
          <div class="step-bubble glass mx-auto">
            <i class="bi bi-input-cursor-text fs-3 text-pine"></i>
          </div>
        </div>
        <h5 class="fw-bold">1. Enter Investment Parameters</h5>
        <p class="small text-muted">
          On the home page, input your recurring investment amount (e.g., $100), initial asset price (e.g., $10), and expected annual growth rate (e.g., 5%). Use positive numbers only—the form validates automatically. Defaults are pre-filled for quick testing.
        </p>
      </div>
      <div class="col-md-4">
        <div class="step-icon-wrapper mb-3">
          <div class="step-bubble glass mx-auto">
            <i class="bi bi-calendar-check fs-3 text-pine"></i>
          </div>
        </div>
        <h5 class="fw-bold">2. Set Frequency and Duration</h5>
        <p class="small text-muted">
          Choose Weekly or Monthly frequency, then specify the number of periods (e.g., 52 for one year weekly or 12 for one year monthly). Longer simulations (up to 1,000 periods) are fully supported with sub-second performance.
        </p>
      </div>
      <div class="col-md-4">
        <div class="step-icon-wrapper mb-3">
          <div class="step-bubble glass mx-auto">
            <i class="bi bi-lightning-charge fs-3 text-pine"></i>
          </div>
        </div>
        <h5 class="fw-bold">3. Run and Analyze Results</h5>
        <p class="small text-muted">
          Click “Run Simulation” to navigate to the results page. Parameters encode into the URL for bookmarking or sharing. View the summary card with total invested, units acquired, average cost, final price, and portfolio value.
        </p>
      </div>
      <div class="col-md-4">
        <div class="step-icon-wrapper mb-3">
          <div class="step-bubble glass mx-auto">
            <i class="bi bi-table fs-3 text-pine"></i>
          </div>
        </div>
        <h5 class="fw-bold">4. Explore the Interactive Table</h5>
        <p class="small text-muted">
          Scroll to the per-period breakdown table showing price, units bought, and amount invested for every period. Use the search field for instant filtering (partial matches supported—type “26” to jump to mid-year). Toggle table visibility for quick summary checks.
        </p>
      </div>
      <div class="col-md-4">
        <div class="step-icon-wrapper mb-3">
          <div class="step-bubble glass mx-auto">
            <i class="bi bi-file-earmark-arrow-down fs-3 text-pine"></i>
          </div>
        </div>
        <h5 class="fw-bold">5. Export and Compare</h5>
        <p class="small text-muted">
          Download full results (summary + all periods) as CSV for spreadsheet analysis. Modify parameters and run new simulations to compare strategies side-by-side using shared URLs.
        </p>
      </div>
      <div class="col-md-4">
        <div class="step-icon-wrapper mb-3">
          <div class="step-bubble glass mx-auto">
            <i class="bi bi-shield-check fs-3 text-pine"></i>
          </div>
        </div>
        <h5 class="fw-bold">6. Privacy and Validation</h5>
        <p class="small text-muted">
          Everything processes locally—no data leaves your browser. Test edge cases (zero growth, negative rates, high returns) to verify mathematical accuracy against manual calculations.
        </p>
      </div>
    </div>
  </div>
</section>

<section id="faq" class="col-md-10 mb-5" in:fade={{ delay: 600 }}>
  <div class="glass-card p-4">
    <h2 class="h3 fw-bold mb-4" style="color: var(--brand-green)">FAQ</h2>
    <div class="accordion accordion-flush" id="faqDCA">
      <div class="accordion-item bg-transparent">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed bg-transparent text-main fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f1">
            Is this tool providing financial advice?
          </button>
        </h2>
        <div id="f1" class="accordion-collapse collapse" data-bs-parent="#faqDCA">
          <div class="accordion-body text-muted">
            No. The DCA Simulator is strictly educational. It demonstrates mathematical outcomes under a simplified linear growth model and does not constitute investment advice. Results are hypothetical and exclude real-world factors like fees, taxes, slippage, or volatility patterns.
          </div>
        </div>
      </div>
      <div class="accordion-item bg-transparent">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed bg-transparent text-main fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f2">
            What does the Annual Growth rate represent?
          </button>
        </h2>
        <div id="f2" class="accordion-collapse collapse" data-bs-parent="#faqDCA">
          <div class="accordion-body text-muted">
            It is the assumed steady yearly percentage increase in asset price, prorated across periods (divided by 52 for weekly, 12 for monthly). This linear model enables clear, reproducible projections—ideal for comparing strategies rather than predicting actual markets.
          </div>
        </div>
      </div>
      <div class="accordion-item bg-transparent">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed bg-transparent text-main fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f3">
            Why use a linear instead of compound growth model?
          </button>
        </h2>
        <div id="f3" class="accordion-collapse collapse" data-bs-parent="#faqDCA">
          <div class="accordion-body text-muted">
            Linear growth keeps calculations transparent and deterministic, making it easier to understand DCA mechanics and validate results manually. It still effectively illustrates average cost reduction in rising markets while remaining mathematically simple.
          </div>
        </div>
      </div>
      <div class="accordion-item bg-transparent">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed bg-transparent text-main fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f4">
            Does the simulator collect any personal data?
          </button>
        </h2>
        <div id="f4" class="accordion-collapse collapse" data-bs-parent="#faqDCA">
          <div class="accordion-body text-muted">
            Absolutely not. The entire application runs client-side with no cookies, analytics, or server requests beyond loading static assets. Simulation parameters exist only in the URL for sharing and bookmarking purposes.
          </div>
        </div>
      </div>
      <div class="accordion-item bg-transparent">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed bg-transparent text-main fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f5">
            How accurate are the displayed numbers?
          </button>
        </h2>
        <div id="f5" class="accordion-collapse collapse" data-bs-parent="#faqDCA">
          <div class="accordion-body text-muted">
            Calculations use full floating-point precision internally. Display rounding applies two decimals for monetary values and four for units. Verified scenarios (e.g., Sample A) match manual spreadsheet results exactly.
          </div>
        </div>
      </div>
      <div class="accordion-item bg-transparent">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed bg-transparent text-main fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f6">
            Can I simulate declining markets?
          </button>
        </h2>
        <div id="f6" class="accordion-collapse collapse" data-bs-parent="#faqDCA">
          <div class="accordion-body text-muted">
            Yes—enter a negative annual growth rate. Later periods will show lower prices, higher units bought, and potentially reduced final value, illustrating DCA behavior in bear markets.
          </div>
        </div>
      </div>
      <div class="accordion-item bg-transparent">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed bg-transparent text-main fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f7">
            How long can simulations run?
          </button>
        </h2>
        <div id="f7" class="accordion-collapse collapse" data-bs-parent="#faqDCA">
          <div class="accordion-body text-muted">
            Up to 1,000 periods (approximately 19 years monthly or 10 years weekly) with near-instant computation and smooth table rendering, including search and CSV export functionality.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>  
  </div>
</div>

<style>
  .text-main { color: var(--color-text-main); }
  .text-pine { color: var(--brand-green); }

  section { scroll-margin-top: 120px; }

  .disclaimer-box {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-left: 5px solid #ffc107;
    border-radius: 15px;
    backdrop-filter: blur(10px);
  }

  .step-bubble {
    width: 65px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 1px solid var(--glass-border);
    transition: transform 0.3s ease, background 0.3s ease;
  }

  .step-bubble:hover {
    transform: rotate(10deg) scale(1.1);
    background: var(--brand-green);
  }

  .step-bubble:hover i {
    color: white !important;
  }

  .accordion-button:not(.collapsed) {
    background-color: transparent;
    color: var(--brand-green);
    box-shadow: none;
  }

  .accordion-button::after {
    filter: sepia(100%) hue-rotate(90deg);
  }
</style>