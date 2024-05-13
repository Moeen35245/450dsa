import { createUser } from "../lib/createUser";
import { signIn } from "next-auth/react";

async function userCredentials(enteredEmail, enteredPassword, ctx, router) {
  if (ctx.isLogin) {
    const result = await signIn("credentials", {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });
    ctx.setRes(result);
    // console.log(result);
    if (!result.error) {
      router.replace("/");
    }
    return result;
  } else {
    try {
      const result = await createUser(enteredEmail, enteredPassword);
      ctx.setRes({ ok: true, error: false, message: result.message });
      // console.log(result);
    } catch (err) {
      ctx.setRes({ ok: true, error: err.message });
    }
  }
}

export default userCredentials;
