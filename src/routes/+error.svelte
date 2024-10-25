<script lang="ts">
import { fly } from 'svelte/transition'
import { onMount } from 'svelte'
import { page } from '$app/stores'

let loadDecoration = $state(false)
onMount(() => {
  loadDecoration = true
})
</script>

<svelte:head>
  <title>Error - alvaroswdn</title>
  <meta
    name="description"
    content="Please go back to the home page or report this issue through one of my socials."
  />
  <link rel="preload" as="image" href="/icons/logo.webp" />
</svelte:head>

<section class="hero">
  {#if loadDecoration}
    <div class="decor decor-1" in:fly={{ y: -100, delay: 200 }}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_133_15)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M100.387 91.8532C96.2415 40.435 53.2 0 0.714282 0C0.714282 52.2424 40.7753 95.1281 91.8532 99.6128C40.435 103.758 -5.33517e-06 146.8 -7.62939e-06 199.286C52.2424 199.286 95.1281 159.225 99.6128 108.147C103.758 159.565 146.8 200 199.286 200C199.286 147.758 159.225 104.872 108.147 100.387C159.565 96.2416 200 53.2 200 0.714286C147.758 0.714283 104.872 40.7753 100.387 91.8532ZM99.9975 100.002C99.9991 100.002 100.001 100.003 100.002 100.003L100.003 99.9975C100.001 99.9975 99.9992 99.9975 99.9975 99.9975C99.9975 99.9991 99.9975 100.001 99.9975 100.002Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_133_15">
            <rect width="200" height="200" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="decor decor-2" in:fly={{ y: -100, delay: 300 }}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M107.143 0H92.8571V63.2531L69.1621 4.60582L55.9166 9.95735L80.2255 70.1239L34.3401 24.2385L24.2386 34.3401L68.2177 78.3191L11.2241 53.4181L5.50459 66.5089L65.8105 92.8571H0V107.143H65.8104L5.50461 133.491L11.2241 146.582L68.2176 121.681L24.2386 165.66L34.3401 175.761L80.2255 129.876L55.9166 190.043L69.1621 195.394L92.8571 136.747V200H107.143V136.747L130.838 195.394L144.083 190.043L119.775 129.876L165.66 175.761L175.761 165.66L131.782 121.681L188.776 146.582L194.495 133.491L134.19 107.143H200V92.8571H134.189L194.495 66.5089L188.776 53.4181L131.782 78.3191L175.761 34.34L165.66 24.2385L119.775 70.1238L144.083 9.95735L130.838 4.60582L107.143 63.2531V0Z"
          fill="currentColor"
        />
      </svg>
    </div>
    <div class="decor decor-3" in:fly={{ y: -100 }}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_118_208)">
          <path
            d="M100 200C97.1048 105.262 94.738 102.91 0 100C94.738 97.1048 97.0903 94.738 100 0C102.895 94.738 105.262 97.0903 200 100C105.262 102.91 102.91 105.233 100 200Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_118_208">
            <rect width="200" height="200" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="decor decor-4" in:fly={{ y: -100, delay: 100 }}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M165.963 134.037C160.496 139.504 151.631 139.504 146.164 134.037L122.027 109.899C116.559 104.432 116.559 95.5678 122.027 90.1005L146.164 65.9631C151.631 60.4957 160.496 60.4957 165.963 65.9631L190.101 90.1004C195.568 95.5678 195.568 104.432 190.101 109.899L165.963 134.037ZM53.8359 134.037C48.3686 139.504 39.5042 139.504 34.0369 134.037L9.89952 109.899C4.43218 104.432 4.43217 95.5678 9.89951 90.1005L34.0369 65.9631C39.5042 60.4957 48.3686 60.4957 53.8359 65.9631L77.9733 90.1004C83.4406 95.5678 83.4406 104.432 77.9733 109.899L53.8359 134.037ZM109.9 190.1C104.432 195.568 95.5679 195.568 90.1005 190.1L65.9631 165.963C60.4958 160.496 60.4958 151.631 65.9631 146.164L90.1005 122.027C95.5679 116.559 104.432 116.559 109.9 122.027L134.037 146.164C139.504 151.631 139.504 160.496 134.037 165.963L109.9 190.1ZM109.9 77.9732C104.432 83.4405 95.5679 83.4406 90.1005 77.9732L65.9631 53.8358C60.4958 48.3685 60.4958 39.5042 65.9631 34.0368L90.1005 9.89946C95.5679 4.43212 104.432 4.43211 109.9 9.89945L134.037 34.0368C139.504 39.5042 139.504 48.3685 134.037 53.8358L109.9 77.9732Z"
          fill="currentColor"
        />
      </svg>
    </div>
  {/if}
  <div class="hero-container">
    <h1 class="hero-title">
      <span>{$page.error?.message}</span><br />
      Please go back to the home page or report this issue through one of my socials.
    </h1>
  </div>
  <div class="hero-container">
    <img
      class="hero-image"
      src="/icons/logo.webp"
      alt="logo"
      width="288"
      height="288"
    />
  </div>
</section>

<style>
  .decor {
    display: none;
    z-index: -99;
  }

  .decor-1 {
    position: absolute;
    color: var(--clr-accent-400);
    top: 1rem;
    left: -18rem;
    transform: rotate(25deg) scale(0.8);
  }

  .decor-2 {
    position: absolute;
    color: var(--clr-primary-400);
    bottom: -4rem;
    left: -12rem;
    transform: scale(0.8);
  }

  .decor-3 {
    position: absolute;
    color: var(--clr-primary-400);
    top: 1rem;
    right: -17rem;
    transform: rotate(15deg);
  }

  .decor-4 {
    position: absolute;
    color: var(--clr-accent-400);
    bottom: -1rem;
    right: -18rem;
    transform: rotate(15deg) scale(1.2);
  }

  .hero {
    max-width: 60rem;
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 2rem;
    min-height: 28rem;
    height: 100%;
  }

  .hero > * {
    flex: 1;
  }

  .hero-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-title {
    font-size: var(--fs-700);
  }

  .hero-title > span {
    color: var(--clr-accent-400);
  }

  .hero-image {
    border-radius: 50%;
    width: 80%;
    height: auto;
    max-width: 18rem;
  }

  @media (min-width: 50em) {
    .decor {
      display: block;
    }

    .hero {
      flex-direction: row;
    }
  }
</style>
