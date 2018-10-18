# Miami Neighborhood Map

This responsive app is a neighborhood map of Miami, Florida with a few of the best (by opinion) restaurants to visit. It was built using React throught the `create-react-app` package, the Google Maps API and the FourSquare API.

## Demo

If you want to see the app in action, you can check it through this [website](https://miami-neighborhood.netlify.com/).

NOTE: It may not work entirely because the Foursquare API may have reached its quota limit.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine because you will need npm to be able to further install this project.

1.  To get it running on your machine, go ahead and download it or clone it using:

        git clone https://github.com/jonathanruiz/miami-neighborhood-map.git

2.  Then switch into that directory using:

        cd myReads-react.git

3.  Install the dependencies using:

        npm install

4.  Run the app using (It should start running in port 3000):

        npm start

## File Structure

```bash
├── CONTRIBUTING.md
├── README.md - # This file.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon
│   ├── index.html # DO NOT MODIFY
│   └── manifest.json
└── src
    ├── api
    │    └── Helper.js # Containers the fetch functions for the Foursquare API
    ├── components
    │    ├── Map.js # Component for the Google Maps API
    │    └── SideBar.js # Component for the sidebar listing
    ├── data
    │    ├── MapStyles.json # JSON file for custom map styles
    │    └── RestaurantLocations.json # JSON file for locations for venues
    ├── App.scss # Sass Styles for the app.
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App. No tests have been made.
    ├── index.css # Global styles.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    └── serviceWorker.js # Provides caching and offline use
```

## Service Worker

This app has a service worker in order to be able to run offline and cache frequent files for quicker load times. The service worker will only work on a production ready build.

## Production Mode

To build a production ready version of the app can be done with a few commands.

1.  Run the following command in your terminal to create a production build:

        npm run build

2.  Then host a server for your build:

         serve -s build

3.  Finally, open up your preferred web browser and enter in the following address: `localhost:5000`

With those few steps, you should be up an running!

NOTE: Once you enter the command to host and serve your build, a box will show up to show you in your terminal with the local and network address of your build. You could enter in the address labeled `On Your Network` on your phone, tablet and other devices to test it out on a device other than your computer.
