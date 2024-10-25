<script lang="ts">
import { onMount } from 'svelte'
import { fade } from 'svelte/transition'

let loadContent = $state(false)
onMount(() => {
  loadContent = true
})
</script>

<svelte:head>
  <link rel="preload" as="image" href="/highlights/11/kki.webp" />
  <link rel="preload" as="image" href="/highlights/11/extracurricular.webp" />
</svelte:head>

{#if loadContent}
  <div in:fade={{ delay: 200 }}>
    <h2>KKI</h2>
    <p>
      I along with a few others went to the <span
        >Ministry of State Secretariat of the Republic of Indonesia
        (Kemensetneg)</span
      >. There, we were taught about hardware networking, cybersecurity, and
      data processing there. They also showed us one of their datacenter rooms.
      Overall, I found it to be a very fun and interactive experience.
    </p>
    <img
      src="/highlights/11/kki.webp"
      alt="ministry of state secretariat of the republic of indonesia entrance"
    />
  </div>

  <div in:fade={{ delay: 400 }}>
    <h2>PLASA</h2>
    <p>
      For PLASA, I went to the <span>Sukawening</span> village in Ciwidey. There
      I made memories, getting to know some locals and also bonded with friends.
      It also gave me a new perspective about living conditions in Indonesia and
      how grateful I should be for the things I have. We also learned quite a
      bit about the local culture.
      <img
        src="/highlights/11/plasa.webp"
        alt="view of of local houses in the Sukawening village"
      />
    </p>
  </div>

  <div in:fade={{ delay: 600 }}>
    <h2>Scientific Paper</h2>
    <p>
      The scientific paper I wrote was <span
        >"Pengaruh Etilen Pada Berbagai Jenis Apel Terhadap Proses Pematangan
        Pisang Kepok"
      </span>, because I wanted to know whether the ethylene in a variety of
      apples could affect the maturation of the kepok banana. From the
      experiment, I concluded that ethylene in some types of apples speed up the
      maturation more than others.
    </p>
    <a href="/projects/ilmiah2.pdf" target="_blank">Read the paper</a>
  </div>

  <div in:fade={{ delay: 800 }}>
    <h2>Best Work</h2>
    <p>
      On year 11, my favorite work was for a <span>Biology</span>
      assignment. We were asked to create a poster about a nervous system illness,
      and I chose to create one about having a stroke. I find that it looks pretty
      good compare to some of my other work.
    </p>
    <a href="/projects/stroke.webp" target="_blank">Check out the work</a>
  </div>

  <div in:fade={{ delay: 1000 }}>
    <h2>Extra Curricular</h2>
    <p>
      I continued in the school <span>coding</span> club from year 10 and I learned
      a few new things about the program we were using. I've also begun writing more
      complex code outside of school.
    </p>
    <img
      src="/highlights/11/extracurricular.webp"
      alt="construct editor project menu"
    />
  </div>

  <div in:fade={{ delay: 1400 }}>
    <h2>Achievements</h2>
    <p>
      One of my prouder moments during year 11 was when I did a speech during a
      Friday prayer. I'm a relatively introverted person, so my ability in doing <span
        >public speaking</span
      > is something I personally celebrate.
    </p>
  </div>
{/if}
