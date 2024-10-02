document.addEventListener("DOMContentLoaded", function () {
  const percentageElement = document.getElementById("percentage");
  const targetPercentage = 98;
  const duration = 2000; // 2000ms = 2 segundos
  const steps = 100; // Número de passos para a animação
  const stepDuration = duration / steps;

  let currentPercentage = 0;

  const animatePercentage = () => {
    currentPercentage++;
    percentageElement.textContent = Math.min(
      currentPercentage,
      targetPercentage
    );

    if (currentPercentage < targetPercentage) {
      setTimeout(animatePercentage, stepDuration);
    }
  };

  animatePercentage();
});
