module.exports = {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],
    theme: {
        extend: {
            fontFamily: {
                "palmiak-font": ['"JetBrainsMono"', "serif"],
                "palmiak-font-serif": ['"JetBrainsMono"', "serif"],
                "palmiak-font-sansserif": ['"Poppins"', "sans-serif"],
            },

            colors: {
                "palmiak_pink": "#EA4C88",
                "palmiak_blue": "#16E6F3",
                "palmiak_green": "#35DAE5",
                "palmiak_purple": "#3F2DB9",
                "palmiak_bg": "#1D1F57",
                "palmiak_dark_bg": "#151738"
            },
            lineHeight: {
                'h1': '130%',
                'h2': '120%',
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require('@tailwindcss/forms')
    ],
};
