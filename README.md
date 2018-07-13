# Disco Test

A filterable list of albums using React.js and the Discogs API.

## Features
webpack 4
Babel
Staging ES features
Hot reload

## Installation
```
git clone git@gitlab.com:igoroctaviano/disco-test.git
cd disco-test
npm install
npm start
```
Visit http://localhost:8080/

## Docker
### Build image
```
docker build -t disco-test
```
### Run image
```
docker run -it --rm -v "$(pwd):/app" -p 8080:8080 --name disco-test disco-test
```