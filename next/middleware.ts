export { auth as middleware } from "@/auth";
// import { NextRequest, NextResponse } from "next/server";

// export const middleware = (request: NextRequest) => {
//   const token = request.headers.get("Authorization");
//   if (!token) {
//     // return NextResponse.redirect(new URL("/login", request.url));
//     return new Response("Unauthorized", { status: 401 });
//   }

//   return NextResponse.next();
// };

// export const config = {
//   matcher: ["/api/:path*"],
// };
