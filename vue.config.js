module.exports = {
    devServer: {
        // overlay: {
        //     warnings: false,
        //     errors: false
        // },
        // lintOnSave: false
        proxy: {
            "/api":{
                target: 'http://127.0.0.1:8081/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
    }
    }
    
}
