// Add a click event on various child elements to close the parent modal
(
    document.querySelectorAll(".modal-background, .modal-close") || []
).forEach(($close) => {
    const $target = $close.closest(".modal");
    $close.addEventListener("click", () => {
        closeModal($target);
    });
});
// Add a keyboard event to close all modals
document.addEventListener("keydown", (event) => {
    const e = event || window.event;
    // if (e.keyCode === 27) {
    //     // Escape key
    //     closeAllModals();
    // }
});
//});
const deleteItemHandler = async (event) => {
const currentLoc = document.location.pathname.split("/");
const currentList = currentLoc[currentLoc.length - 1];
const response = await fetch("/api/items/delete", {
    method: "DELETE",
    body: JSON.stringify({ id: event.target.id }),
    headers: { "Content-Type": "application/json" },
});
if (response.ok) {
    document.location.reload();
}
};
const trashCan = document.querySelectorAll("i");
for (let i = 0; i < trashCan.length; i++) {
trashCan[i].addEventListener("click", deleteItemHandler);
}
// const addItem = document.querySelector("addItemBtn").addEventListener("click");