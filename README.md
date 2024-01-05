when i clone this app on git hub firstly i have to setup for tailwind css

-> npm install -D tailwindcss
-> npx tailwindcss init
copy and pase these two command
after that
copy and paste code from line number 9 to 17 in folder tailwind.config.js

module.exports = {
content: [
"./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}
and paste these line in index.css on top

@tailwind base;
@tailwind components;
@tailwind utilities;

and restart code
