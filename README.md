# IS373-Nextjs

#Setup
1. Clone repo
2. Start Docker desktop
3. Create a new `.env` file and copy the contents:
```sh
DATABASE_URL=
```
## Local Setup
Install Dependencies
```sh
npm install
```

## Local Docker Setup
Run the follow to start up the NextJS & the Postgres Containers
```sh
docker-compose up
```

## Prisma Setup
Generate Prisma Client, Migrate Database Schema, and Seed Database
```sh
npx prisma migrate dev
npx prisma generate
npx prisma db seed
```

## Jest Testing
Run CRUD tests on the API
```sh
npm run test
```
