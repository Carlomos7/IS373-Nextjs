const {PrismaClient} = require("@prisma/client")

const db = new PrismaClient()

const main = async () => {
    

    try{
        const userData = [
            {
                name: "John Doe"
            },
            {
                name:"Jane Doe"
            }
        ]
    
        for(const user of userData){
            await db.user.create({
                data:{
                    name: user.name
                }
            })
        }

        const users = await db.user.findMany()

        console.log(users)
    }catch(error){
        console.log(error)
    }
}

main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })