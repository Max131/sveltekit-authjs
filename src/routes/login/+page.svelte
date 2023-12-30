<script>
  import { page } from "$app/stores"
  import { signIn } from "@auth/sveltekit/client"
  import Helmet from "$lib/Helmet.svelte"
  import Google from "$lib/assets/Google.svelte"
  import Github from "$lib/assets/Github.svelte"

  let loading = false

  const handleSignInGoogle = () => {
    loading = true
    signIn("google", { callbackUrl: "/protected" })
  }

  const handleSignInGithub = () => {
    loading = true
    signIn("github", { callbackUrl: "/protected" })
  }
</script>

<Helmet title="Login" />
<article aria-busy={loading}>
  {#if !$page.data.session}
    <h1 class="welcome">Welcome</h1>
    <p class="text">Log in to continue to SvelteKit Auth Example</p>

    <button disabled={loading} on:click={handleSignInGoogle}>
      <Google />
      <span> Continue with Google </span>
    </button>

    <button disabled={loading} on:click={handleSignInGithub}>
      <Github />
      <span> Continue with Github </span>
    </button>
  {/if}
</article>
