document.addEventListener("DOMContentLoaded", function () {
    const galleryImg = document.querySelector(".main-image");
    const thumbnails = document.querySelectorAll(".thumbnails img");
  
    function displayNewImage(event) {
      const targetIdentifier = event.target;
      galleryImg.src = targetIdentifier.src;
      galleryImg.alt = targetIdentifier.alt;
    }
  
    function updateView(event) {
      const targetIdentifier = event.target;
  
      // Vérification de la prise en charge de l'API View Transition
      if (!document.startViewTransition) {
        displayNewImage(event);
        return;
      }
  
      // Utilisation de l'API View Transition
      const transition = document.startViewTransition(() => {
        displayNewImage(event);
      });
  
      // Réagir lorsque la transition est prête (pour personnaliser l'animation, par exemple)
      transition.ready.then(() => {
        // Vous pouvez personnaliser l'animation ici si nécessaire
      });
  
      // Réagir lorsque la transition est terminée
      transition.finished.then(() => {
        // La transition est terminée, vous pouvez effectuer d'autres actions si nécessaire
      });
    }
  
    // Attacher un gestionnaire d'événements aux miniatures pour déclencher la transition
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", updateView);
    });
  });