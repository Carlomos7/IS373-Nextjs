"use server"
import axios from "axios"

export default async function updateTask() {

    try {

        const newTask = {
            name: "Shower"
        }
        const response = await fetch("http://localhost:3000/api/tasks", {
            method: "PATCH",
            body: JSON.stringify(newTask),
        })



        return response

    } catch (err) {
        console.log(err)
    }
}