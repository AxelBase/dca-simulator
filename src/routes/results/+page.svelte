<script>
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { calculateDCA } from '$lib/dcaLogic.js';
  import { fade, slide, fly } from 'svelte/transition';

  let results = null;
  let error = null;
  let searchInput = '';
  let showTable = true;
  let showDisclaimer = true;

  $: filteredDetails = results?.periodDetails?.filter(detail => {
    if (!searchInput.trim()) return true;
    const query = searchInput.trim().toLowerCase();
    return detail.period.toString().includes(query);
  }) || [];

  function downloadCSV() {
    if (!results) return;
    const headers = ['Period', 'Asset Price ($)', 'Units Bought', 'Amount Invested ($)'];
    const rows = results.periodDetails.map(d => [d.period, d.price, d.units, d.invested]);
    const csvLines = [
      'AxelBase DCA Simulation Results',
      `Total Invested,${results.summary.totalInvested}`,
      `Total Units Acquired,${results.summary.totalUnits}`,
      `Average Cost per Unit,${results.summary.averageCost}`,
      `Final Value,${results.summary.finalValue}`,
      '', headers.join(','), ...rows.map(row => row.join(','))
    ];
    const blob = new Blob([csvLines.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `AxelBase-DCA-${new Date().getTime()}.csv`;
    link.click();
  }

  $: if ($page?.url?.searchParams) {
    const params = $page.url.searchParams;
    const amount = parseFloat(params.get('amount'));
    const frequency = params.get('frequency') || 'weekly';
    const periods = parseInt(params.get('periods'), 10);
    const initialPrice = parseFloat(params.get('initialPrice'));
    const annualGrowth = parseFloat(params.get('annualGrowth'));

    if (isNaN(amount) || isNaN(periods) || isNaN(initialPrice) || isNaN(annualGrowth)) {
      error = 'Invalid parameters. Please return home.';
      results = null;
    } else {
      try {
        results = calculateDCA({ amount, frequency, periods, initialPrice, annualGrowth });
        error = null;
        searchInput = '';
      } catch (e) {
        error = 'Calculation error: ' + e.message;
        results = null;
      }
    }
  }
</script>

<div class="container py-5 mt-5" in:fade={{ duration: 600 }}>
  {#if error}
    <div class="glass-card p-5 text-center border-danger" in:fly={{ y: 20 }}>
      <i class="bi bi-exclamation-triangle fs-1 text-danger mb-3"></i>
      <h2 class="h4">{error}</h2>
      <a href="{base}/" class="btn btn-primary mt-3 px-4">Return Home</a>
    </div>
  {:else if results}
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3" in:fly={{ y: -20, duration: 800 }}>
      <div>
        <h1 class="display-5 fw-bold text-gradient mb-0">Simulation Results</h1>
        <p class="text-muted mb-0">Analysis based on your custom parameters</p>
      </div>
      <button class="btn btn-primary px-4 py-2 d-flex align-items-center gap-2 shadow-sm" on:click={downloadCSV}>
        <i class="bi bi-download"></i> Export CSV
      </button>
    </div>

    {#if showDisclaimer}
      <div class="row justify-content-center mb-4" transition:slide>
        <div class="col-12">
          <div class="alert disclaimer-box d-flex align-items-start p-4 shadow-sm" role="alert">
            <div class="me-3 mt-1">
              <i class="bi bi-shield-exclamation fs-4 text-warning"></i>
            </div>
            <div class="flex-grow-1">
              <h5 class="alert-heading fw-bold mb-1 small text-uppercase" style="letter-spacing: 1px;">Professional Disclaimer</h5>
              <p class="mb-0 small text-muted">
                This simulator is strictly an educational modeling tool and <strong>does not constitute financial advice</strong>. 
                DCA outcomes depend on numerous market factors, including volatility, liquidity, and fees, which are not captured here. 
                For more information, please visit our 
                <a href="{base}/terms" class="fw-bold text-pine text-decoration-none">Terms and Conditions</a>.
              </p>
            </div>
            <button type="button" class="btn-close ms-2" aria-label="Close" on:click={() => showDisclaimer = false}></button>
          </div>
        </div>
      </div>
    {/if}

    <div class="row g-4 mb-5">
      {#each [
        { label: 'Total Invested', val: `$${results.summary.totalInvested}`, icon: 'bi-cash-stack', accent: false },
        { label: 'Units Acquired', val: results.summary.totalUnits, icon: 'bi-gem', accent: false },
        { label: 'Avg. Cost', val: `$${results.summary.averageCost}`, icon: 'bi-tag', accent: false },
        { label: 'Final Value', val: `$${results.summary.finalValue}`, icon: 'bi-graph-up-arrow', accent: true }
      ] as stat, i}
        <div class="col-6 col-md-3" in:fly={{ y: 30, delay: 150 * i, duration: 600 }}>
          <div class="glass-card p-4 text-center h-100 {stat.accent ? 'stat-accent' : ''}">
            <div class="stat-icon mb-2">
              <i class="bi {stat.icon} fs-4"></i>
            </div>
            <small class="text-uppercase fw-bold opacity-75 d-block mb-1" style="font-size: 0.75rem; letter-spacing: 1px;">
              {stat.label}
            </small>
            <div class="h3 fw-bold mb-0">{stat.val}</div>
          </div>
        </div>
      {/each}
    </div>

    <div class="glass rounded-pill p-2 px-md-4 mb-4 shadow-sm border" in:fade={{ delay: 600 }}>
      <div class="row align-items-center g-2">
        <div class="col-md-5">
          <div class="input-group search-group">
            <span class="input-group-text bg-transparent border-0 pe-1">
              <i class="bi bi-search opacity-50"></i>
            </span>
            <input 
              type="text" 
              class="form-control border-0 bg-transparent" 
              placeholder="Search by period..." 
              bind:value={searchInput} 
            />
          </div>
        </div>
        <div class="col-md-4 text-center">
          <div class="btn-group bg-light-subtle rounded-pill p-1 shadow-inner">
            <button class="btn btn-sm rounded-pill px-4 {showTable ? 'btn-primary shadow' : 'btn-link text-decoration-none text-muted'}" on:click={() => showTable = true}>
              List View
            </button>
            <button class="btn btn-sm rounded-pill px-4 {!showTable ? 'btn-primary shadow' : 'btn-link text-decoration-none text-muted'}" on:click={() => showTable = false}>
              Summary Only
            </button>
          </div>
        </div>
        <div class="col-md-3 text-md-end text-muted small pe-3">
          Showing {filteredDetails.length} items
        </div>
      </div>
    </div>

    {#if showTable}
      <div transition:slide={{ duration: 500 }}>
        {#if filteredDetails.length === 0}
          <div class="glass-card text-center py-5">
            <i class="bi bi-search fs-2 opacity-25 d-block mb-2"></i>
            <p class="text-muted">No results match your search "{searchInput}"</p>
          </div>
        {:else}
          <div class="scrollable-table-container glass-card overflow-hidden shadow-lg border-0 mb-5">
            <div class="table-responsive" style="max-height: 500px; overflow-y: auto;">
              <table class="table table-hover mb-0 align-middle">
                <thead>
                  <tr class="sticky-header">
                    <th class="py-3 ps-4"># Period</th>
                    <th class="py-3">Asset Price</th>
                    <th class="py-3">Units Bought</th>
                    <th class="py-3 pe-4">Amount Invested</th>
                  </tr>
                </thead>
                <tbody>
                  {#each filteredDetails as detail (detail.period)}
                    <tr in:fade>
                      <td class="ps-4 fw-bold">Period {detail.period}</td>
                      <td>${detail.price}</td>
                      <td>{detail.units}</td>
                      <td class="pe-4">
                        <span class="badge rounded-pill px-3 py-2 bg-success-subtle text-success">
                          ${detail.invested}
                        </span>
                      </td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
        {/if}
      </div>
    {/if}

    <div class="text-center pt-2 pb-5" in:fade={{ delay: 800 }}>
      <a href="{base}/" class="btn btn-outline-secondary rounded-pill px-5 py-3 shadow-sm hover-up">
        <i class="bi bi-arrow-left me-2"></i> Run New Simulation
      </a>
    </div>
  {/if}
</div>

<style>
  /* Disclaimer Styling */
  .disclaimer-box {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-left: 5px solid #ffc107;
    border-radius: 15px;
    backdrop-filter: blur(10px);
  }

  .text-pine { color: var(--brand-green); }

  /* Sticky Header logic */
  .sticky-header {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: var(--color-accent);
    color: white;
  }

  /* Table styling */
  .table {
    --bs-table-bg: transparent;
    --bs-table-color: var(--color-text-main);
    --bs-table-hover-bg: rgba(var(--brand-green-rgb, 44, 85, 69), 0.05);
  }

  .scrollable-table-container {
    background: var(--glass-bg);
  }

  /* Stat Card Accent */
  .stat-accent {
    background: var(--brand-green) !important;
    color: white !important;
    border: none;
  }
  
  .stat-icon {
    opacity: 0.6;
  }

  .stat-accent .stat-icon {
    opacity: 1;
    color: #ffdd00; 
  }

  .search-group .form-control:focus {
    box-shadow: none;
  }

  .shadow-inner {
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
  }

  .hover-up:hover {
    transform: translateY(-3px);
    background-color: var(--glass-border);
  }

  .badge {
    font-weight: 600;
  }

  :global([data-bs-theme="dark"]) .table {
    --bs-table-hover-bg: rgba(255, 255, 255, 0.05);
  }

  :global([data-bs-theme="dark"]) .bg-light-subtle {
    background-color: rgba(255,255,255,0.05) !important;
  }
</style>