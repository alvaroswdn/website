<script lang="ts">
import { fade, fly } from 'svelte/transition'
import type { Toggle } from '../utils/toggle.svelte';

type Props = {
  toggle: Toggle
}

const { toggle }: Props = $props()
</script>

<nav
  class="nav"
  in:fly={{ x: -280, duration: 600, opacity: 1 }}
  out:fly={{ x: -280, duration: 400, opacity: 1 }}
>
  <div class="nav-toggle">
    <button
      onclick={() => toggle.toggle()}
      aria-label="close navigation"
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
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </div>
  <div class="nav-list">
    <a class="nav-item" href="/">Home</a>
    <a class="nav-item" href="/highlights">Highlights</a>
    <a class="nav-item" href="/projects">Projects</a>
  </div>
  <div class="nav-footer">
    <div class="footer-contact">
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
          stroke-width="2.0"
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
    Copyright 2024
  </div>
</nav>

<div
  class="darken"
  in:fade={{ duration: 300 }}
  out:fade={{ duration: 400 }}
></div>

<style>
  svg {
    height: 2rem;
  }

  .nav {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1.6rem;
    height: 100%;
    background-color: var(--clr-neutral-100);

    display: flex;
    flex-direction: column;
    gap: 4rem;
    font-size: var(--fs-700);
  }

  .nav-toggle {
    display: flex;
    justify-content: end;
    align-items: flex-start;
    padding-right: 0.4rem;
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  .nav-item {
    width: fit-content;
    width: -moz-fit-content;
    font-family: var(--ff-accent);
  }

  .nav-toggle button:focus-visible,
  .nav-item:focus-visible {
    outline: var(--clr-accent-400) 2px solid;
    outline-offset: 2px;
  }

  .nav-item:focus-visible {
    outline-offset: 6px;
  }

  .nav-footer {
    margin-top: auto;
    font-size: var(--fs-600);
    padding-right: 5.4rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .footer-contact {
    display: flex;
    justify-content: space-between;
  }

  .darken {
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 50%;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 80em) {
    .footer-contact {
      display: none;
    }
  }
</style>
