import * as dotenv from 'dotenv';

   // Load environment variables from .env.local
   dotenv.config({ path: '.env.local' });

   console.log("Loaded environment variables:", process.env);
   console.log("DB Connection String:", process.env.NEXT_PUBLIC_DB_CONNECTION_STRING);

   /** @type { import("drizzle-kit").Config } */
   export default {
     schema: "./configs/Schema.jsx",
     dialect: 'postgresql',
     dbCredentials: {
       url: process.env.NEXT_PUBLIC_DB_CONNECTION_STRING || "fallback_connection_string_here",
     },
   };