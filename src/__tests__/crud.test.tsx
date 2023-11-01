import prisma from "@/client";
import { createUser } from "@/library/test-functions"
import { prismaMock } from "@/singleton"


// CREATE
test("should create new user", async () => {
    // const user = {
    //     name:"new user",
    //     email:"newuser@email.com"
    // }

    // prismaMock.user.create.mockResolvedValue(user)

    // await expect(createUser(user)).resolves.toEqual({
    //     id:"1",
    //     name:"new user",
    //     email: "newuser@email.com"
    // })
    
    const userData = {
    email: 'test@example.com',
    name: 'Test User',
  };

  const createdUser = await prisma.user.create({ data: userData });

  const findCreatedUserInDb = await prisma.user.findFirst({
    where:{
      email: userData.email
    }
  })

  // Assertions to check if the user was created successfully
  expect(createdUser).toEqual(findCreatedUserInDb)

})

// GET
test("should get all categories", async () => {
  const categories = await prisma.category.findMany()

  expect(categories.length).toBeGreaterThan(0)
})


// UPDATE
test("should update newly created User", async () => {

  const findUserToUpdate = await prisma.user.findFirst({
    where:{
      name:"Test User"
    }
  })

  const updatedUser = await prisma.user.update({
    where:{
      id: findUserToUpdate?.id
    },
    data:{
      name:"Update Test User"
    }
  })

  const updatedUserFromDb = await prisma.user.findFirst({
    where:{
      name: "Update Test User"
    }
  })

  expect(updatedUser).toEqual(updatedUserFromDb)
})

// DELETE 



// USER FACTORY

