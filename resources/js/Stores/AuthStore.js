import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: localStorage.getItem("user"),
        bearerToken: localStorage.getItem("bearerToken"),
    }),
    getters: {},
    actions: {
        setAuthFromResponse(response) {
            this.user = response.data.user;
            this.bearerToken = response.data.token;

            localStorage.setItem(
                "bearerToken",
                JSON.stringify(response.data.token)
            );

            localStorage.setItem("user", JSON.stringify(response.data.user));
        },
    },
});
