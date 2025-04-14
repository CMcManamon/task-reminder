# task-reminder
Full-Stack MERN application to manage recurring tasks without strict commitments. React frontend utilizing MaterialUI library with Express/Node backend. MongoDB data storage. Google OAuth2 provides authentication to access your data across multiple devices.

I built this app for personal use when I couldn't find a task manager that met my requirements.

Sometimes, we have recurring tasks which do not conform to specific dates. It's not a big deal if we forget to schedule a yearly maintenance checkup after 365 days. It's OK if our weekly vacuuming doesn't occur on Thursday every time. This minimalistic task reminder is not cluttered with dozens of menus or task refinement options. No scrolling through calendars. Simply choose when to begin a task (today? tomorrow? next week?) and how often to repeat it. Tasks are automatically sorted by a formula that takes into account due date and interval. For example, a daily task which you neglected is weighted higher than a yearly task overdue by a week.

The app will sort overdue and immediate tasks to the top of the list, but will not spam you with notifications. When you find yourself with some free time, open the app and check if you have any tasks to do.

![Demo](https://github.com/CMcManamon/cmcmanamon.github.io/blob/f1bb7a63301d9330780f9046cb669ecfb2106fa6/images/gallery/fulls/task-manager-demo.png)

[Visit the wiki for user stories and mockups](https://github.com/CMcManamon/task-reminder/wiki)

# Milestones
* ~~Document user stories~~
* ~~Design mockups~~
* ~~Project setup~~
* ~~Database setup~~
* ~~Create React components~~
* ~~Display static list of tasks~~
* ~~User can dynamically add new tasks (single user)~~
* ~~App loads tasks from database when user opens app (single user)~~
* ~~User can delete a task~~
* ~~User can modify a task~~
* ~~Improve Mobile responsiveness~~
* ~~User can log in with Google OAuth~~
* ~~Deploy to web~~

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
