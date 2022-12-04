import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    GoogleProvider({
      clientId: '413258412659-0f91kr4v2as110hvkbp9gpl022u43p11.apps.googleusercontent.com',
      clientSecret: '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',
      authorization: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code'
    })
  ],
}

export default NextAuth(authOptions)