"use server"
import axios from "axios"

export default async function deleteTask() {

    try {
        return await fetch("http://localhost:3000/api/tasks", {
            body: JSON.stringify({ id: "2d30c7ee-fbc4-49ad-ba94-2971f8f6ea9b" }),
            method: "DELETE",
        })

    } catch (err) {
        console.log(err)
    }
}