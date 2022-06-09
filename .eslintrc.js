module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        // TODO: Pilih rules yang cocok nanti
        // "semi": ["error", "always"],
        // "quotes": ["error", "double"], 
        // "curly": "error",

        "no-undef": "off",
        "no-extra-boolean-cast": "off",
        "no-unused-vars": "off",

        // "max-len": "off",
        // "linebreak-style": "off",
    }
}
