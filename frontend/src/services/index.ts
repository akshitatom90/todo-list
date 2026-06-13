import { data } from "react-router";
import { API_URL } from "../config";

export async function isLoggedIn (){
    try {
        const data = await fetch( `${API_URL}/api/v1/user/isLogedIn`, {
            method: "GET",
            credentials: "include"
        })

        const response = await data.json();
        return {
            isLoggedIn: true,
            user: response.user
        };
    } catch (error) {
        return {
            isLoggedIn: false,  
            user: null
        }
    }
}


export async function loginUser (email: string, password: string) {
    try {
        const data = await fetch(`${API_URL}/api/v1/user/login`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const response = await data.json();
        return response;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
}   


export async function signupuser (email: string, password: string, name: string) {
    try {
        const data = await fetch(`${API_URL}/api/v1/user/register`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password, name })
        });     

        const response = await data.json();
        return response;
    }   catch (error) { 
        console.error("Signup failed:", error);
        throw error;
    }   

}


export async function createTodoUser (title: string) {
    try {
        const data = await fetch(`${API_URL}/api/v1/todo`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title })
        });

        const response = await data.json();
        return response;
    } catch (error) {
        console.error("Failed to create todo:", error);
        throw error;
    }
}

export async function getTodos () {
    try {
        const data = await fetch(`${API_URL}/api/v1/todo`, {
            method: "GET",
            credentials: "include"
        });     
        const response = await data.json();
        return response;    
    }   catch (error) {
        console.error("Failed to fetch todos:", error);
        throw error;
    }
}

// iscompleted

export async function updateTodo(id: string, iscompleted: boolean) {

    try {
        const data = await fetch(`${API_URL}/api/v1/todo/${id}`, {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify({ iscompleted: iscompleted }),
            headers: {
                "Content-Type": "application/json",
            },

        });
        const response = await data.json();
        return response;
    } catch (error) {
        console.error("Failed to update todo:", error);
        throw error;
    }

}

export async function handeldelete(id: string){
    try {
        const data = await fetch(`${API_URL}/api/v1/todo/${id}` ,{
            method : "DELETE",
            credentials: "include",
            headers:{
                "Content-Type" : "application/json",
            },
        });

        const response  = await data.json();
        return response;
    } catch (error) {
        console.log("failed to delete todo" , error);
        throw error;
        
    }
}

    export async function logoutUser(){
        try {
            const data = await fetch(`${API_URL}/api/v1/user/logout`,{
                method : "POST",
                credentials: "include",
                headers: {
                    "Content-Type" : "application/json",
                },
        });
        const respone = await data.json();
        return respone;
       }   catch (error) {
        console.log("logout user successful" , error); 
            throw error;
        }
    }

    