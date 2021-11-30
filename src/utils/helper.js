export const
    fetchToken = () => {
        return JSON.parse(decodeURIComponent(localStorage.getItem("quuid"))) ?? null
    },
    clearToken = () => {
        localStorage.removeItem("quuid")
    }