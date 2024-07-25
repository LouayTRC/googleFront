import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = async (route, state) => {
  let response = false;
  const token = sessionStorage.getItem("token");
  const authService = inject(AuthService);
  const router = inject(Router);

  if (token) {
    try {
      const res = await authService.verifyToken(token).toPromise();
      console.log("res", res);

      if (!res.loggedIn) {
        response = false;
        router.navigate(['/home']);
        return response;
      }

      const hasMemberRole = res.user.roles.some((role: { name: string; }) => role.name === "ADMIN");
      console.log("has role", hasMemberRole);

      if (hasMemberRole) {
        response = true;
      } else {
        response = false;
        router.navigate(['/home']);
      }
    } catch (error) {
      response = false;
      router.navigate(['/home']);
    }
  } else {
    response = false;
    router.navigate(['/home']);
  }

  console.log("response", response);
  return response;
}
