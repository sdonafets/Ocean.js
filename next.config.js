const path = require('path')
const withMDX = require('@next/mdx')()

module.exports = withMDX({
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/Home',
                permanent: true,
            },
        ]
    },
});