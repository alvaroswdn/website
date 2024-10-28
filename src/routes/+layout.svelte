<script lang="ts">
import '../global.css'
import { navigating } from '$app/stores'
import Navigation from '$components/Navigation.svelte'
import { createToggle } from '../utils/toggle.svelte';

const { children } = $props()
const toggleNavigation = createToggle()

$effect(() => { if ($navigating) toggleNavigation.set(false) })
</script>

<header class="header">
  <div class="header-nav">
    <button
      class="nav-toggle"
      onclick={() => toggleNavigation.toggle()}
      aria-label="open navigation"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        >\
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M4 6h16M4 12h16M4 18h7"
        />
      </svg>
    </button>
    {#if toggleNavigation.status}
      <Navigation toggle={toggleNavigation} />
    {/if}
  </div>
  <div class="header-title">
    <h1>alvaro</h1>
  </div>
  <div class="header-contact">
    <a
      class="contact-item"
      href="https://www.instagram.com/alvaroswdn"
      target="_blank"
      aria-label="instagram"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3" />
        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
      </svg>
    </a>
    <a
      class="contact-item"
      href="https://github.com/alvaroswdn"
      target="_blank"
      aria-label="github"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-brand-github"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
        />
      </svg>
    </a>
    <a class="contact-item" href="mailto:Alvaro%20Raditya%20Soewardono<hello@alvaroswdn.my.id>" aria-label="email">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
    </a>
  </div>
</header>

<main class="main">
  {@render children()}
</main>

<style>
  svg {
    height: 1.6rem;
  }

  .header {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    justify-content: space-between;
    padding: 1.2rem 1.8rem;
    font-weight: var(--fw-bold);
  }

  .header-nav {
    display: flex;
    align-items: center;
  }

  .nav-toggle {
    cursor: pointer;
  }

  .header-title {
    display: flex;
    justify-content: center;
    font-size: var(--fs-600);
    font-family: var(--ff-accent);
  }

  .header-contact {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 3.2rem;
    font-size: var(--fs-500);
  }

  .contact-item {
    display: none;
  }

  .nav-toggle:focus-visible,
  .contact-item:focus-visible {
    outline: var(--clr-accent-400) 2px solid;
    outline-offset: 2px;
  }

  .main {
    padding-bottom: 3.6rem;
  }

  @media (min-width: 80em) {
    .contact-item {
      display: block;
    }
  }
</style>
