import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";

// Load environment variables first
config({ path: '../../.env' });  // Adjust path according to your project structure

// Now configure cloudinary with the env vars
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true // Recommended for production
});

// Add validation check
if (!process.env.CLOUDINARY_CLOUD_NAME || 
    !process.env.CLOUDINARY_API_KEY || 
    !process.env.CLOUDINARY_API_SECRET) {
  throw new Error('Missing Cloudinary environment variables');
}

// Optional: Add configuration verification
console.log('Cloudinary configured:', cloudinary.config().cloud_name ? true : false);

export default cloudinary;
