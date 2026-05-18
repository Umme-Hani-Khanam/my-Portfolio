export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.28)",
      },
      colors: {
        surface: "#11121b",
        panel: "rgba(15, 23, 42, 0.7)",
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at top left, rgba(139, 92, 246, 0.2), transparent 30%), radial-gradient(circle at 85% 15%, rgba(59, 130, 246, 0.16), transparent 18%)",
      },
    },
  },
  plugins: [],
};
