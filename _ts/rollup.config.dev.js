import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/index.ts",
    output: {
        dir: "../assets/js",
        format: "es",
    },
    plugins: [
        nodeResolve(),
        typescript({ tsconfig: "tsconfig.json" }),
    ],
};
