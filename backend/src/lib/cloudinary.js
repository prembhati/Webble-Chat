import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";

// Load environment variables first
config({ path: '../../.env' });  // Adjust path according to your project structure

// Now configure cloudinary with the env vars
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
