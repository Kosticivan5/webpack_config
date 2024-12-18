import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  const { port } = options;
  return {
    port: port ?? 3000,
    // open: true,
    // historyApiFallback working only on dev, if you want to pass stats with nginx, need to do proxy on index.html
    historyApiFallback: true,
    hot: true,
  };
}
