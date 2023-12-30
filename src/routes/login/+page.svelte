<script>
  import { page } from "$app/stores"
  import { signIn, signOut } from "@auth/sveltekit/client"
  import Helmet from "$lib/Helmet.svelte"
  import Google from "$lib/assets/Google.svelte"
  import Github from "$lib/assets/Github.svelte"

  const handleSignIn = (event) => {
    const {
      target: { dataset },
    } = event
    signIn(dataset.provider, { callbackUrl: "/protected" })
  }
</script>

<Helmet title="Login" />
{#if !$page.data.session}
  <h1 class="welcome">Welcome</h1>
  <p class="text">Log in to continue to SvelteKit Auth Example</p>

  <button data-provider="google" on:click={handleSignIn}>
    <Google />
    <span> Continue with Google </span>
  </button>

  <button data-provider="github" on:click={handleSignIn}>
    <Github />
    <span> Continue with Github </span>
  </button>
{/if}
