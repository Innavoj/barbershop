// Utilities
import { defineStore } from "pinia";
import IResponse from "@/interfaces/IResponse";
import AuthServices from "@/services/AuthServices";
// 11|uZuVhZUAKMgc5hRYZfZD9IICkcxwoRHBzT6t6sg86b7a3211

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      token: "",
      // baseUrl: "api_url_base",
    };
  },
  actions: {
    async register(
      name: string,
      lastname: string,
      email: string,
      password: string
    ) {
      //const uri = `${this.baseUrl}/api/endpoint`

      //Peticion al endpoint, por método post
      /*const rawResponse = await fetch(uri,{
          method: 'POST',
          headers: {
              'Content-Type': 'Application/json',
              'Accept': 'Application/json'
          },
          body: JSON.stringify({
              "name": name,
              "email": email,
              "password": password
          })
      })

      //Obteniendo los resultados json
      const response = await rawResponse.json()*/
      //manage response
      const response: IResponse = { status: true };
      console.log(
        `El username es: ${name}, El lastname es: ${lastname} El password es: ${password}, El correo es: ${email} `
      );
      if (response.status === false) {
        return false;
      } else {
        // this.token = response.token
        return true;
      }
    },
    async login(email: string, password: string) {
      //Construcción de la uri
      //const uri = `${this.baseUrl}/auth/endpoint`

      //Construcción de la petición.
      /*
      const rawResponse = await fetch(uri,{
          method: 'POST',
          headers: {
              'Content-Type': 'Application/json',
              'Accept': 'Application/json'
          },
          body: JSON.stringify({
             "email": email,
             "password": password
          })
      })
      */

      //Esperando la respuesta en json
      //const response = await rawResponse.json()

      // const response: IResponse = { status: true };
      // if (response.status === false) {
      //   //this.token = null
      //   return false;
      // } else {
      //   //this.token = response.token
      //   return true;
      // }
      console.log(`El email es: ${email} y el password es: ${password}`);

      // Usando el servicio para autenticaciones

      const authService = new AuthServices();
      const response = await authService.userLogin(email, password);

      if (response) {
        alert("éxito");
        return (this.token = authService.getToken().value);
      } else {
        alert("login incorrecto");
      }
      console.log("usuario logueado", this.token);
    },
    async logout() {
      alert("estamos en el logout");
      const authService = new AuthServices();
      const response = await authService.logout(this.token);
      if (response) {
        alert("Logout Exitoso" + this.token);
        return (this.token = "null");
      } else {
        alert("Fallo en el Logout");
      }
    },
    async newpassword(nuevapassword: string, confirmpassword: string) {
      alert(
        "Ha introducido la Nueva Password: " +
          nuevapassword +
          " y " +
          confirmpassword
      );
    },
  },
});
