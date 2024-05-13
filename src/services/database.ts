import { PrismaClient } from '@prisma/client';
import { executeFetch } from '../services/api';

const prisma = new PrismaClient();

async function main() {
  const pokemon = await prisma.pokemon.createMany({
    data: await executeFetch(),
  });
  console.log(pokemon);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
