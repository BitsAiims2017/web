[![Codacy Badge](https://api.codacy.com/project/badge/Grade/357df65b3a1c43b6b98ed9e40905d6f1)](https://www.codacy.com/app/UtkarshMe/web?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=BitsAiims2017/web&amp;utm_campaign=Badge_Grade)
# WebApp for AIIMS, Bhopal

### Contributing
   You should have `node` installed.
   Fork this repository.
```
git clone https://github.com/[your-username]/web
cd web
npm install 
npm start
```
This project uses [create-react-app](https://github.com/facebookincubator/create-react-app) wrapper for React.
Directory structure is simple. 

All files for views are in `src` folder. You mustn't mess with public folder.

React is component based, so inside `src` folder, `Component` folder will contain all the components that need to be rendered.

`App` folder will link all the components. 

So, whenever you create a new component, make sure you also import it in `App.js` inside `App` folder.

Separate logics and CSS of each and every component into its own folder, with parent folder `Components`.

`index.js` is entry point for our views. It renders the app component. 

*Compulsorily*, you must use [StandardJS](https://standardjs.com/) code style to write your Javascript and JSX.
It's a command line tool as well, which will fix our Javascript and JSX for us, as long as there are no errors. 
*psst..* just.. get its editor pluggins, and bind them to some key combination.


### Authors
BITS Pilani University Students 

### License
MIT

