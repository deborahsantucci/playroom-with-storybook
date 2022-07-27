module.exports = {
    components: './src/stories',
    outputPath: './dist/playroom',

    // Optional:
    title: 'My Awesome Library',
    widths: [320, 768, 1024],
    port: 9000,
    openBrowser: true,
    paramType: 'search', // default is 'hash'
    exampleCode: `
    <div>Hey there, try to add something. i.e. this component: <Button /></div>
  `,
    baseUrl: '/playroom/',
    webpackConfig: () => ({
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env', '@babel/preset-react'
                            ]
                        }
                    }
                }
            ]
        }
    }),
    iframeSandbox: 'allow-scripts',
};