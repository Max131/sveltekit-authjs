import { SvelteKitAuth } from "@auth/sveltekit"
import Google from "@auth/sveltekit/providers/google"
import GitHub from "@auth/sveltekit/providers/github"
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GITHUB_ID, GITHUB_SECRET } from "$env/static/private"

export const handle = SvelteKitAuth({
  providers: [
    Google({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET }),
    GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })
  ],
  pages: {}
})
