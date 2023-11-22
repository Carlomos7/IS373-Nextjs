import createTask from "@/library/createTasks";
import fetchTasks from "../library/fetchTasks"
import updateTask from "@/library/updateTask";
import deleteTask from "@/library/deleteTask";


describe("/api/tasks", () => {
    it("Test to get all tasks", async () => {


        const getTasks = await fetchTasks()
        expect(getTasks?.status).toBe(200);

    })


    it("Test to post a new task", async () => {

        const makeNewTask = await createTask()

        expect(makeNewTask?.status).toBeDefined()
    })

    it("Test to update a new task", async () => {
        const updateATask = await updateTask()

        expect(updateATask?.status).toBeDefined()
    })

    it("Test to delete task", async () => {
        const deleteATask = await deleteTask()

        expect(deleteATask?.status).toBeDefined()
    })



})
