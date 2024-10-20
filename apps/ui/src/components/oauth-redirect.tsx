"use client";

import { jwtDecode } from "jwt-decode";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { AuthDef, useAuthStore } from "@/store/auth";

export const GoogleOAuthSuccessRedirect = () => {
  const params = useSearchParams();
  const { setUser } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    const jwtUser = params.get("jwtUser");
    if (jwtUser) {
      const userFromJwt: AuthDef = jwtDecode(jwtUser);
      if (userFromJwt) {
        setUser(userFromJwt);
      }
    }

    router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Logging in...</div>;
};
