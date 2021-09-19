## Starting the app
to run the program type in the terminal:-
    npm install
    npm start

## About the app
 A web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.
 In the app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.


## Explaination of each file and what I have done in it:-
  ## index.js
   1. I imported Provider to be able to access the store from any component using connect
   2. imported bootstrap

  ## index.css
   1. compelmintary css code that I wrote for bootstrap

  ## App.js
   1. I imported Route to be able to add new URL for each page in my app
   2. Added Loading Bar

  ## server folder
   1. Wrote all the required apis in api.js 

  ## actions folder
   1. contains the action creators
    authedUser: action creators for the data of authenticated user in the store
    questions: action creators for the data of questions in the store
    users: action creators for the data of users in the store
    shared: contains the handleInitialData, handleAddAnswer functions

  ## reducers folder
   1. Contains all the reducers needed by Redux as follows:
    authedUser: reducer for the data of authenticated user in the store
    questions: reducer for the data of questions in the store
    users: reducer for the data of users in the store
    index: contains the combineReducers function

 ## middleware folder
   1. calls the thunk middleware

 ## components folder
   1.contains all the components used in the App
    

