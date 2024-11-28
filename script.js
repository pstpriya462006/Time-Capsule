// JavaScript to handle "Get Started" button
document.getElementById("getStartedBtn").addEventListener("click", () => {
    // Redirect to the capsule creation page (e.g., create.html)
    window.location.href = "create.html";
});
// Get form element
const form = document.getElementById("capsuleForm");

// Handle form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const letter = document.getElementById("letter").value;
    const file = document.getElementById("fileUpload").files[0];
    const unlockDate = document.getElementById("unlockDate").value;
    const password = document.getElementById("password").value;

    // Validate inputs
    if (!validateDate(unlockDate)) {
        alert("Please choose a valid unlock date (future date).");
        return;
    }
    if (file && !validateFileSize(file)) {
        alert("File size should be less than 5MB.");
        return;
    }

    // Simulate saving the capsule
    alert("Capsule created successfully!");
    console.log({ letter, file, unlockDate, password });
});

// Validate date (future date required)
function validateDate(date) {
    const selectedDate = new Date(date);
    const today = new Date();
    return selectedDate > today;
}

// Validate file size (max 5MB)
function validateFileSize(file) {
    const maxSize = 5 * 1024 * 1024; // 5MB
    return file.size <= maxSize;
}
