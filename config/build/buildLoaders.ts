import { ModuleOptions } from "webpack";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
import { BuildOptions } from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const { mode } = options;

  const isDev = mode === "development";

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
      },
      // modules: {
      //   exportLocalsConvention: "camelCase", // or "camelCaseOnly"
      // },
      // importLoaders: 1,
    },
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: "convertColors",
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  };

  const assetLoader = {
    test: /\.(png|jpg|webp|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssLoaderWithModules,
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: "ts-loader",
        options: {
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: true,
        },
      },
    ],
    exclude: /node_modules/,
  };

  const babelLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-typescript",
          [
            "@babel/preset-react",
            {
              runtime: isDev ? "automatic" : "classic",
            },
          ],
        ],
      },
    },
  };

  return [
    assetLoader,
    scssLoader,
    // tsLoader,
    babelLoader,
    svgLoader,
  ];
}
