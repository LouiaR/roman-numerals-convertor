# Roman-Numerals: Convertor
This application converts normal number to roman numeral and roman numeral to normal number. It converts numbers between 1 and 3999.

To Run
============
* Server
1. `> cd server `
2. `> npm install or npm i `,  install all dependency .
3. `> npm start`, start server.
4. `> npm test`, run test.


* Frondend
1. `> cd frontend `
2. `> npm install or npm i `,  install all dependency .
3. `> npm start`, start app.

## Approach

### Features
With the time given, I have chosen a combination of features and decided on how
the structure of the application should look like. I then followed agile development approach to develop the application.

With this application, users can:
- convert a normal number (1 up to 3999) to roman number (I, V, M...)
- Convert a roman number to normal number

### Main frameworks and libraries
- Frontend: HTML, CSS, ES6, JavaScript, React
- Server: Node.js, Express.js, Jest


### Application architecture
In the server I create two endpoint API which respectively send to the frontend the ouput of the conversion of normal number to roman number and the outpout of roman number to normal number in json format. 
On the client the user has to fill an input field with the type of number he want to convert. That input is then send to server where conversion occurs and the outut is send back to the client.

The server uses Node.js to create a server and the frontend uses a simple Node.js module called `axios` for making http calls to communicate with the server.

### Future improvements
I'd like to keep expanding this project to hone my existing skills, as well as
to explore new technologies.

## Licence
.  MIT

## Authour

Louis 