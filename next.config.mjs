/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['firebasestorage.googleapis.com','img.clerk.com'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'assets.aceternity.com', // Add the hostname you're using for external images
              port: '',
              pathname: '/**', // Allow all paths from this domain
            },
        ],
    }
};

export default nextConfig;
