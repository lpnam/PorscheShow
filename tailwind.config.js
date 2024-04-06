/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./src/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        button: "inset 0 0 0 0.09px black",
        "button-hver": "inset 0 0 0 250px black",
      },
      colors: {
        option1: "#ccc",
        option2: "#FF00FF",
        option3: "#EFBD4E",
        option4: "#726DE8",
        option0: "#353934",
      },
      width: {
        custom: "330px",
      },
      height: {
        custom: "64px",
      },
    },
  },
  plugins: [],
};
