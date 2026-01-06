<!-- src/routes/+layout.svelte - Final Integrated Version -->
<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { slide } from 'svelte/transition';

  // Theme Toggle
  let isDarkMode = false;
  function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.dataset.bsTheme = isDarkMode ? 'dark' : 'light';
  }

  // Support Dropdown (Buy Me a Coffee + Bitcoin)
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<header class="fixed-top p-3 w-100" style="z-index: 1040;">
  <nav class="container glass rounded-pill px-4 py-2 d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center gap-3">
      <!-- Logo -->
      <a href="{base}/" class="d-flex align-items-center gap-2 text-decoration-none brand-group">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="nav-logo" />
        <span class="fw-bold fs-5 brand-text">AxelBase</span>
      </a>

      <!-- Theme Toggle -->
      <button class="theme-btn" on:click={toggleTheme} aria-label="Toggle Theme">
        <i class="bi {isDarkMode ? 'bi-sun-fill' : 'bi-moon-stars-fill'}"></i>
      </button>

      <!-- Support Dropdown (Buy Me a Coffee + Bitcoin) -->
      <div class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button
          class="bmac-button px-3 py-1 rounded-pill d-flex align-items-center gap-2"
          on:click={toggleDropdown}
          aria-label="Support options"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
          </svg>
          <span class="d-none d-md-inline fw-semibold">Buy me a Coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown mt-2" transition:slide={{ duration: 250 }}>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$3</span> One Coffee
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$5</span> Two Coffees
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$10</span> Three Coffees
            </a>

            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              on:click={closeDropdown}
              class="custom-amount"
            >
              Buy via Crypto (Bitcoin)
            </a>
          </div>
        {/if}
      </div>
    </div>

    <!-- Navigation Links -->
    <ul class="nav d-none d-lg-flex align-items-center gap-4 m-0">
      <li><a class="nav-link-custom" href="{base}/">Home</a></li>
      <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
      <li><a class="nav-link-custom" href="{base}/#how-to">How to Use</a></li>
      <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
      <li><a class="btn btn-primary px-4" href="{base}/blog">Blog</a></li>
    </ul>
  </nav>
</header>

<main>
  <slot />
</main>

<footer class="glass border-top py-3 mt-auto">
  <div class="container d-flex flex-column flex-sm-row justify-content-between align-items-center small text-muted">
    <span>&copy; {new Date().getFullYear()} AxelBase DCA Simulator</span>
    <div class="d-flex gap-3">
      <a href="{base}/privacy" class="text-decoration-none text-muted hover-accent">Privacy</a>
      <a href="{base}/terms" class="text-decoration-none text-muted hover-accent">Terms</a>
    </div>
  </div>
</footer>

<style>
  /* Logo & Brand */
  .nav-logo {
    height: 30px;
    transition: transform 0.3s ease;
  }
  .brand-group:hover .nav-logo {
    transform: rotate(15deg) scale(1.1);
  }
  .brand-text {
    color: var(--color-text-main);
  }

  /* Theme Toggle */
  .theme-btn {
    background: transparent;
    border: 1px solid var(--glass-border);
    color: var(--color-text-main);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
  .theme-btn:hover {
    background: var(--glass-border);
    transform: scale(1.1);
  }

  /* Buy Me a Coffee Button (adapted from File 1) */
  .bmac-button {
    background: var(--brand-green);
    color: white;
    border: none;
    font-weight: 700;
    font-size: 0.85rem;
    transition: all 0.3s ease;
  }
  .bmac-button:hover {
    background: var(--color-accent-hover);
    transform: translateY(-2px);
  }

  /* Dropdown Menu */
  .bmac-dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    border-radius: 16px;
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    overflow: hidden;
    z-index: 1000;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: var(--color-text-main);
    text-decoration: none;
    font-size: 0.98rem;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: var(--color-accent);
    color: white;
    padding-left: 28px;
  }

  .bmac-dropdown .amount {
    font-weight: 700;
    color: var(--color-accent);
    font-size: 1.1rem;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 600;
    color: var(--color-accent);
    border-top: 1px solid var(--glass-border);
    justify-content: center !important;
  }

  .bmac-dropdown .custom-amount:hover {
    background: var(--color-accent-hover);
  }

  /* Navigation Links */
  .nav-link-custom {
    color: var(--color-text-muted);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;
  }
  .nav-link-custom:hover {
    color: var(--color-accent);
  }

  /* Footer Links */
  .hover-accent:hover {
    color: var(--color-accent) !important;
  }
</style>