/** @type {import('next').NextConfig} */


const nextConfig = {
 // Generate a static website
 output: "export",


 // GitHub repository name
 basePath: process.env.GITHUB_ACTIONS
   ? "/shreya-portfolio"
   : "",


 // Generate static HTML files
 trailingSlash: true,


 // Required for static image export
 images: {
   unoptimized: true,
 },
   turbopack: {
   rules: {
     "*.css": {
       loaders: ["@tailwindcss/turbopack"],
       as: "*.css",
     },
   },
 },
};


export default nextConfig;