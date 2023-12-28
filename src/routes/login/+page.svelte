<script>
  import { signIn, signOut } from "@auth/sveltekit/client"
  import { page } from "$app/stores"
  // import logo from "$lib/assets/logo.png"
  // import Google from "$lib/components/icon/Google.svelte"

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
    <!-- <Google /> -->
    Continue with Google
  </button>

  <button on:click={handleGithubSignIn}>
    <!-- <Google /> -->
    Continue with Github
  </button>
{/if}

{#if $page.data.session}
  <div class="signout-container">
    <!-- <img src={logo} alt="auth.js logo" class="logo" /> -->

    <button on:click={handleSignOut}>Sign out</button>
  </div>
{/if}
