# Al Quran & Hadith Web Service

- [x] Author: [Mejanur Rahman](https://www.github.com/mrmezan06)

- [x] Version: 1.0.0

## Description

Al-Quran Web Service is a web service that provides access to the full text of the Quran in multiple languages. It is designed to be used by developers and researchers who need access to the Quran in an easy-to-use format.

The Al-Quran Web Service provides access to the full text of the Quran in multiple languages, including Arabic, English, and Bangla. The service also provides access to translations of the Quran into other languages. The service is designed to be used by developers and researchers who need access to the Quran in an easy-to-use format.

The Al-Quran Web Service also provides a web interface that allows users to browse through all of the verses and chapters in the Quran. This interface includes features such as highlighting words or phrases within a verse, searching for specific words or phrases within a verse, and bookmarking verses for later reference.

It is built with React, Redux, Node.js, Express, and MongoDB. It is included several hadiths and its translation.

The Al-Quran Web Service is free and open source software released under an MIT license. The application is deployed on [Netlify](https://app.netlify.com/). The application is live at [https://islamic-life.netlify.app/](https://proshop-inventory.netlify.app/) & back-end running on [Render](https://www.render.com).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Packages](#packages)
- [Live Demo](#livedemo)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the application follow the instructions below:

```bash
git clone https://github.com/mrmezan06/al-quran.git
cd backend
npm install
npm run server
cd client
npm install --legacy-peer-deps
npm start
```

Note: The application uses MongoDB as the database. You will need to create a MongoDB database and add the connection string to the .env file.
You need to provide some credientials in the .env file.
[x] MONGO_URI = "Your MongoDB connection string"
[x] PORT = 5000
[x] NODE_ENV = "development"

## Live Demo ![](https://img.shields.io/badge/Live-Server-brightgreen)

[![](https://img.shields.io/badge/AlQuran-Live-brightgreen)](https://islamic-life.netlify.app/)

## Packages

### Front-end

- [x] [axios](https://www.npmjs.com/package/axios)
- [x] [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)
- [x] [react-router-bootstrap](https://www.npmjs.com/package/react-router-bootstrap)
- [x] [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [x] [react-redux](https://www.npmjs.com/package/react-redux)
- [x] [redux](https://www.npmjs.com/package/redux)
- [x] [redux-devtools-extension](https://www.npmjs.com/package/redux-devtools-extension)
- [x] [redux-thunk](https://www.npmjs.com/package/redux-thunk)
- [x] [react](https://www.npmjs.com/package/react)

### Back-end

- [x] [dotenv](https://www.npmjs.com/package/dotenv)
- [x] [express](https://www.npmjs.com/package/express)
- [x] [mongoose](https://www.npmjs.com/package/mongoose)
- [x] [cors](https://www.npmjs.com/package/cors)
- [x] [colors](https://www.npmjs.com/package/colors)
- [x] devDependencies
  - [x] [nodemon](https://www.npmjs.com/package/nodemon)

## Usage

To use the application follow the instructions below:

```bash
npm run dev
```

It will concurrently run the front-end and back-end server.

## Contributing

If you would like to contribute it, you can follow these guidelines for how to do so. Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

- [x] (This README was generated with ❤️ by [readme-md-generator]())
