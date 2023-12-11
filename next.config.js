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
    async redirects() {
        return [
            {
                source: "/",
                destination: "/portfolio",
                permanent: false,
            }
        ]
    },
    env: {
        BASE_URL: process.env.BASE_URL,
        API_SSR_URL: process.env.API_SSR_URL,
        API_CSR_URL: process.env.API_CSR_URL,
    },
    serverRuntimeConfig: {
        API_SSR_URL: process.env.API_SSR_URL,
        API_CSR_URL: process.env.API_CSR_URL,
    },
}