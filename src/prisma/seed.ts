import {PrismaClient} from '@prisma/client'
const db = new PrismaClient()

const main = async () => {
    

    try{

      const postCategories = [
        { name: "Technology" },
        { name: "Travel" },
        { name: "Food" },
        { name: "Fashion" },
        { name: "Health and Fitness" },
        { name: "Entertainment" },
        { name: "Lifestyle" },
        { name: "Sports" },
        { name: "Education" },
        { name: "Business" },
        {name: "Other"}
      ]

      for(let cat of postCategories){
        await db.category.create({
          data:{
            name:cat.name
          }
        })
      }

      const categories = await db.category.findMany()

      console.log(categories)
    
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