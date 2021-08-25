# Movie Search App

### Instructions
---
### Step 1
Go to the root folder and install packages: `npm i`

### Step 2
Go to the root folder and start the server `npm run dev`

### Architecture & Technical Choices

* Currently there is no **_Context API_** since at this phase it is not necessary but when the application grows larger using the Context API it is easier to pass data to lower level components. **_Redux_** or some other state management library can be used as well
* **_Jest_** is used for testing
* **_Prettier_** is used to format the code automatically
* **_SASS_** is used for styling
* **_Typescript_** is used to detect issues while coding and prevent errors during runtime
* **_Bootstrap_** is used in order to quickly build the UI but to also create a mobile layout easier
* **_FontAwesome_** is used for icons
* a dashboard with icons is added on the homepage to show the routing. First icon is clickable and the other icons are placeholders. Users can get back to the homepage by click on the icon on the top left at the navigation bar
* API response seems to return blank images, in this case we are using a placeholder image to preserve the layout
  

### TODO
* improve the UI and UX overall
* when user clicks on a movie result item, show the detailed view of that movie item by adding another component and a route that displayes such component
* add a custom hook for the http requests, if in the future this would be an authenticated app, we can intercept the request and add the authorization token on each request (if the endpoint is whitelisted)
* the API seems to support pagination, it returns 20 results per page, adding pagination would make the navigation easier


### Testing
* tests can be run by `npm test`