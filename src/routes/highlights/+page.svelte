<script lang="ts">
import { onMount } from 'svelte'
import { fly } from 'svelte/transition'
import Year10 from '$components/Year10.svelte'
import Year11 from '$components/Year11.svelte'
import Year12 from '$components/Year12.svelte'

let selectedYear = $state(10)

function changeYear(year: number) {
  document.body.scrollTop = 0
  setTimeout(() => {
    selectedYear = year
  }, 100)
}

let loadContent = $state(false)
onMount(() => {
  loadContent = true
})
</script>

<svelte:head>
  <title>Highlights - alvaroswdn</title>
  <meta name="description" content="Some of my best high school highlights." />
</svelte:head>

<section class="content">
  {#if loadContent}
    <div class="decor-1" in:fly={{ y: 100, delay: 400 }}>
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
    <div class="decor-2" in:fly={{ y: 100, delay: 400 }}>
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

    <h1 class="text-primary-400 fs-700">
      Here are some <span class="text-accent-400">school highlights</span>,
      select the year down below
    </h1>

    <div class="year-content">
      {#if selectedYear == 10}
        <Year10 />
      {:else if selectedYear == 11}
        <Year11 />
      {:else}
        <Year12 />
      {/if}
    </div>

    <div class="year-selector fs-600">
      <button
        class={selectedYear == 10 ? 'active' : ''}
        onclick={() => changeYear(10)}>X</button
      >
      <button
        class={selectedYear == 11 ? 'active' : ''}
        onclick={() => changeYear(11)}>XI</button
      >
      <button
        class={selectedYear == 12 ? 'active' : ''}
        onclick={() => changeYear(12)}>XII</button
      >
    </div>
  {/if}
</section>

<style>
  :global(.year-content > *) {
    text-align: justify;
    text-align-last: center;
  }

  :global(.year-content div) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 3rem;
  }

  :global(.year-content h2) {
    color: var(--clr-accent-400);
    font-size: var(--fs-700);
    font-family: var(--ff-accent);
  }

  :global(.year-content p) {
    max-width: 42rem;
    width: 100%;
    font-size: var(--fs-600);
  }

  :global(.year-content img) {
    max-width: 44rem;
    width: 100%;
  }

  :global(.year-content span) {
    color: var(--clr-accent-400);
  }

  :global(.year-content a) {
    margin-top: 0.2rem;
    background: var(--clr-accent-400);
    color: var(--clr-neutral-100);
    font-size: var(--fs-500);
    text-decoration: none;
    padding: 0.6rem 1rem;
    border-radius: 0.4rem;
    transition: 0.2s all ease-out;
  }

  :global(.year-content a:hover) {
    background-color: var(--clr-accent-500);
  }

  .year-selector {
    background: rgba(0, 0, 0, 50%);
    backdrop-filter: blur(4px);
    border-radius: 0.4rem;

    position: fixed;
    bottom: 2rem;

    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    overflow: hidden;
  }

  .year-selector > button {
    color: white;
    padding: 0.6rem 1.4rem;
    text-align: center;
    user-select: none;
    transition: 0.3s background-color;
  }

  .year-selector > button.active {
    background: rgba(255, 255, 255, 10%);
  }

  .year-selector > button:hover {
    background: rgba(255, 255, 255, 20%);
  }

  .content {
    max-width: 60rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    min-height: 28rem;
    height: 100%;
    margin-top: 2.4rem;
  }

  h1 {
    margin-bottom: 4rem;
  }

  .decor-1 {
    position: absolute;
    z-index: -99;
    color: var(--clr-accent-400);
    top: 12rem;
    left: -14rem;
    transform: rotate(28deg) scale(2);
    opacity: 20%;
  }

  .decor-2 {
    position: absolute;
    z-index: -99;
    color: var(--clr-primary-400);
    bottom: 16.4rem;
    right: -12rem;
    transform: rotate(-40deg) scale(2.4);
    opacity: 30%;
  }
</style>
