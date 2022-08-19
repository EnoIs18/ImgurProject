
# Imgur images with filter

## Live Application URL

The Application is deployed in https://62ffadfdd8945400a7f77bfa--whimsical-sprite-16b733.netlify.app/

Click on the link to see the application

## Table of Contents
- [Imgur images with filter](#imgur-images-with-filter)
  - [Live Application URL](#live-application-url)
  - [Table of Contents](#table-of-contents)
  - [General Information](#general-information)
  - [## Cloning and Running the Application in local](#-cloning-and-running-the-application-in-local)
  - [Application design](#application-design)
      - [Components](#components)
      - [HTTP client](#http-client)
  - [Resources](#resources)
 

## General Information
-  Web app that allows browsing the Imgur gallery
-  Different options are shown in order to filter gallery images
-  If an image or video is clicked its details will be shown.

## ## Cloning and Running the Application in local
Clone the project into local,

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

npm install

In order to run the application Type the following command

 npm start

Imgur is restricting to access the image directly from localhost. However if you access your localhost using IP address, you are able to see the image.

Runs the app in the development mode.\

Dont open [http://localhost:3000](http://localhost:3000) to view it in your browser. (not allowed)
Open [http://yourIPaddress:3000](http://localhost:3000) to view it in your browser. (allowed)

## Application design

#### Components

1. **Gallery** Component : This Component displays a list of images and videos. This Component gets the data from the response that we get from the request that is sent with axios.

2. **GalleryImage** Component : This Component Displays the details of each object that we get from axios. 
3. **ThumbnailDetails** Component : Contains data of details that get passed in the gallery image component.
4. **Details** Component : Shows all the data and its details of the image or video after was clicked.

#### HTTP client

**axios** library is used to make HTTP Calls

## Resources

**create-react-app** : refer to  https://reactjs.org/docs/create-a-new-react-app.html

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**ReactHooks** : Refer to https://reactjs.org/docs/hooks-overview.html/ 

**ReactReduxToolkit** : Refer to https://redux-toolkit.js.org/introduction/getting-started

**ReactRouter** : Refer to https://reactrouter.com/docs/en/v6/getting-started/overview

**ReactRouter** : Refer to https://reactrouter.com/docs/en/v6/getting-started/overview

**ReactSelect** : Refer to https://react-select.com/home

**ReactSpinners** : Refer to https://www.npmjs.com/package/react-spinners

**ReactIcons** : Refer to https://react-icons.github.io/react-icons/

**CssModules** : Refer to https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

**ReactMansory** : Refer to https://www.npmjs.com/package/react-masonry-css

**ReactToggle** : Refer to https://www.npmjs.com/package/react-toggle