/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com'],
      },
      env: {
    
        LIVE_API_URL: "http://localhost:3000",
    
      },
}

module.exports = nextConfig
