# My Personal Website

I made this "static" website with the popular web framework React. The web app is hosted on GitHub Pages and is thus static (at least the final product). I discuss how I implemented various features for this website below.

## Table of Contents

- [My Personal Website](#my-personal-website)
  - [Table of Contents](#table-of-contents)
  - [How To](#how-to)
    - [Create an app with React](#create-an-app-with-react)
    - [Use Google Sheets as CMS with tabletop.js](#use-google-sheets-as-cms-with-tabletopjs)
    - [Submit forms with form-data](#submit-forms-with-form-data)
    - [Host/deploy a react web app with GH Pages](#hostdeploy-a-react-web-app-with-gh-pages)
    - [Create a snappy web app](#create-a-snappy-web-app)
  - [Workplace settings](#workplace-settings)
    - [Editor: VS Code](#editor-vs-code)
  - [References](#references)

## How To

### Create an app with React

There are so many resources out there on how to do this but I used create-react-app to do it as it is a single page application (technically). However, Gatsby is recommended for static applications which I should have used in hindsight. See [References](#references) for more details.

Ensure you have node installed on you local dev machine. Then run the following on your terminal:

1. `npx create-react-app my-app`
2. `cd my-app`
3. `npxm start`

### Use Google Sheets as CMS with tabletop.js

I know, I know, this is kind of a strange choice, but do bear with me. I chose google sheets for my CMS because it is free (always a bonus), accessible from anywhere, customizable enough for the purposes of this website, works well with a static website, and enables over the air (OTA) changes. Most of my information displayed on this website is stored on one document with mutiple sheets and I fetch this data with tabletop.js.

Here is how I set it up.

1. Publish your Google Sheets to the web
   1. Open the File menu and click Publish to web
   2. Towards the bottom select Start publishing (the entire document)
   3. Save your spreadsheet key. From the URL, your spreadsheet key will be the KEY string in `/spreadsheets/d/KEY/edit#gid=0`
      ![image](https://miro.medium.com/max/2694/1*uTBIqOEH8f5JeQHTYHyBKg.png)
2. Fetch data with tabletop on react app

   1. Install tabletop with npm: `npm install tabletop`
   2. Use tabletop in your app to get relevant data

      1. Template code for multiple sheets

      ```js
      Tabletop.init({
        key: "<Your sheets key from step 1.3>",
        simpleSheet: false,
        callback: (data, tabletop) => {
          const sheetData = tabletop.sheets("sheetName").elements;
          // use sheetData as neccesary
        }
      });
      ```

      1. Template code for single sheet (assuming you only published a single sheet!)

      ```js
      Tabletop.init({
        key: "<Your sheets key from step 1.3>",
        simpleSheet: true,
        callback: data => {
          // use data as neccesary
        }
      });
      ```

### Submit forms with form-data

I have a contact form on this website and initially I was planning to send the data entered in there to my mail with nodemailer and express. However, such an implementation is not possible on a static website (at least to my knowledge) and so I used form-data to handle the submission. The steps for this are pretty straightforward.

1. Sign up for an account on [form-data](https://www.form-data.com/) and create a new form
2. Get the form action url (edit section of the form) and put it in your form like this:

   ```html
   <form action="Form action URL" method="post">
     ...
     <button type="submit">
       Submit
     </button>
   </form>
   ```

3. And voila, the data entered in the form should be sent to your form-data inbox and your mail (you need to configure this in the Email section) upon hitting submit.

There are quite a few things you can configure with form-data but I will leave figuring that out to the reader.

### Host/deploy a react web app with GH Pages

GH Pages is an awesome feature offered by GitHub to host static webpages for a respository. If you want to host your personal website on a url of this format: `<username>.github.io`, the repo name has to be `<username>.github.io` (this is a user page). Otherwise, the url will be `<username>.github.io/repo-name`. I did the former.

I have discussed the steps briefly on how to deploy a react web app to GH Pages below.

> Note: This is assuming you have already created a react app that resides in a repo by the name of `<username>.github.io`.

1. Your react code should live in a branch other than master as master is where the static website is deployed for user pages. My code lives in a branch called development.
2. Install gh-pages with npm: `npm install gh-pages`
3. Specify the homepage attribute in your `package.json` file:

   ```json
   {
     "name": "portfolio",
     "homepage": "http://<username>.github.io/",
     "version": "0.1.0",
     "private": true
   }
   ```

4. In the scripts object in `package.json`, add these two command specifications:

   ```json
   "predeploy": "yarn run build",
   "deploy": "gh-pages -d build"
   ```

   Should look something like this:

   ```json
   "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -b master -d build"
   },
   ```

5. Then generate a production build of your app, and deploy it to GitHub Pages with `npm run deploy`

For more information, see [References](#references).

### Create a snappy web app

This is a single page web app with client-side routing accomplished by react-router. By using react-router, navigation to different pages does not require a refresh and thus allows for a seamless user experience.

To get started with react-router, you should check out their [comprehensive documentation](https://reacttraining.com/react-router/web/guides/quick-start).

## Workplace settings

### Editor: VS Code

I use the following extensions when working with Javascript:

- **Prettier**: Code formatter for javascript
- **Auto Import**
- **Reactjs code snippets**
- **Import Cost**: Calculates import cost in javascript files
- **Markdown All in One**: Generally for my README.md file

## References

- [Create a new React App - Facebook](https://reactjs.org/docs/create-a-new-react-app.html)
- [Using React + Google Sheets as your CMS - Medium](https://medium.com/@ryan.mcnierney/using-react-google-sheets-as-your-cms-294c02561d59)
- [Get started with form-data](https://www.form-data.com/?form=86cf0c10-a4a4-4dff-8bf2-c6518c1d9cfe)
- [Form resources for static websites](https://gridsome.org/docs/guide-forms/)
- [Submit a form with nodemailer and express](https://www.youtube.com/watch?v=EPnBO8HgyRU)
- [Temporary email with Ethereal](https://ethereal.email/create)
- [Deploy a React App to GH Pages](https://github.com/gitname/react-gh-pages)
- [Deploy a React App to GH Pages - Medium](https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a)
- [Get started with react router](https://reacttraining.com/react-router/web/example/basic)
- [Install react-router-dom with npm](https://www.npmjs.com/package/react-router-dom)
- [Generate Icons](https://favicon.io/favicon-generator/)
- [Host Images on the cloud](https://imggmi.com/)
