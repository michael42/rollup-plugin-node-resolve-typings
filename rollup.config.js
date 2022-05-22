import {nodeResolve} from "@rollup/plugin-node-resolve"
import nodeResolveDefaultImport from "@rollup/plugin-node-resolve"

export default {
    input: "index.js",
    output: {
        format: "esm",
        file: "build/index.mjs",
    },
    plugins: [
        nodeResolve(),
        nodeResolveDefaultImport(),
    ],
}
