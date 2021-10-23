module.exports = {
    reactStrictMode: true,

    async rewrites() {
        return [
            {
                source: '/admin-login',
                destination: '/admin/login'
            }
        ]
    },
    env: {
        BASE_URL: process.env.BASE_URL,
        API_URL: process.env.API_URL,
    },
    serverRuntimeConfig: {
        API_URL: process.env.API_URL,
    },
}