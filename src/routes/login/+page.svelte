<script>
  import { page } from "$app/stores"
  import { signIn } from "@auth/sveltekit/client"
  import Helmet from "$lib/Helmet.svelte"
  import Google from "$lib/assets/Google.svelte"
  import Github from "$lib/assets/Github.svelte"

  const handleSignInGoogle = () => {
    signIn("google", { callbackUrl: "/protected" })
  }

  const handleSignInGithub = () => {
    signIn("github", { callbackUrl: "/protected" })
  }
</script>

<Helmet title="Login" />
{#if !$page.data.session}
  <h1 class="welcome">Welcome</h1>
  <p class="text">Log in to continue to SvelteKit Auth Example</p>

  <button on:click={handleSignInGoogle}>
    <Google />
    <span> Continue with Google </span>
  </button>

  <button on:click={handleSignInGithub}>
    <Github />
    <span> Continue with Github </span>
  </button>
{/if}
