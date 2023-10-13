import { PrismaClient } from '@prisma/client';

// NOTICE :
declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();
console.info('process.env.NODE_ENV = ', process.env.NODE_ENV);
console.info('process.env.NODE_ENV = ', process.env.NODE_ENV);
console.info('process.env.NODE_ENV = ', process.env.NODE_ENV);
console.info('process.env.NODE_ENV = ', process.env.NODE_ENV);
global.prisma = prisma;

export default prisma;
