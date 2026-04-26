# Olex-copy-beck

A backend API scaffold for the Olex-copy React Native frontend.

## Structure

- `server.js`: Express server setup with CORS and JSON parsing.
- `routes/cars.js`: routing layer for `/api/cars`.
- `controllers/carsController.js`: business logic for car operations.
- `data/cars.js`: sample dataset and data accessor helpers.
- `package.json`: Node dependencies and start script.

## Run locally

1. Open `Olex-copy-beck`.
2. Run `npm install`.
3. Run `npm start`.
4. The API will be available at `http://localhost:4000`.

## Available endpoints

- `GET /api/cars`
- `GET /api/cars/:id`
- `POST /api/cars`

## Notes

- The backend is separated into routes, controllers, and data layers for cleaner file management.
- This setup supports faster feature expansion and easier maintenance.
