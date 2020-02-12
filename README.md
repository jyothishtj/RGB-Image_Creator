This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Logic used for Creating the RGB App

1. Iterate through the values of red,green and blue by the step  and created a array of objects(with Red, Green and Blue)- The utility Function- rgbGraph

2. Created a reference to html element "Canvas" using useRef and wrote the logic in the useEffect hook for displaying in the page render/rerender

3.Started with a random color(using the randInt Utility function).

4. Selected a pixel at the middle of the canvas

5. Filled the pixel with the random color

6.Selected the adjacement pixels and spliced another random color and placed into the canvas(based on an interval).

## ScreenShot

https://github.com/jyothishtj/RGB-Image_Creator/issues/1#issue-563238507


## How to execute the App

Download/Clone the App execute the command "npm install" to install the modules from package.json. Once the installation is completed and all modules are available in node_modules folder, run rpm start to execute the application.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.



