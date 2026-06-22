import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const proxy = async (request: NextRequest) => {
  if (request.nextUrl.pathname.startsWith("/uses")) {
    return NextResponse.rewrite(new URL("/como-trabajo", request.url));
  }
};

export default proxy;
