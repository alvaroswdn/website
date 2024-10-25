<script lang="ts">
import { onMount } from 'svelte'
import { fly } from 'svelte/transition'
import { Link, projectList } from './data'

let modalVisible = $state(false)
let modalImage = $state('')
let modalAlt = $state('')

function showModal(image: string, alt: string) {
  modalImage = image
  modalAlt = alt
  modalVisible = true
}

let loadContent = $state(false)
onMount(() => {
  loadContent = true
  window.onkeyup = (e) => {
    if (e.code === 'Escape') modalVisible = false
  }
})
</script>

<svelte:head>
  <title>Projects - alvaroswdn</title>
  <meta name="description" content="Some projects I've worked on previously." />
</svelte:head>

{#if modalVisible}
  <div class="modal">
    <enhanced:img class="modal-img" src={modalImage} alt={modalAlt} />
    <button class="modal-close" aria-label="Close modal" onclick={() => (modalVisible = false)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
{/if}

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

    <h1 class="text-accent-400 fs-700" in:fly={{ y: 100 }}>
      Check out some of my projects
    </h1>
    <div class="gallery" in:fly={{ y: 100, delay: 100 }}>
      {#each projectList as project}
        {#if project.link == Link.MODAL}
          <button aria-label="Open image modal" onclick={() => showModal(project.content, project.alt)}>
            <enhanced:img class="gallery-img" src={project.thumb} alt={project.alt} fetchpriority="high" loading="eager" />
          </button>
        {:else}
          <a aria-label="Open image content" href={project.content}>
            <enhanced:img class="gallery-img" src={project.thumb} alt={project.alt} fetchpriority="high" loading="eager" />
          </a>
        {/if}
      {/each}
    </div>
  {/if}
</section>

<style>
  .modal {
    position: absolute;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    padding: 4rem 0;
    background: rgba(0, 0, 0, 50%);
    display: inline-block;
  }

  .modal-img {
    width: 90%;
    max-width: 40rem;
    margin: auto;
    height: auto;
    color: #fafafa;
  }

  .modal-close {
    position: absolute;
    top: 0.4rem;
    right: 1.2rem;
    color: #fafafa;
    width: 2rem;
    cursor: pointer;
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

  .gallery {
    line-height: 0;
    column-count: 4;
    gap: 0.8rem;
  }

  .gallery-img {
    width: 100%;
    height: auto;
    margin-bottom: 0.8rem;
    transition: 0.1s ease-out;
    position: relative;
    overflow: hidden;
    border-radius: 0.4rem;
  }

  .gallery-img:hover {
    outline: 0.2rem solid var(--clr-primary-400);
  }

  .decor-1 {
    position: absolute;
    z-index: -99;
    color: var(--clr-accent-400);
    top: 12rem;
    left: -14rem;
    transform: rotate(28deg) scale(2);
    opacity: 40%;
  }

  .decor-2 {
    position: absolute;
    z-index: -99;
    color: var(--clr-primary-400);
    bottom: 16.4rem;
    right: -12rem;
    transform: rotate(-40deg) scale(2.4);
    opacity: 60%;
  }

  @media (max-width: 1000px) {
    .gallery {
      column-count: 2;
    }
  }
</style>
