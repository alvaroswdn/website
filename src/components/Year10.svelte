<script lang="ts">
import { onMount } from 'svelte'
import { fade } from 'svelte/transition'

let loadContent = $state(false)
$effect(() => {
  loadContent = true
})
</script>

<svelte:head>
  <link rel="preload" as="image" href="/highlights/10/extracurricular.webp" />
  <link rel="preload" as="image" href="/highlights/10/achievement.webp" />
</svelte:head>

{#if loadContent}
  <div in:fade={{ delay: 200 }}>
    <h2>Webinar</h2>
    <p>
      In year 10, I recall watching a webinar on how to run a successful event.
      I found the material quite interesting, as it gave useful insight on the
      fundamentals of running an event.
    </p>
  </div>

  <div in:fade={{ delay: 400 }}>
    <h2>Drama</h2>
    <p>
      For our year 10 drama, my class created a Little Women inspired drama we
      named <span>Bertaut</span>. It tells a story about four sisters growing
      up/ In it, I played as the <span>father</span>
      and also helped in the
      <span>music department</span>.
    </p>
  </div>

  <div in:fade={{ delay: 600 }}>
    <h2>Best Work</h2>
    <p>
      One of my favorite work has to be one I made for my
      <span>Arts & Culture</span> class. We were assigned to create any kind of digital
      art, and I chose to create a view of the sun setting in a horizon with purple
      being the primary color. I liked it because I got to work on my more creative
      side.
    </p>
    <a href="/highlights/10/best-work.webp" target="_blank"
      >Check out the work</a
    >
  </div>

  <div in:fade={{ delay: 800 }}>
    <h2>Extra Curricular</h2>
    <p>
      During my first year of highschool, I focused on my passion which was and
      still is <span>coding</span>. I joined the school coding club, but also
      did some work outside of school as I wanted the liberty to do what I'm
      most interested in.
    </p>
    <img
      src="/highlights/10/extracurricular.webp"
      alt="construct editor project menu"
    />
  </div>

  <div in:fade={{ delay: 1000 }}>
    <h2>Roles in School</h2>
    <p>
      During one of the webinars held by the school, I was asked to be a <span
        >moderator</span
      >, so I accepted the offer. I helped in ensuring the webinar was running
      smoothly and also presented/shared the material video.
    </p>
  </div>

  <div in:fade={{ delay: 1200 }}>
    <h2>Achievements</h2>
    <p>
      The achievement I was most happy with during those years was that I was
      able to <span>create a website from scratch</span>. Because previously
      I've only modified/edited websites that had already existed. But after a
      while, I decided I wanted to make a website from scratch, and it worked
      out and I'm very happy with it.
    </p>
    <img
      src="/highlights/10/achievement.webp"
      alt="view of modern game website"
    />
  </div>
{/if}
