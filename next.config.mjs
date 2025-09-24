/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  i18n: {
    locales: ['uz', 'en'],
    defaultLocale: 'uz',
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
