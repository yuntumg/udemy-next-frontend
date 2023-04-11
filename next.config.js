module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://api-vr7w.onrender.com/api/:path*',
      },
    ];
  },
}
