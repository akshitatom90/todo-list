export async function isLoggedIn (){
    try {
        const data = await fetch("http://localhost:9000/api/v1/user/isLogedIn", {
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
        const data = await fetch("http://localhost:9000/api/v1/user/login", {
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
        const data = await fetch("http://localhost:9000/api/v1/user/register", {
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
        const data = await fetch("http://localhost:9000/api/v1/todo/create", {
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
