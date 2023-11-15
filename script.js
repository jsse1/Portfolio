document.addEventListener("DOMContentLoaded", function () {
    const projectArticles = document.querySelectorAll(".projects article");

    // Add click event listener to each project article
    projectArticles.forEach((article, index) => {
        article.addEventListener("click", () => {
            displayProjectModal(index + 1); // Index is zero-based, so we add 1
        });
    });

    // Function to display the project modal
    function displayProjectModal(projectNumber) {
        const modal = document.createElement("div");
        modal.classList.add("modal");

        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Project ${projectNumber}</h2>
                <p>Detailed description of Project ${projectNumber}.</p>
                <!-- Add more details or images as needed -->
            </div>
        `;

        // Append the modal to the body
        document.body.appendChild(modal);

        // Close the modal when the close button is clicked
        const closeButton = modal.querySelector(".close");
        closeButton.addEventListener("click", () => {
            modal.remove();
        });

        // Close the modal if the user clicks outside of it
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.remove();
            }
        });
    }
});