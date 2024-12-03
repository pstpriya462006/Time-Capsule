const capsuleForm = document.getElementById("capsuleForm");
const unlockForm = document.getElementById("unlockForm");


if (capsuleForm) {
    capsuleForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const letter = document.getElementById("letter").value;
        const files = document.getElementById("file").files;
        const password = document.getElementById("createPassword").value; // Unique ID for create form password
        const openDate = document.getElementById("openDate").value;

        
        if (new Date(openDate) <= new Date()) {
            alert("Open date must be in the future!");
            return;
        }

       
        const capsuleId = `capsule-${Date.now()}`;

       
        const capsule = {
            id: capsuleId,
            letter,
            files: [...files].map(file => file.name), 
            password,
            openDate,
        };

        
        localStorage.setItem(capsuleId, JSON.stringify(capsule));

        console.log("Capsule saved to localStorage:", capsule);

        
        alert(`Capsule created! Your Capsule ID is: ${capsuleId}`);
        capsuleForm.reset();
    });
}


if (unlockForm) {
    unlockForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const capsuleId = document.getElementById("capsuleId").value;
        const password = document.getElementById("password").value;

        
        const capsuleData = localStorage.getItem(capsuleId);
        console.log("Retrieved capsule data:", capsuleData);

        
        if (!capsuleData) {
            alert("Invalid Capsule ID!");
            return;
        }

        const capsule = JSON.parse(capsuleData);

        
        if (capsule.password !== password) {
            alert("Incorrect password!");
            return;
        }

        
        if (new Date(capsule.openDate) > new Date()) {
            alert("This capsule is not ready to be opened yet!");
            return;
        }

        
        document.getElementById("capsuleContent").innerHTML = `
            <h2>Capsule Content</h2>
            <p>${capsule.letter}</p>
            <h3>Uploaded Files:</h3>
            <ul>
                ${capsule.files.map(file => `<li>${file}</li>`).join("")}
            </ul>
        `;
        alert("Capsule successfully unlocked!");
    });
}

       
