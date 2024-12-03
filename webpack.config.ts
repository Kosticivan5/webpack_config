// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");
// const path = require("path");
// import HtmlWebpackPlugin from "html-webpack-plugin";
// import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
import webpack from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";
import {
  BuildMode,
  BuildPaths,
  BuildPlatform,
} from "./config/build/types/types";
import path from "path";

interface EnvVariables {
  mode: BuildMode;
  port?: number;
  analyzer?: boolean;
  platform?: BuildPlatform;
}

// module.exports = (env: any) => {
export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    public: path.resolve(__dirname, "public"),
    output: path.resolve(__dirname, "build"),
    src: path.resolve(__dirname, "src"),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    paths: paths,
    mode: env.mode ?? "development",
    analyzer: env.analyzer,
    platform: env.platform ?? "desktop",
  });
  return config;
};
