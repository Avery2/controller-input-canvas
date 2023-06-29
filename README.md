# Game Controller Input Skeleton App

This skeleton app provides a starting point for building your 2D game using controller inputs. It offers a simple HTML and JavaScript tech stack, allowing you to leverage gamepad functionality to create an interactive game experience.

## Introduction

This skeleton app is a foundation for developing games that utilize game controller inputs. It demonstrates the integration of gamepad functionality into a web-based application and provides a starting point for implementing your game mechanics and features.

## Features

- Gamepad Input: The app captures various inputs from game controllers, such as joystick movements, button presses, bumper clicks, and trigger interactions.
- Canvas Rendering: The app provides a basic rendering system using HTML5 canvas, allowing you to draw and animate game elements.
- Controller Mapping: The app maps button indices to their corresponding actions, providing a starting point for handling different gamepad inputs.
- Game Loop: The app utilizes a mechanism to update and render the game state at a consistent frame rate.

## Getting Started

To use this skeleton app as a starting point for your game development:

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in a web browser that supports the Gamepad API.
3. Connect a compatible gamepad to your computer, preferably an Xbox controller.
4. The app will automatically detect the connected gamepad and capture its input.
5. Use the provided code structure and functions as a foundation for your game development.
6. Customize and expand the app to create game mechanics, levels, and interactions using game controller inputs.

## Usage and Customization

1. Update the `handleGamepadInput` function in `script.js` to handle specific gamepad inputs and implement your desired game logic.
2. Modify the rendering code in the `update` function to draw your game elements, animations, and user interface on the canvas.
3. Extend the functionality by adding new functions, objects, and components to suit your game requirements.
4. Customize the HTML and CSS files to create your game's visual style and layout.

## How to Play

I made this with ChatGPT (even this README). You can play the game if you have a controller by visiting the hosted [GitHub Pages]([https://your-github-pages-url](https://www.averychan.site/controller-input-canvas/)).

## Limitations

- This skeleton app focuses exclusively on game controller input and does not support other input methods like keyboard or mouse.
- Compatibility with different gamepad models and browsers may vary. The app has been tested with Xbox controllers and is optimized for modern web browsers.

## License

This project is licensed under the [MIT License](LICENSE).
