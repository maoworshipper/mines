# Mines (Minesweeper)

A React-based implementation of a number-finding game inspired by Minesweeper. Built with React and Vite.

## Description

Mines is a puzzle game where players must find all the numbers on the board while avoiding zeros. The game features:

- Customizable board size
- Dynamic score tracking
- Random number generation
- Immediate feedback on game progress
- Win/lose conditions

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## How to Play

1. Enter a number in the input field to set the board size (n×n)
2. Click on cells to reveal their values
3. Avoid cells with value 0 (they end the game)
4. Try to find all non-zero numbers
5. Win by accumulating the sum of all numbers on the board

### Game Rules

- Each cell contains a random number between 0 and the board size
- Clicking a cell with 0 ends the game
- The game is won when you find all non-zero numbers
- You can restart the game at any time after winning or losing

## Project Structure

```
src/
├── components/
│   ├── OptionButton.jsx - Individual cell component
│   └── Row.jsx - Row component for the game board
├── App.jsx - Main game logic and layout
├── App.css - Styling
└── main.jsx - Entry point
```

## Technologies Used

- React 19
- Vite
- CSS3
- ES6+ JavaScript

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Contributing

Feel free to fork the project and submit pull requests with improvements.

## License

This project is open source and available under the MIT License.
