const API = "http://localhost:5000/api";

async function register() {

    await fetch(`${API}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username:
                document.getElementById("username").value,
            email:
                document.getElementById("email").value,
            password:
                document.getElementById("password").value
        })
    });

    alert("Registered");
}


async function login() {

    const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: document.getElementById("loginEmail").value,
            password: document.getElementById("loginPassword").value
        })
    });

    const data = await res.json();

    console.log(data);

    if (data.userId) {

        localStorage.setItem("userId", data.userId);

        alert("Saved User ID: " + data.userId);

        window.location.href = "feedback.html";

    } else {

        alert("Login Failed");
        console.log(data);

    }
}

// console.log("User ID:", userId);


async function addFeedback() {

    const userId = localStorage.getItem("userId");

    await fetch(`${API}/feedback`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId: userId,
            feedbackText: document.getElementById("feedback").value
        })
    });

    alert("Feedback Added");
}
async function updateFeedback() {

    const userId = localStorage.getItem("userId");

    await fetch(`${API}/feedback/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            feedbackText: document.getElementById("feedback").value
        })
    });

    alert("Feedback Updated");
}