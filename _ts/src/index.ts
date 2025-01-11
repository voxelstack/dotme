import { $store } from "@voxelstack/ceres";

function main() {
    const msg = $store("heeya");
    console.log(msg.value);
}
main();
