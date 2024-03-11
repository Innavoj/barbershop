// Utilities
import { defineStore } from "pinia";
import IResponse from "@/interfaces/IResponse";
import AuthServices from "@/services/AuthServices";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      /*token: null as string | null | undefined,
      baseUrl: "https://ademass.com/barbershop/api",
    };
  },
  actions: {
    async register(name: string, lastname: string, email: string, password: string) {
      const uri = `${this.baseUrl}/register`*/
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
      const rawResponse = await fetch(uri,{
          method: 'POST',
          headers: {
              'Content-Type': 'Application/json',
              'Accept': 'Application/json'
          },
          body: JSON.stringify({
              "name": name,
              "last_name": lastname,
              "email": email,
              "password": password
          })
      })

      //Obteniendo los resultados json
      const response: IResponse = await rawResponse.json()
      console.log(response.message)
      console.log(response.status)
      console.log(response.errors?.email)
      console.log(response.token)
      //manage response

      /*
      //cons response: IResponse = { status: true}
      //console.log(`El username es: ${name}, El lastname es: ${lastname} El password es: ${password}, El correo es: ${email} `)
      if (response.status === undefined) {
        return false
      } else {
        this.token = response.token
        return true
        */
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
    logout() {
      this.token = "";
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
