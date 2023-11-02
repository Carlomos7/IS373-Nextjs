# IS373-Nextjs

#Setup
1. Clone repo
2. Start Docker desktop
3. Create a new `.env` file and copy the contents:
```sh
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/mydb?schema=public"
```

#Running locally
1. Start using docker-compose
```sh
docker-compose up
```
2. Install dependencies
```sh
npm install
```
3. Generate Prisma client and migrate database schema. These commands will need to be run every time the database schema changes. Seed automatically runs after migration
```sh
npx prisma migrate dev
npx prisma generate
```
4. Start dev
```sh
npm run dev
```

#Run Jest CRUD testing
```sh
npm run test
```
