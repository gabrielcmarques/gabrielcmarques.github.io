// // Function to get the next section's ID based on the current section's ID
// function getNextSectionId(currentSectionId) {
//   const currentSection = document.getElementById(currentSectionId);
//   const nextSection = currentSection.nextElementSibling;
//   return nextSection ? nextSection.id : null;
// }

// // Function to handle the click event of the "next-section" button
// function handleNextSectionButtonClick(event) {
//   event.preventDefault();
//   const currentSectionId = event.currentTarget.getAttribute("href").slice(1);
//   const nextSectionId = getNextSectionId(currentSectionId);
//   if (nextSectionId) {
//     const nextSection = document.getElementById(nextSectionId);
//     const nextSectionTop = nextSection.getBoundingClientRect().top;
//     const headerHeight = document.querySelector(".header").offsetHeight;
//     const offset = nextSectionTop - headerHeight;
//     window.scrollBy({
//       top: offset,
//       behavior: "smooth",
//     });
//   }
// }

// // Add click event listener to the "next-section" button
// const nextSectionButton = document.querySelector(".next-section");
// nextSectionButton.addEventListener("click", handleNextSectionButtonClick);

// // Function to update the "next-section" button href as needed
// function updateNextSectionButtonHref() {
//   let nextSectionButton = document.querySelector(".next-section");
//   const currentSectionId = nextSectionButton.getAttribute("href") || "#work";
//   const nextSectionId = getNextSectionId(currentSectionId);
//   if (nextSectionId) {
//     nextSectionButton.setAttribute("href", "#" + nextSectionId);
//   } else {
//     nextSectionButton.removeAttribute("href");
//   }
// }

// // Function to handle the scroll event and update the "next-section" button href
// function handleScroll() {
//   updateNextSectionButtonHref();
//   handleBackToTopButtonVisibility();
// }

// // Add scroll event listener to update the "next-section" button href
// window.addEventListener("scroll", handleScroll);

// // Function to check if the user has scrolled to the last section of the page
// function isAtLastSection() {
//   const lastSection = document.querySelector("section:last-of-type");
//   const lastSectionRect = lastSection.getBoundingClientRect();
//   return lastSectionRect.bottom <= window.innerHeight;
// }

// // Function to handle the visibility of the "back-to-top" button
// function handleBackToTopButtonVisibility() {
//   const backToTopButton = document.querySelector(".back-to-top");
//   backToTopButton.style.visibility = isAtLastSection() ? "visible" : "hidden";
// }

// // Add event listener for scroll event to handle button visibility
// window.addEventListener("scroll", handleBackToTopButtonVisibility);

// // Initial handling of button visibility on page load
// handleBackToTopButtonVisibility();
// updateNextSectionButtonHref();
