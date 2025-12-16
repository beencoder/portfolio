/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/work',
        destination: '/',
        permanent: true,
      },
      {
        source: '/project',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
