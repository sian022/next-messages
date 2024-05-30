// export { auth as middleware } from "@/auth";
import { auth } from "@/auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  // Matcher is from Clerk and is the almost perfect matcher solution
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
