import { Ref, ref } from "vue";

class AuthServices {
  private token: Ref<string>;

  constructor() {
    this.token = ref("");
  }

  getToken(): Ref<string> {
    return this.token;
  }

  async userLogin(email: string, password: string): Promise<boolean> {
    try {
      const url = new URL("https://ademass.com/barbershop/api/login");

      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      const res = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify({ email, password }),
      });
      const json = await res.json();

      if ("errors" in json) {
        return false;
      }

      this.token.value = json.token;
      return true;
      //
    } catch (err) {
      console.log(err);
      return false;
      // this.response = err;
    }
  }
}

export default AuthServices;
