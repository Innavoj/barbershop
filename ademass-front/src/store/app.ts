// Utilities
import { defineStore } from "pinia";
import IResponse from "@/interfaces/IResponse";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      token: null,
      baseUrl: "api_url_base",
    };
  },
  actions: {
    async register(name: string, email: string, password: string) {
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
        `El username es: ${name}, El password es: ${password}, El correo es: ${email} `
      );
      if (response.status === false) {
        return false;
      } else {
        //this.token = response.token
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

      console.log(`El email es: ${email} y el password es: ${password}`);

      const response: IResponse = { status: true };
      if (response.status === false) {
        //this.token = null
        return false;
      } else {
        //this.token = response.token
        return true;
      }
    },
    logout() {
      this.token = null;
    },
    async newpassword(nuevapassword, confirmpassword) {
      alert(
        "Ha introducido la Nueva Password: " +
          nuevapassword +
          " y " +
          confirmpassword
      );
    },
  },
});
