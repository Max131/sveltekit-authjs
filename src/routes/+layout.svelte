<script lang="ts">
  import "../app.scss"
  import Helmet from "$lib/Helmet.svelte"
  import { signOut } from "@auth/sveltekit/client"
  import { page } from "$app/stores"

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" })
  }
</script>

<Helmet />
<nav class="container">
  <ul>
    <li><strong>SvelteKit/AuthJS</strong></li>
  </ul>
  <ul>
    <li>
      <a href="/">
        <small>Home</small>
      </a>
    </li>
    <li>
      <a href="/protected">
        <small> Protected </small>
      </a>
    </li>
    <li>
      {#if $page.data.session}
        <a href="#!" data-sveltekit-preload-data="off" on:click={handleSignOut}
          ><small>Sign out</small></a
        >
      {:else}
        <a href="/auth/signin" data-sveltekit-preload-data="off"
          ><small>Sign in</small></a
        >
      {/if}
    </li>
  </ul>
</nav>

<main class="container">
  <slot />
</main>
