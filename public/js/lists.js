// Send add POST request
const addListHandler = async (event) => {
    event.preventDefault();
    const listName = document.querySelector("#listname").value.trim()

    const response = await fetch("/api/lists/add", {
        method: "POST",
        body: JSON.stringify({ listName }),
        headers: { 'Content-Type': 'Application/json'}
    })

    if (response.ok) {
        document.location.reload()
    } else {
        alert(response.statusText)
    }
}

// Send DELETE request
const deleteItemHandler = async (event) => {
    const response = await fetch("/api/lists/delete", {
        method: "DELETE",
        body: JSON.stringify({ id: event.target.viewportElement.id }),
        headers: { "Content-Type": "application/json" },
    });

    console.log(event.target.viewportElement.id)

    if (response.ok) {
        document.location.reload();
    }
}


// MODAL STUFF
document.addEventListener("DOMContentLoaded", () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add("is-active");
    }

    function closeModal($el) {
        $el.classList.remove("is-active");
    }

    document.querySelector("#addlist-form")
    .addEventListener("submit", addListHandler);

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll(".js-modal-trigger") || []).forEach(
        ($trigger) => {
            const modal = $trigger.dataset.target;
            const $target = document.getElementById(modal);

            $trigger.addEventListener("click", () => {
                openModal($target);
            });
        }
    );

    // Add a click event on various child elements to close the parent modal
    (
        document.querySelectorAll(".modal-background, .modal-close") || []
    ).forEach(($close) => {
        const $target = $close.closest(".modal");

        $close.addEventListener("click", () => {
            closeModal($target);
        });
    });
});


// Find all trash cans
const trashCan = document.querySelectorAll(".card-content")
for (let i = 0; i < trashCan.length; i++) {
    trashCan[i].addEventListener("click", deleteItemHandler)
}