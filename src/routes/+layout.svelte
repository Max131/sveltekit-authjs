<script lang="ts">
  import "../app.scss"
  import { page } from "$app/stores"
</script>

<div>
  <nav class="container">
    <ul>
      <li><strong>SvelteKit/AuthJS</strong></li>
    </ul>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/protected">Protected</a>
      </li>
    </ul>
    <ul>
      <li>
        {#if $page.data.session}
          {#if $page.data.session.user?.image}
            <img src={$page.data.session.user.image} alt="" />
          {/if}
          <span>
            <small>Signed in as</small><br />
            <strong
              >{$page.data.session.user?.email ??
                $page.data.session.user?.name}</strong
            >
          </span>
          <a href="/auth/signout" data-sveltekit-preload-data="off">Sign out</a>
        {:else}
          <span>You are not signed in</span>
          <a href="/auth/signin" data-sveltekit-preload-data="off">Sign in</a>
        {/if}
      </li>
    </ul>
  </nav>
  <main class="container">
    <slot />
  </main>
</div>
