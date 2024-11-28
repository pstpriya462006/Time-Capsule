// Simulated user capsules (replace with Firebase data later)
const capsules = [
    {
        id: "capsule1",
        title: "Letter to Future Me",
        unlockDate: "2025-01-01",
        status: "Locked", // or "Unlocked"
    },
    {
        id: "capsule2",
        title: "Vacation Memories",
        unlockDate: "2023-11-01",
        status: "Unlocked",
    },
];

// Load capsules into the page
document.addEventListener("DOMContentLoaded", () => {
    const capsuleList = document.getElementById("capsuleList");
    capsuleList.innerHTML = ""; // Clear the loading message

    if (capsules.length === 0) {
        capsuleList.innerHTML = "<p>No capsules found.</p>";
        return;
    }

    capsules.forEach((capsule) => {
        const capsuleDiv = document.createElement("div");
        capsuleDiv.classList.add("capsule");

        // Capsule info
        const infoDiv = document.createElement("div");
        infoDiv.classList.add("capsule-info");
        infoDiv.innerHTML = `
            <strong>${capsule.title}</strong><br>
            Unlock Date: ${capsule.unlockDate}<br>
            Status: <span class="capsule-status">${capsule.status}</span>
        `;
        capsuleDiv.appendChild(infoDiv);

        // View button
        const viewButton = document.createElement("button");
        viewButton.textContent = "View";
        viewButton.addEventListener("click", () => viewCapsule(capsule));
        capsuleDiv.appendChild(viewButton);

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", () => deleteCapsule(capsule.id));
        capsuleDiv.appendChild(deleteButton);

        capsuleList.appendChild(capsuleDiv);
    });
});

// View Capsule Function
function viewCapsule(capsule) {
    alert(`Viewing capsule: ${capsule.title}`);
    // Implement view functionality (e.g., open a modal or redirect to another page)
}

// Delete Capsule Function
function deleteCapsule(capsuleId) {
    if (confirm("Are you sure you want to delete this capsule?")) {
        console.log(`Capsule with ID ${capsuleId} deleted.`);
        // Implement deletion (e.g., update Firebase and refresh the list)
        location.reload(); // Refresh the page to simulate removal
    }
}
