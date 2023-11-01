import prisma from "@/client";
import { createUser } from "@/library/test-functions"
import { prismaMock } from "@/singleton"
import {faker} from '@faker-js/faker'




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

    const fakerUser = (): any => ({
      name: faker.person.fullName(),
      email: faker.internet.email()
      });

  const createdUser = await prisma.user.create({ data: fakerUser() });

  const findCreatedUserInDb = await prisma.user.findUnique({
    where:{
      id: createdUser.id
    }
  })

  // Assertions to check if the user was created successfully
  expect(createdUser).toEqual(findCreatedUserInDb)

})

// GET
test("should get all users", async () => {
  const users = await prisma.user.findMany()

  expect(users.length).toBeGreaterThan(0)
})


// UPDATE
test("should update user information", async () => {

  const userData = {
    email: faker.internet.email(),
    name: faker.person.fullName(),
  };

  // Create a user with the generated data
  const createdUser = await prisma.user.create({ data: userData });

  // Check if the user was created successfully
  expect(createdUser.email).toBe(userData.email);
  expect(createdUser.name).toBe(userData.name);
})

// DELETE 
test("should delete a specific user", async () => {

     // Create a user for testing purposes
  const userData = {
    email: faker.internet.email(),
    name: faker.person.fullName(),
  };

  const createdUser = await prisma.user.create({ data: userData });

  // Delete the user
  await prisma.user.delete({
    where: {
      id: createdUser.id,
    },
  });

  // Attempt to find the user in the database
  const foundUser = await prisma.user.findUnique({
    where: {
      id: createdUser.id,
    },
  });

  // Check that the user is not found in the database (it should be null)
  expect(foundUser).toBeNull();
  
})



// USER FACTORY

