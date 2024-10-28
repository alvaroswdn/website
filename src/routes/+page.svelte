<script lang="ts">
import { fly } from 'svelte/transition'
import { onMount } from 'svelte'

let loadDecoration = $state(false)
onMount(() => {
  loadDecoration = true
})
</script>

<svelte:head>
  <title>Home - alvaroswdn</title>
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
    <h2 class="hero-title">
      My name's <span>Alvaro Raditya Soewardono</span>. I'm a
      <span>student</span>
      born in
      <span>Jakarta, Indonesia</span>. I like learning web and system
      technologies.
    </h2>
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

<section class="skills">
  <h1 class="skills-title">Skills</h1>
  <div class="skills-gallery">
    <a href="https://www.typescriptlang.org" class="skill-item item-primary">
      <svg class="skill-icon" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="6" fill="currentColor"/>
        <path d="m74.2622 99.468v14.026c2.2724 1.168 4.9598 2.045 8.0625 2.629 3.1027.585 6.3728.877 9.8105.877 3.3503 0 6.533-.321 9.5478-.964 3.016-.643 5.659-1.702 7.932-3.178 2.272-1.476 4.071-3.404 5.397-5.786 1.325-2.381 1.988-5.325 1.988-8.8313 0-2.5421-.379-4.7701-1.136-6.6841-.758-1.9139-1.85-3.6159-3.278-5.1062-1.427-1.4902-3.139-2.827-5.134-4.0104-1.996-1.1834-4.246-2.3011-6.752-3.353-1.8352-.7597-3.4812-1.4975-4.9378-2.2134-1.4567-.7159-2.6948-1.4464-3.7144-2.1915-1.0197-.7452-1.8063-1.5341-2.3598-2.3669-.5535-.8327-.8303-1.7751-.8303-2.827 0-.9643.2476-1.8336.7429-2.6079s1.1945-1.4391 2.0976-1.9943c.9031-.5551 2.0101-.9861 3.3211-1.2929 1.311-.3069 2.7676-.4603 4.3699-.4603 1.1658 0 2.3958.0877 3.6928.263 1.296.1753 2.6.4456 3.911.8109 1.311.3652 2.585.8254 3.824 1.3806 1.238.5552 2.381 1.198 3.43 1.9285v-13.1051c-2.127-.8182-4.45-1.4245-6.97-1.819s-5.411-.5917-8.6744-.5917c-3.3211 0-6.4674.3579-9.439 1.0738-2.9715.7159-5.5862 1.8336-7.844 3.353-2.2578 1.5195-4.0422 3.4553-5.3531 5.8075-1.311 2.3522-1.9665 5.1646-1.9665 8.4373 0 4.1785 1.2017 7.7433 3.6052 10.6945 2.4035 2.9513 6.0523 5.4496 10.9466 7.495 1.9228.7889 3.7145 1.5633 5.375 2.323 1.6606.7597 3.0954 1.5486 4.3044 2.3668s2.1628 1.7094 2.8618 2.6736c.7.9643 1.049 2.06 1.049 3.2873 0 .9062-.218 1.7462-.655 2.5202s-1.1 1.446-1.9885 2.016c-.8886.57-1.9956 1.016-3.3212 1.337-1.3255.321-2.8768.482-4.6539.482-3.0299 0-6.0305-.533-9.0021-1.6-2.9715-1.066-5.7245-2.666-8.2591-4.799zm-23.5596-34.9136h18.2974v-11.5544h-51v11.5544h18.2079v51.4456h14.4947z" clip-rule="evenodd" fill="#fff" fill-rule="evenodd"/>
      </svg>        
      <h4 class="skill-title">TypeScript</h4>
    </a>
    <a href="https://go.dev" class="skill-item item-primary">
      <svg class="skill-icon" enable-background="new 0 0 254.5 225" version="1.1" viewBox="0 0 254.5 225" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
        <path d="m40.2 101.1c-0.4 0-0.5-0.2-0.3-0.5l2.1-2.7c0.2-0.3 0.7-0.5 1.1-0.5h35.7c0.4 0 0.5 0.3 0.3 0.6l-1.7 2.6c-0.2 0.3-0.7 0.6-1 0.6l-36.2-0.1z" fill="currentColor"/>
        <path d="m25.1 110.3c-0.4 0-0.5-0.2-0.3-0.5l2.1-2.7c0.2-0.3 0.7-0.5 1.1-0.5h45.6c0.4 0 0.6 0.3 0.5 0.6l-0.8 2.4c-0.1 0.4-0.5 0.6-0.9 0.6l-47.3 0.1z" fill="currentColor"/>
        <path d="m49.3 119.5c-0.4 0-0.5-0.3-0.3-0.6l1.4-2.5c0.2-0.3 0.6-0.6 1-0.6h20c0.4 0 0.6 0.3 0.6 0.7l-0.2 2.4c0 0.4-0.4 0.7-0.7 0.7l-21.8-0.1z" fill="currentColor"/>
        <path d="m153.1 99.3c-6.3 1.6-10.6 2.8-16.8 4.4-1.5 0.4-1.6 0.5-2.9-1-1.5-1.7-2.6-2.8-4.7-3.8-6.3-3.1-12.4-2.2-18.1 1.5-6.8 4.4-10.3 10.9-10.2 19 0.1 8 5.6 14.6 13.5 15.7 6.8 0.9 12.5-1.5 17-6.6 0.9-1.1 1.7-2.3 2.7-3.7h-19.3c-2.1 0-2.6-1.3-1.9-3 1.3-3.1 3.7-8.3 5.1-10.9 0.3-0.6 1-1.6 2.5-1.6h36.4c-0.2 2.7-0.2 5.4-0.6 8.1-1.1 7.2-3.8 13.8-8.2 19.6-7.2 9.5-16.6 15.4-28.5 17-9.8 1.3-18.9-0.6-26.9-6.6-7.4-5.6-11.6-13-12.7-22.2-1.3-10.9 1.9-20.7 8.5-29.3 7.1-9.3 16.5-15.2 28-17.3 9.4-1.7 18.4-0.6 26.5 4.9 5.3 3.5 9.1 8.3 11.6 14.1 0.6 0.9 0.2 1.4-1 1.7z" fill="currentColor"/>
        <path d="m186.2 154.6c-9.1-0.2-17.4-2.8-24.4-8.8-5.9-5.1-9.6-11.6-10.8-19.3-1.8-11.3 1.3-21.3 8.1-30.2 7.3-9.6 16.1-14.6 28-16.7 10.2-1.8 19.8-0.8 28.5 5.1 7.9 5.4 12.8 12.7 14.1 22.3 1.7 13.5-2.2 24.5-11.5 33.9-6.6 6.7-14.7 10.9-24 12.8-2.7 0.5-5.4 0.6-8 0.9zm23.8-40.4c-0.1-1.3-0.1-2.3-0.3-3.3-1.8-9.9-10.9-15.5-20.4-13.3-9.3 2.1-15.3 8-17.5 17.4-1.8 7.8 2 15.7 9.2 18.9 5.5 2.4 11 2.1 16.3-0.6 7.9-4.1 12.2-10.5 12.7-19.1z" fill="currentColor"/>
      </svg>
      <h4 class="skill-title">Go</h4>
    </a>
    <a href="https://www.java.com" class="skill-item item-primary">
      <svg class="skill-icon" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <path d="m28.188 0c2.75 6.3633-9.8594 10.293-11.031 15.594-1.0742 4.8711 7.4922 10.531 7.5 10.531-1.3008-2.0156-2.2578-3.6758-3.5625-6.8125-2.207-5.3047 13.441-10.105 7.0938-19.312zm8.375 8.8125s-11.062 0.71094-11.625 7.7812c-0.25 3.1484 2.9102 4.8047 3 7.0938 0.074219 1.8711-1.875 3.4375-1.875 3.4375s3.5469-0.67578 4.6562-3.5312c1.2305-3.168-2.3984-5.3086-2.0312-7.8438 0.35156-2.4258 7.875-6.9375 7.875-6.9375zm-17.375 16.344s-10.125-0.14453-10.125 2.7188c0 2.9922 13.254 3.2148 22.719 1.375 0 0 2.5156-1.7305 3.1875-2.375-6.2031 1.2656-20.344 1.4062-20.344 0.3125 0-1.0078 4.5625-2.0312 4.5625-2.0312zm19.469 0c-0.99219 0.078125-2.0625 0.46094-3.0312 1.1562 2.2812-0.49219 4.2188 0.92188 4.2188 2.5312 0 3.625-5.25 7.0312-5.25 7.0312s8.125-0.92188 8.125-6.875c0-2.7031-1.8789-4.0156-4.0625-3.8438zm-21.906 5.5625c-1.5547 0-3.875 1.2188-3.875 2.375 0 2.3242 11.688 4.1133 20.344 0.71875l-3-1.8438c-5.8672 1.8789-16.672 1.2656-13.469-1.25zm1.4375 5.2188c-2.1289 0-3.5312 1.2852-3.5312 2.25 0 2.9844 12.715 3.2852 17.75 0.25l-3.1875-2.0312c-3.7617 1.5898-13.203 1.832-11.031-0.46875zm-7.0938 2.6875c-3.4688-0.070312-5.7188 1.4883-5.7188 2.7812 0 6.875 35.5 6.5586 35.5-0.46875 0-1.168-1.3477-1.7344-1.8438-2 2.9023 6.7188-29.062 6.1836-29.062 2.2188 0-0.90234 2.3516-1.7656 4.5312-1.3438l-1.8438-1.0625c-0.54297-0.082031-1.0664-0.11328-1.5625-0.125zm33.531 4.625c-5.3984 5.1172-19.078 6.9727-32.844 3.8125 13.762 5.6328 32.777 2.4727 32.844-3.8125z" fill="currentColor"/>
      </svg>
      <h4 class="skill-title">Java</h4>
    </a>
    <div class="skill-item item-secondary">
      <h4 class="skill-title">Frontend Web Development</h4>
    </div>
    <div class="skill-item item-secondary">
      <h4 class="skill-title">Backend Web Development</h4>
    </div>
    <div class="skill-item item-secondary">
      <h4 class="skill-title">System Administration</h4>
    </div>
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
    left: -14rem;
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

  .hero, .skills {
    position: relative;
    display: flex;
    max-width: 60rem;
    min-height: 28rem;
    height: 100%;
  }

  .hero {
    gap: 2rem;
    flex-direction: column-reverse;
    align-items: center;
  }

  .skills {
    margin-top: 4rem;
    flex-direction: column;
    gap: 1rem;
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

  .skills-title {
    font-size: var(--fs-800);
    color: var(--clr-accent-400);
    font-family: var(--ff-accent);
  }

  .skills-gallery {
    display: flex;
    flex-flow: wrap;
    gap: 1rem;
    font-size: var(--fs-500);
  }
  
  .skill-item {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.6rem 1.2rem;
    border-radius: 4px;
    text-decoration: none;
    text-wrap: nowrap;
    transition: all .2s ease-in;
  }

  .item-primary {
    outline: 2px var(--clr-primary-400) solid;
  }

  .item-secondary {
    outline: 2px var(--clr-primary-100) solid;
    color: var(--clr-primary-100);
  }
  
  a.skill-item:hover {
    transform: translateY(-4px);
  }

  .skill-icon {
    height: 1.4em;
  }

  @media (min-width: 50em) {
    .decor {
      display: block;
    }

    .hero {
      flex-direction: row;
    }

    .skills {
      margin-top: 0.2rem;
    }
  }
</style>
