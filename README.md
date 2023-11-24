# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

IMPORTANT: 
 * Loading Gltf models into a Three.js scene is a lot of work.
 * each part of our model’s meshes and save them separately.
 * For this model, visit https://gltf.pmnd.rs/
 * Island 3D model from: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907
 
 Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
-  The goal is to ensure that the rotation value remains within a specific range to prevent potential issues with very large or negative rotation values.Here's a step-by-step explanation of what this code does:
1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.This is done to ensure that the value remains positive and within the range of 0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another modulo operation to the value obtained in step 2. This step guarantees that the value always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
            circle in radians.
