<script lang="ts">
import { onMount } from 'svelte'
import { fade } from 'svelte/transition'

let loadContent = $state(false)
onMount(() => {
  loadContent = true
})
</script>

<svelte:head>
  <link rel="preload" as="image" href="/highlights/12/college.webp" />
</svelte:head>

{#if loadContent}
  <div in:fade={{ delay: 200 }}>
    <h2>College Goal</h2>
    <p>
      My goal is to be able to receive a scholarship to study at the
      <span>University of Toronto</span>, majoring
      <span>Computer Science</span>. I believe that it would give me a good
      opportunity in life, allowing me to learn and meet a diverse group of
      people. Though, I do have alternate plans prepared if I fail to get
      accepted.
    </p>
    <img
      src="/highlights/12/college.webp"
      alt="one of University of Toronto's buildings"
    />
  </div>

  <div in:fade={{ delay: 400 }}>
    <h2>SWOT Analysis</h2>
    <p>
      <span>Strength:</span> Programming, problem solving, and smart <br />
      <span>Weakness:</span> Lazy, excessive snacking, and unsocial <br />
      <span>Opportunity:</span> Reach goals with knowledge & support <br />
      <span>Threat:</span> Unsocial may cause worsened networking
    </p>
  </div>

  <div in:fade={{ delay: 600 }}>
    <h2>Role Model's Path to Success</h2>
    <ol>
      <li>
        <span>Bill Gates</span> was born in <span>Seattle, Washington</span> in
        the year
        <span>1955</span>
      </li>
      <li>
        In <span>1967</span>, he enrolled at <span>Lakeside School</span>, where
        he first used a computer
      </li>
      <li>
        The following year, he began <span>programming</span> with
        <span>Paul Allen</span>
      </li>
      <li>
        He later entered <span>Harvard University</span> in the year
        <span>1973</span>
      </li>
      <li>
        But not long after, he <span>dropped out</span> to start
        <span>Microsoft</span> with Paul Allen
      </li>
    </ol>
  </div>

  <div in:fade={{ delay: 800 }}>
    <h2>Extra Curricular</h2>
    <p>
      I decided that this year, I'd like to explore my other interests,
      <span>photography</span> being one of them. I've joined the school photography
      club in hopes that I can learn to take better photographs and also videos.
      I've always had some interest in photography, but have not explored it until
      now.
    </p>
  </div>

  <div in:fade={{ delay: 1000 }}>
    <h2>Roles in School</h2>
    <p>
      Wanting to be part of a school organization, this year I represented my
      class in the <span>Class Representative Assembly (MPK)</span>. An
      organization assisting the Student Council (OSIS) with spreading
      information/news. I found that it's pretty fun up to this moment.
    </p>
  </div>
{/if}

<style>
  ol {
    text-align: left;
    text-align-last: left;
    font-size: var(--fs-600);
  }
</style>
