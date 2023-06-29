// Function to get controller input
function handleGamepadInput() {
  const gamepads = navigator.getGamepads(); // Retrieve all connected gamepads
  const gamepad = gamepads[0]; // Assuming there's only one gamepad connected

  if (!gamepad) return; // Exit if no gamepad is connected

  const xAxis = gamepad.axes[0]; // Left stick X-axis
  const yAxis = gamepad.axes[1]; // Left stick Y-axis
  const aButton = gamepad.buttons[0].pressed; // A button
  const bButton = gamepad.buttons[1].pressed; // B button
  const xButton = gamepad.buttons[2].pressed; // X button
  const yButton = gamepad.buttons[3].pressed; // Y button

  // Handle controller inputs here
  // Example: Move the circle on the canvas based on the joystick input
  circle.x += xAxis * 2;
  circle.y += yAxis * 2;

  // Example: Change the circle color based on button presses
  if (aButton) {
    circle.color = "red";
  } else if (bButton) {
    circle.color = "blue";
  } else if (xButton) {
    circle.color = "green";
  } else if (yButton) {
    circle.color = "yellow";
  }

  // Update debug information
  const debugElement = document.getElementById("debug");
  debugElement.innerHTML = `X-Axis: ${xAxis.toFixed(
    2
  )}, Y-Axis: ${yAxis.toFixed(2)}`;
}


// Create the circle object
const circle = {
  x: 350,
  y: 350,
  radius: 20,
  color: "black",
};

// Get the canvas element
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Update and draw the game
function update() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the circle
  context.beginPath();
  context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  context.fillStyle = circle.color;
  context.fill();
  context.closePath();

  // Request the next animation frame
  requestAnimationFrame(update);
}

// Start the game loop
requestAnimationFrame(update);

// Event listeners for controller input and keyboard input
window.addEventListener("gamepadconnected", function (event) {
  setInterval(handleGamepadInput, 16.67); // Update every 60 frames per second (1000ms / 60 frames ≈ 16.67ms)
});

window.addEventListener("keydown", handleKeyboardInput);
