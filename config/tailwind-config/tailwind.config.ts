import type { Config } from 'tailwindcss';

// leave content key/value up to individual packages
const config: Omit<Config, "content"> = {
    theme: {
        extend: {},
    },
    plugins: [],
}
export default config; 