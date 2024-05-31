// export { auth as middleware } from "@/auth";
import { auth } from "@/auth";

export default auth((req) => {
  const publicRoutes = ["/login", "/signup"];
  if (!req.auth && !publicRoutes.includes(req.nextUrl.pathname)) {
    return Response.redirect(req.nextUrl.origin + "/login");
  }
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  // Matcher is from Clerk and is the almost perfect matcher solution
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
