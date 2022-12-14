module.exports = {
    components: './src/stories/index.jsx',
    outputPath: './dist/playroom',

    // Optional:
    title: 'My Awesome Library',
    baseUrl: './',
    widths: [320, 768, 1024],
    port: 9000,
    openBrowser: false,
    paramType: 'hash', // default is 'hash'
    exampleCode: `
    <div>Hey there, try to add something. <br /> i.e. this component: <Button label="Example button" primary /></div>
  `,
    webpackConfig: () => ({
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env', '@babel/preset-react'
                            ]
                        }
                    }
                },

                {
                    test: /\.css$/i,
                    exclude: /node_modules/,
                    use: ["style-loader", "css-loader"],
                },
            ]
        }
    }),
    iframeSandbox: 'allow-scripts',
};