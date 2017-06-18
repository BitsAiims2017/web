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
   Directory structure is simple. All files for views are in `src` folder. 

   React is component based, so inside `src` folder, `Component` folder will contain all the components that need to be rendered.
   `App` folder will link all the components. 
   So, whenever you create a new component, make sure you also import it in `App.js` inside `App` folder.
   Separate logics and CSS of each and every component into its own folder, with parent folder `Components`.
   `index.js` is entry point for our views. It renders the app component. 

*Compulsory*, you must use [StandardJS](https://standardjs.com/) code style to write your Javascript and JSX.
It's a command line tool as well, which will fix our Javascript and JSX for us, as long as there are no errors. 
*psst..* just.. get its editor pluggins, and bind them to some key combination.


### Authors
BITS Pilani University Students 

### License
MIT

