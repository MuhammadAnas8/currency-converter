# Currency Converter

A simple web-based currency converter that allows users to convert between different currencies in real time using an API.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This currency converter app lets users quickly and accurately convert currencies. Users can select the currencies to convert between, input an amount, and see the conversion rate and result instantly. The app leverages a currency API for real-time exchange rates.

## Features

- Convert between a variety of currencies
- Swap currencies with a single click
- Responsive design that works on all devices
- Real-time conversion rates fetched from an external API
- Easy-to-use interface with scrollable currency options
- You can also see the rate between two currencies in the header and their 4 conversions in the table below. The 4 conversions include: 
  - 1 unit of the base currency
  - 10 units
  - 50 units
  - 100 units

## Tech Stack

- **Frontend**: React, CSS, HTML
- **State Management**: React Context API
- **API**: [Currency API](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies)
- **Icons**: React Icons

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/MuhammadAnas8/currency-converter.git
    ```

2. Navigate to the project directory:
    ```bash
    cd currency-converter
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and go to `http://localhost:5173` to view the app.

## Usage

1. Choose the currency to convert from and the currency to convert to using the dropdowns.
2. Enter the amount you want to convert.
3. The converted amount will be displayed in real-time.
4. Use the swap button to easily switch between the two selected currencies.

## Contributing

Contributions are welcome! If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.
