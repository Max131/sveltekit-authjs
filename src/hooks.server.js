import { SvelteKitAuth } from "@auth/sveltekit"
import Google from "@auth/sveltekit/providers/google"
import GitHub from "@auth/sveltekit/providers/github"
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GITHUB_ID, GITHUB_SECRET } from "$env/static/private"

export const { handle } = SvelteKitAuth({
  providers: [
    Google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          ...profile,
          role: profile.role ?? "user",
        }
      }
    }),
    GitHub({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
      profile(profile) {
        return {
          ...profile,
          role: profile.role ?? "user",
        }
      }
    })
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    session({ session, token }) {
      session.user.role = token.role
      return session
    }
  },
  pages: {
    signIn: "/login"
  }
})
