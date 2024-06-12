import axios, { AxiosError } from "axios";
import { defineStore } from "pinia";
export const useUserStore = defineStore("user", () => {
  const API = "http://127.0.0.1:8000/api/auth/";
  const form = <authForm>reactive({
    username: "",
    password: "",
  });
  let currentUser = ref<user | false>(false);
  let item = <string | null>localStorage.getItem("currentUser");
  if (typeof item === "string") {
    currentUser = JSON.parse(item);
  }
  const auth = async (form: authForm): Promise<error | true> => {
    let error = ref<error>(undefined);
    return await axios
      .post(<string>API, <authForm>form)
      .then((res) => {
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        currentUser = res.data;
        navigateTo("/");
        return true;
      })
      .catch((err: unknown) => {
        if (err instanceof AxiosError) {
          error.value = err.response?.data.error;
          return err.response?.data.error;
        }
      });
  };
  const logout = (): void => {
    localStorage.removeItem("currentUser");
    navigateTo("/auth");
  };
  return { form, auth, currentUser, logout };
});
