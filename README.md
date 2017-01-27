# Flexbox Flamingo
[Flexbox Flamingo Live](https://bronwyndunn.github.io/Flex-Box-Flamingos/#/)

Flexbox Flamingo, inspired by Flexbox Froggy, is a web tutorial game that teaches users to learn CSS flexbox. The application purely frontend, built using just React and Javascript.

## Features and Implementation
### Direct Dom Manipulation
The entire web application was built with React and Javascript. The application is set up so that the user types CSS commands which directly manipulate the DOM. On the left side of the screen, there is a pseudo-console where the user types. The console is an HTML form, the style of which changes according to user input. When the user inputs the correct flexbox command, the user can move on to the next stage. On the right side is the display, where the flamingos are moved through user-typed CSS commands.  The click-handler on the form checks that the correct input has been typed; if so, a "next stage" button is rendered.

### React Routing
The game is organized by stages and utilizes the React Router. On the HTML form is a success callback which tells the React Router to push the next stage to Hash History if the correct command is entered.
