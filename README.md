# React Native Expo Go App

## Overview
This project is a React Native application designed to run on Expo Go. It includes features that connect to an API, and you can customize the app by changing the API endpoint.

## Prerequisites
Ensure you have the following tools installed:

1. **Node.js**: LTS version (https://nodejs.org/)
2. **Expo CLI**: Install via `npm install -g expo-cli`
3. **Expo Go App**: Available on Android and iOS app stores

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Update the API Endpoint**:
   Navigate to `src/apiService/endpoint.js` (or `.ts` if using TypeScript) and update the endpoint URL to point to your API:
   ```javascript
   export const API_ENDPOINT = "https://your-api-url.com";
   ```

4. **Start the Development Server**:
   ```bash
   expo start
   ```

5. **Run the App**:
   Open the Expo Go app on your device and scan the QR code displayed in your terminal or browser.

## Project Structure

- `src/` - Contains the main source code for the app.
  - `components/` - Reusable components.
  - `screens/` - Application screens.
  - `apiService/` - API configuration and services.
  - `assets/` - Images, fonts, and other static assets.

## Environment Configuration

Ensure your API endpoint is correctly configured before running the app. This is located in the file:
```
/src/apiService/endpoint.js
```

Update the `API_ENDPOINT` variable to your desired API URL.

## Dependencies
This project uses the following major dependencies:

- `react-native`
- `expo`
- `expo-router`
- `react-navigation`

## Scripts

- **Start the project**:
  ```bash
  expo start
  ```

- **Run on Android emulator**:
  ```bash
  expo start --android
  ```

- **Run on iOS simulator**:
  ```bash
  expo start --ios
  ```

## Troubleshooting

- **Dependency Issues**: Run `npm install` to ensure all dependencies are installed.
- **Expo Go Issues**: Make sure you are on the latest version of Expo Go.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Happy coding!

