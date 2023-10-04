# Stazi React Assignments

## Assignment 1 (Cars list with pagination)

> Problem statement: https://internshala.com/uploads/chat-uploads/2a4xv2c5le0-2526087.pdf

> Solution: https://stazi-react-car.vercel.app/

## Assignment 2 (Hotel list with tabination)

> Problem statement: https://internshala.com/uploads/chat-uploads/c407ugfvvnw-2014100.pdf

> Solution: https://stazi-react-hotel.vercel.app/

## Description

This project includes both the assignments mentioned above. The project is built using ReactJS and TailwindCSS. The project is deployed on Vercel.

The project renders the view depending on the hostname. For example, if the hostname contains `car`, then the car assignment will be rendered. Similarly, if the hostname contains `hotel`, then the hotel assignment will be rendered.

The api is faked using static JSON files. The JSON files are stored in the `src/api` folder. The JSON files are named as `car.json` and `hotel.json` for the car and hotel assignment respectively.

The project is built using the following technologies:
- ReactJS
- TailwindCSS
- Vercel
- TypeScript

## Running the project

To run the project, follow the steps below:
- Clone the repository
- Run `npm install` to install the dependencies
- change the default export of `src/App.ts` to the required assignment (`CarApp` or `HotelApp`)
- Run `npm run dev` to start the development server