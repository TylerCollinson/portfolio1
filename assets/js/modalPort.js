// JavaScript to handle modal functionality
document.addEventListener("DOMContentLoaded", function () {
  const projectItems = document.querySelectorAll('.project-item');
  const modal = document.querySelector('.modal');
  // const modalContent = document.querySelector('.modal-content');
  const modalImage = document.getElementById("modal-image");
  const modalVideo = document.getElementById("modal-video");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeModal = document.getElementById("close-modal");

  // Add event listener to each project item
  projectItems.forEach(item => {
    item.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      
      // Get project details
      const video = this.querySelector("video");
      const img = this.querySelector("img");
      const title = this.querySelector(".project-title").textContent;
      const category = this.querySelector(".project-category").textContent;

      // Check if video or image exists
      // Display video in modal
      if (video) {
        modalVideo.src = video.src;
        modalVideo.style.display = "block";
        modalImage.style.display = "none";
        modalVideo.style.pointerEvents = "auto"; // Enable pointer events for the video
      } else if (img) {
        // Display image in modal
        modalImage.src = img.src;
        modalImage.style.display = "block";
        modalVideo.style.display = "none";
      }

      // Set other modal content
      modalTitle.textContent = title;
      modalDescription.textContent = `Category: ${category}`;

      // Show the modal
      modal.style.display = "flex";
    });
  });

  // Close modal on close button click
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    modalVideo.pause(); // Stop the video when closing the modal
  });

  // Close modal when clicking outside the modal content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      modalVideo.pause(); // Stop the video when closing the modal
    }
  });
});


projectItems.forEach(item => {
  item.addEventListener('click', () => {
    // Show the modal
    modal.style.display = 'flex';  // Use flex to center content

    // Set content inside the modal (for example, if it's a video)
    const video = item.querySelector('video');
    if (video) {
      const clone = video.cloneNode(true);
      modalContent.innerHTML = ''; // Clear existing content
      modalContent.appendChild(clone); // Add the cloned video
    }
  });
});
