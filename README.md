# Miami Neighborhood Map

This responsive app is a neighborhood map of Miami, Florida with a few of the best (by opinion) restaurants to visit. It was built using React throught the `create-react-app` package, the Google Maps API and the FourSquare API.

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
├── README.md - This file.
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
