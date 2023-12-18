/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["roboto", "regular"],
            },
            borderRadius: {
                shape: "62% 38% 70% 30% / 39% 42% 58% 61%",
                shapeTwo: "70% 30% 46% 54% / 33% 77% 23% 67% ",
            },
            colors:{
                grey1: "#E7E7E7",
            },
            keyframes: {
                spinShape: {
                    "0%": {
                        transform: "rotate(0deg)",
                        borderRadius: "62% 38% 70% 30% / 39% 42% 58% 61%",
                    },
                    "20%": {
                        transform: "rotate(70deg)",
                        borderRadius: "66% 34% 61% 39% / 30% 62% 38% 80%  ",
                    },
                    "40%": {
                        transform: "rotate(150deg)",
                        borderRadius: "72% 28% 52% 48% / 32% 51% 49% 68% ",
                    },
                    "60%": {
                        transform: "rotate(230deg)",
                        borderRadius: "73% 27% 59% 41% / 40% 50% 50% 60% ",
                    },
                    "80%": {
                        transform: "rotate(300deg)",
                        borderRadius: "66% 34% 61% 39% / 40% 62% 38% 80% ",
                    },
                    "100%": {
                        transform: "rotate(360deg)",
                        borderRadius: "62% 38% 70% 30% / 39% 42% 58% 61%",
                    },
                },
                scrollDown:{
                    "0%":{ transform: "translateY(0px)"},
                    "100%":{transform: "translateY(-1000px)"}
                }
            },
            animation: {
                spinShape: "spinShape 20s linear infinite",
                scrollDown: "scrollDown 15s linear infinite"
            },
        },
    },
    plugins: [],
};
