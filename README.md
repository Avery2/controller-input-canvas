# Game Controller Input Experiment

This experiment showcases the usage of game controller input in a JavaScript application. The project aims to demonstrate how to integrate gamepad functionality into a web-based game or interactive application.

I made this with ChatGPT (even this README lol). You can play the game if you have a controller [here]().

## Introduction

This project serves as a proof of concept for utilizing game controllers, specifically Xbox controllers, as the primary input method. The application leverages the Gamepad API to detect and process gamepad input events, enabling the control of various game elements through the controller.

## Features

- Joystick input: The application captures the left stick X and Y axes, allowing for precise control of the game character's movement.
- Button input: The A, B, X, and Y buttons on the controller are mapped to specific actions within the game. Pressing these buttons triggers corresponding events, such as changing the color of an object or performing an action.
- Bumper input: The left and right bumpers on the controller can be used to trigger additional actions or interact with the game environment.
- Trigger input: The left and right triggers provide analog input, enabling smooth and variable interactions, such as controlling the intensity of an action or adjusting in-game parameters.

## Usage

1. Connect an Xbox controller or compatible gamepad to your computer.
2. Open the project in a web browser that supports the Gamepad API.
3. The application will automatically detect the connected gamepad and start capturing its input.
4. Use the left joystick to move the character or control an in-game element.
5. Experiment with pressing buttons, bumpers, and triggers to observe the corresponding changes in the game.
6. Explore how the input from the gamepad can be utilized to control various aspects of the game or interactive application.

## Limitations

- This experiment focuses solely on game controller input and does not provide support for other input methods like keyboard or mouse.
- Currently, the application is designed to work specifically with Xbox controllers or compatible gamepads that follow similar button and axis mappings.
