// Initialize button history array
const buttonHistory = [];
// Create the circle object
const circle = {
  x: 350,
  y: 350,
  radius: 20,
  color: "black",
};

// Function to handle button presses
function handleButtonPressHistory(buttons) {
  const pressedButtons = buttons
    .filter((button) => button.pressed)
    .map((button) => {
      return {
        name: `Button ${buttons.indexOf(button)}`,
        timestamp: Date.now(),
      };
    });

  buttonHistory.push(...pressedButtons);
}

// Function to get controller input
function handleGamepadInput(gamepad) {
  if (!gamepad) return; // Exit if no gamepad is connected

  const xAxis = gamepad.axes[0]; // Left stick X-axis
  const yAxis = gamepad.axes[1]; // Left stick Y-axis
  const aButton = gamepad.buttons[0].pressed; // A button
  const bButton = gamepad.buttons[1].pressed; // B button
  const xButton = gamepad.buttons[2].pressed; // X button
  const yButton = gamepad.buttons[3].pressed; // Y button
  const leftBumper = gamepad.buttons[4].pressed; // Left bumper
  const rightBumper = gamepad.buttons[5].pressed; // Right bumper
  const leftTrigger = gamepad.buttons[6].value; // Left trigger
  const rightTrigger = gamepad.buttons[7].value; // Right trigger

  // Function to update debug information
  function updateDebugInfo() {
    const debugElement = document.getElementById("debug");
    const lastButtonPressed = buttonHistory.at(-1)?.name;
    const debugInfo = `X-Axis: ${xAxis.toFixed(2)}, Y-Axis: ${yAxis.toFixed(
      2
    )}, x: ${circle.x.toFixed(2)}, y: ${circle.y.toFixed(
      2
    )}, Last Button Pressed: ${lastButtonPressed}`;
    debugElement.innerHTML = debugInfo;

    // Limit the length of buttonHistory to 10
    buttonHistory.splice(0, buttonHistory.length - 10);
  }
  // Update debug information
  updateDebugInfo();

  // Handle controller inputs here
  // Example: Move the circle on the canvas based on the joystick input
  circle.x += xAxis * 5;
  circle.y += yAxis * 5;

  // Prevent the circle from going beyond the canvas boundaries
  if (circle.x - circle.radius < 0) {
    circle.x = circle.radius;
  } else if (circle.x + circle.radius > canvas.width) {
    circle.x = canvas.width - circle.radius;
  }

  if (circle.y - circle.radius < 0) {
    circle.y = circle.radius;
  } else if (circle.y + circle.radius > canvas.height) {
    circle.y = canvas.height - circle.radius;
  }

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
}

// Update the canvas size to match the screen width
function updateCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 30;
}

// Get the canvas element
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Update and draw the game
function update() {
  updateCanvasSize();

  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the background border of the circle
  context.beginPath();
  context.arc(circle.x, circle.y, circle.radius + 2, 0, 2 * Math.PI);
  context.strokeStyle = "black";
  context.lineWidth = 4;
  context.stroke();
  context.closePath();

  // Draw the filled circle
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
  setInterval(function () {
    const gamepads = navigator.getGamepads(); // Retrieve all connected gamepads
    for (const gamepad of gamepads) {
      if (gamepad) {
        handleGamepadInput(gamepad);
        // Check button presses
        handleButtonPressHistory(gamepad.buttons);
      }
    }
  }, 16.67); // Update every 60 frames per second (1000ms / 60 frames ≈ 16.67ms)
});
