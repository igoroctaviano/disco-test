FROM node:8.11.3

# Copy all local files into the image
COPY . .

# Build for production
RUN npm run build

# Install the app
RUN npm install

# Set the command to start the node server
CMD npm start

# Tell Docker which port
EXPOSE 8080