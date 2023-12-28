<script lang="ts">
  import Helmet from "$lib/Helmet.svelte"
  import { page } from "$app/stores"
</script>

<Helmet title="Protected Page" />
{#if $page.data.session}
  <h1>Protected page</h1>
  <p>
    This is a protected content. You can access this content because you are
    signed in.
  </p>
  {#if $page.data.session.user?.image}
    <p>
      <img src={$page.data.session.user.image} alt="" width="96" height="96" />
    </p>
  {/if}
  <p>
    Signed in as: <strong>{$page.data.session.user?.name}</strong><br />
    {$page.data.session.user?.email ?? $page.data.session.user?.name}
  </p>
  <p>Session expiry: {$page.data.session?.expires}</p>
{:else}
  <h1>Access Denied</h1>
  <p>
    <a href="/auth/signin"> You must be signed in to view this page </a>
  </p>
{/if}
