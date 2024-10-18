import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default fixupConfigRules([...compat.extends("next/core-web-vitals", "prettier"), {
    languageOptions: {
        globals: {
            ...globals.browser,
            JSX: "readonly",
            RequestInit: true,
        },
    },
    rules: {
        "no-undef": "error",
        "no-unused-vars": "warn",
        "no-unused-expressions": "warn",
        "no-extra-semi": "warn",

        "import/order": [1, {
            groups: ["external", "builtin", "internal", "sibling", "parent", "index"],

            pathGroups: [{
                pattern: "@/components",
                group: "internal",
            }, {
                pattern: "@/lib",
                group: "internal",
            }, {
                pattern: "@/__generated__",
                group: "internal",
            }, {
                pattern: "@/styles",
                group: "internal",
            }],

            pathGroupsExcludedImportTypes: ["internal"],

            alphabetize: {
                order: "asc",
                caseInsensitive: true,
            },
        }],
    },
},
{
    ignores: ["**/node_modules/", "**/.next/", "**/src/generated/", "**/lib/leaflet/"],
},
{
    files: ["**/*.js", "**/*.mjs"],

    languageOptions: {
        ecmaVersion: "latest",
        sourceType: "script",
    },
}]);