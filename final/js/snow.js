// Create Snowflakes
const snowflakesContainer = document.querySelector('.snowflakes');
const numberOfSnowflakes = 10;

for (let i = 0; i < numberOfSnowflakes; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflakesContainer.appendChild(snowflake);

  // Randomize snowflake size and position
  const size = Math.random() * 10 + 5; // Random size between 5 and 15px
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;
  snowflake.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
  snowflake.style.top = Math.random() * -50 + 'vh'; // Random vertical position above the viewport
  snowflake.style.animationDuration = Math.random() * 4 + 2 + 's'; // Random animation duration
}
