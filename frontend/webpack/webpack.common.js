const glob = require("glob");
const Path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const { InjectManifest } = require('workbox-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const getEntryObject = () => {
  const entries = {};
  glob.sync(Path.join(__dirname, "../src/application/*.js")).forEach((path) => {
    const name = Path.basename(path, ".js");
    entries[name] = path;
  });
  return entries;
};

module.exports = {
  entry: getEntryObject(),
  output: {
    path: Path.join(__dirname, "../build"),
    filename: "js/[name].js",
    publicPath: "/static/",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },

    runtimeChunk: "single",
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: Path.resolve(__dirname, "../vendors"), to: "vendors" },
      ],
    }),
    new WebpackAssetsManifest({
      entrypoints: true,
      output: "manifest.json",
      writeToDisk: true,
      publicPath: true,
    }),
    new FaviconsWebpackPlugin({
      // Your source logo (required)
      logo: "./vendors/images/favicon/favicon.png",
      // Prefix path for generated assets
      prefix: "assets/",
      developerName: "Jeremiah E. David",
      developerURL: "http://darkocdr.codes",
      // The prefix for all image files (might be a folder or a name)
      // background: "#fff",
      // The color for your icons. See
      theme_color: "#fff",
      // manifestRelativePaths: true,
      // Inject the html into the html-webpack-plugin
      appleStatusBarStyle: "black-translucent",
      scope: '/',
      start_url: '/',
      devMode: "webapp", // optional can be 'webapp' or 'light' - 'light' by default
      // Favicons configuration options. Read more on: https://github.com/evilebottnawi/favicons#usage
      favicons: {
          appName: "Trustscrow", // Your application's name. `string`
          icons: {
              favicons: true, // Create regular favicons. `boolean`
              android: true, // Create Android homescreen icon. `boolean` or `{ offset, background }`
              appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background }`
              appleStartup: false, // Create Apple startup images. `boolean` or `{ offset, background }`
              coast: false, // Create Opera Coast icon. `boolean` or `{ offset, background }`
              firefox: true, // Create Firefox OS icons. `boolean` or `{ offset, background }`
              windows: true, // Create Windows 8 tile icons. `boolean` or `{ background }`
              yandex: true, // Create Yandex browser icon. `boolean` or `{ background }`
          },
        },
    }),
    new HtmlWebpackPlugin(),
    new InjectManifest({
      swSrc: './src/sw.js',
      // swDest: '../../ugoafrica/templates/sw.js',
      maximumFileSizeToCacheInBytes: 15000000,
    }),

  ],
  resolve: {
    alias: {
      "~": Path.resolve(__dirname, "../src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
          },
        },
      },
    ],
  },
};
