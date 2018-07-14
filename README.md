# Disco Test

A filterable list of albums using React.js and the Discogs API.

## Features
webpack 4
Babel
Staging ES features
Hot reload
React 16
Docker container (dev)

## Installation
```
git clone git@gitlab.com:igoroctaviano/disco-test.git
cd disco-test
npm install
npm start
```
Visit http://localhost:8080/

## Export your Discogs token (local)
The application uses your personal access token to retrieve data from the Discogs developer API.
*If you don't have it already, you can generate yours [here](https://www.discogs.com/settings/developers).*
```
export DISCOGS_TOKEN=<your_token>
```

## Docker
### Build image
```
docker build -t disco-test .
```
### Run image
```
docker run -it --rm -v "$(pwd):/app" -p 8080:8080 -e DISCOGS_TOKEN=<your_token> --name disco-test disco-test
```