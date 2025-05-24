import { PrismaClient } from "../generated/prisma/index.js";
// import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function testConnection() {
  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully.");
  } catch (error) {
    console.error("❌ Failed to connect to the database:", error);
  }
}

testConnection();
export default prisma;
