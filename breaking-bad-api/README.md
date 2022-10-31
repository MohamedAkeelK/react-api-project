# API-DUMMY-USERS

This project is a react app that displays the breaking bad characters pulling information from https://breakingbadapi.com

## Getting Started Locally

fork and clone this repository then in the terminal run ...

```bash
  npm install
  npm run start
```

## Deployment

-

## Built With

- Reactjs

## Contributing

fork, clone, create a new feature, and submit a pull request!

## Authors

- **Mohamed Akeel Khan**

## 3rd-party api used

- https://breakingbadapi.com/documentation

## Difficulties and Questions

- fetching the data properly. kept getting undefined errors because my data was not back yet. This was hardest part for me. setting state after awaiting the response fixed this problem for me. solution found at https://reactjs.org/docs/testing-recipes.html#data-fetching.

- deciding what component to hold the state.
- when trying to pop up the modal with a character, it kept showing the last character for every modal clicked because of mapping through data. to fix this i had to create state for each individual character property and set the img and text to that state.
- this led to passing a lot of props around and had a lot of moving parts to it. How can i make this code better?
