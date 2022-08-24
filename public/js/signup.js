const signupHandler = async (event) => {
    event.preventDefault()

    const firstName = document.querySelector("#user-firstname").value.trim()
    const lastName = document.querySelector("#user-lastname").value.trim()
    const email = document.querySelector("#user-email").value.trim()
    const password = document.querySelector("#user-password").value.trim()

    // Check username and password aren't empty
    if (email && password && firstName && lastName) {
        const response = await fetch("/api/users/signup", 
            {
                method: 'POST',
                body: JSON.stringify({firstName, lastName, email, password, }),
                headers: { 'Content-Type': 'Application/json'}
            }
        );

        if (response.ok){
            document.location.replace('/')
        } else {
            alert(response.statusText)
        }
    }
}

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupHandler)