module.exports = {
    reactStrictMode: true,

    async rewrites() {
        return [
            {
                source: '/admin-login',
                destination: '/admin/login'
            }
        ]
    }
}