// export { auth as middleware } from "@/auth";
import { auth } from "@/auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  console.log("ROUTE: ", req.nextUrl.pathname);
  console.log("IS LOGGED IN: ", isLoggedIn);
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  // Matcher is from Clerk and is the almost perfect matcher solution
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
