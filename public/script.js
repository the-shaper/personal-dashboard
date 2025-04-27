document.addEventListener("DOMContentLoaded", () => {
  // Get references to the elements
  const bioButton = document.querySelector(".bio-button");
  const modalContainer = document.querySelector(".modal-container");
  const modalContentWrapper = document.querySelector(".modal-content-wrapper");
  const body = document.body;

  // Function to show the modal
  const showModal = () => {
    modalContainer.style.display = "flex"; // Use flex to enable centering/layout
    body.style.overflow = "hidden"; // Prevent background scrolling
  };

  // Function to hide the modal
  const hideModal = () => {
    modalContainer.style.display = "none";
    body.style.overflow = ""; // Restore default scrolling
  };

  // Event listener for the bio button click
  if (bioButton) {
    bioButton.addEventListener("click", showModal);
  }

  // Event listener for clicks outside the modal content
  if (modalContainer && modalContentWrapper) {
    modalContainer.addEventListener("click", (event) => {
      // Check if the click target is the modal container itself
      // and not inside the modal content wrapper
      if (event.target === modalContainer) {
        hideModal();
      }
    });
  }

  // Initially hide the modal on page load (handled by CSS, but good practice)
  // hideModal(); // This might interfere if you want it visible by default for testing
});
