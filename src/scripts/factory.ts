const {PrismaClient} = require("@prisma/client")
const axios = require("axios")

const db = new PrismaClient()

const main = async () => {


    try{

        const res = await axios.get('https://jsonplaceholder.typicode.com/users')

        // const userData = [
        //     {
        //         name: "John Doe"
        //     },
        //     {
        //         name:"Jane Doe"
        //     }
        // ]
    
        for(const user of res.data){
            await db.user.create({
                data:{
                    name: user.name,
                    email:user.email
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