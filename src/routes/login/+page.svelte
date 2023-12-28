<script>
  import { signIn, signOut } from "@auth/sveltekit/client"
  import { page } from "$app/stores"
  import Helmet from "$lib/Helmet.svelte"
  import Google from "$lib/assets/Google.svelte"
  import Github from "$lib/assets/Github.svelte"
  // let email = ""
  // const handleEmailSignIn = () => {
  //   signIn("email", { email, callbackUrl: "/protected" })
  // }

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/protected" })
  }

  const handleGithubSignIn = () => {
    signIn("github", { callbackUrl: "/protected" })
  }

  const handleSignOut = () => {
    signOut()
  }
</script>

<Helmet title="Login" />
{#if !$page.data.session}
  <!-- <img src={logo} alt="auth.js logo" class="logo" /> -->
  <h1 class="welcome">Welcome</h1>
  <p class="text">Log in to continue to SvelteKit Auth Example</p>

  <!-- <form on:submit={handleEmailSignIn}>
<input type="email" placeholder="example@gmail.com" bind:value={email} />
<button>Continue</button>
</form> -->

  <!-- <div class="divider-container">
<div />
<span>OR</span>
<div />
</div> -->

  <button on:click={handleGoogleSignIn}>
    <Google />
    <span> Continue with Google </span>
  </button>

  <button on:click={handleGithubSignIn}>
    <Github />
    <span> Continue with Github </span>
  </button>
{/if}

{#if $page.data.session}
  <div class="signout-container">
    <!-- <img src={logo} alt="auth.js logo" class="logo" /> -->

    <button on:click={handleSignOut}>Sign out</button>
  </div>
{/if}
