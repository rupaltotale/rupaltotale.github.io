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
    - [Use react-router for a more snappy web app](#use-react-router-for-a-more-snappy-web-app)
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

I know, I know, this is kind of a strange choice, but do bear with me. I chose google sheets for my CMS because it is free (always a bonus), accessible from anywhere, customizable enough for the purposes of this website, and fits well with a static website. Most of my information displayed on this website is stored on one document with mutiple sheets and I fetch this data with tabletop.js.

Here is how I set it up.

1. Publish your Google Sheets to the web
   1. Open the File menu and click Publish to web
   2. Towards the bottom select Start publishing (the entire document)
   3. Save your spreadsheet key. From the URL, your spreadsheet key will be the entire string after `/spreadsheets/d/KEY/edit#gid=0`
      ![image](https://miro.medium.com/max/2694/1*uTBIqOEH8f5JeQHTYHyBKg.png)
2. Fetch data with tabletop on react app
   1. Install tabletop with npm: `npm install tabletop`
   2. Use tabletop in your app to get relevant data
      1. Template code for multiple sheets
      ```
          Tabletop.init({
            key: '<Your sheets key from step 1.3>',
            simpleSheet: false,
            callback: (data, tabletop) => {
              const sheetData = tabletop.sheets('sheetName').elements;
              // use sheetData as neccesary
            }
          });
      ```
      2. Template code for single sheet (assuming you only published a single sheet!)
      ```
          Tabletop.init({
            key: '<Your sheets key from step 1.3>',
            simpleSheet: true,
            callback: (data) => {
              // use data as neccesary
            }
          });
      ```

### Submit forms with form-data

Some kind of intro

1. Step 1
2. Step 2

### Host/deploy a react web app with GH Pages

Some kind of intro

1. Step 1
2. Step 2

### Use react-router for a more snappy web app

Use hash router for static pages

1. Step 1
2. Step 2

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
- [Get Started with form-data](https://www.form-data.com/?form=86cf0c10-a4a4-4dff-8bf2-c6518c1d9cfe)
- [Form resources for static websites](https://gridsome.org/docs/guide-forms/)
- [Submit a form with nodemailer and express](https://www.youtube.com/watch?v=EPnBO8HgyRU)
- [Temporary email with Ethereal](https://ethereal.email/create)
- [Get started with react router](https://reacttraining.com/react-router/web/example/basic)
- [Install react-router-dom with npm](https://www.npmjs.com/package/react-router-dom)
