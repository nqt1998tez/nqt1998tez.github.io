/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1400px"},
    extend: {
      fontFamily: {sans:["Be Vietnam Pro","system-ui","sans-serif"],mono:["ui-monospace","SFMono-Regular","monospace"]},
      fontSize: {
        xs:["0.75rem",{lineHeight:"1.5"}],
        sm:["0.875rem",{lineHeight:"1.6"}],
        base:["1rem",{lineHeight:"1.7"}],
        lg:["1.125rem",{lineHeight:"1.5"}],
        xl:["1.25rem",{lineHeight:"1.4"}],
        "2xl":["1.5rem",{lineHeight:"1.35"}],
        "3xl":["1.875rem",{lineHeight:"1.25"}],
        "4xl":["2.25rem",{lineHeight:"1.2"}],
        "5xl":["3rem",{lineHeight:"1.14"}],
        "6xl":["3.75rem",{lineHeight:"1.1"}]
      },
      colors:{
        background:"var(--color-bg)",
        deep:"var(--color-bg-deep)",
        card:"var(--color-surface)",
        surface2:"var(--color-surface-2)",
        gold:"var(--color-accent)",
        goldLight:"var(--color-accent-light)",
        cyan:"var(--color-cyan)",
        muted:"var(--color-muted)",
        positive:"var(--color-positive)"
      },
      borderRadius:{xl:"var(--radius-xl)"},
      maxWidth:{"site":"var(--content-max)","wide":"1440px"}
    }
  },
  plugins:[]
};
