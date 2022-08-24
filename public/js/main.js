const handleLogin = (event) => {
    document.location.replace("/login")
}

const handleSignup = (event) => {
    document.location.replace("/signup")
}

document.querySelector("#login").addEventListener("click", handleLogin)
document.querySelector("#signup").addEventListener("click", handleSignup)