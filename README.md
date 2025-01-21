# Exponent Learning Tool

An interactive web application designed to help middle school students build a foundational understanding of exponents through visual and hands-on learning.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation
1. Clone this repository
```bash
git clone [repository-url]
cd middle-school-math
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Pedagogical Approach

This demo showcases interactive tools that aid students in building a foundational knowledge of exponents and their relationship to repeated multiplication. The application is designed to be used as part of a "bell-ringer" activity, following a carefully structured progression:

### Learning Sequence

1. **Basic Multiplication**
   - Start with a simple multiplication question (e.g., "What is 3×3?")
   - Builds on existing multiplication knowledge

2. **Extended Multiplication**
   - Progress to repeated multiplication (e.g., "What is 3×3×3?")
   - Introduces the concept of repeating the same number

3. **Visual Connection**
   - Show the animation demonstrating that 3³ = 3×3×3
   - Creates a visual bridge between notation styles

4. **Interactive Exploration**
   - Students use the slider to see how changing the exponent affects the multiplication
   - Hands-on learning reinforces the relationship

5. **Guided Practice**
   - Show 3×3×3×3 and ask students to write it as an exponent
   - Tests understanding of the conversion from multiplication to exponent notation

6. **Reverse Practice**
   - Show 3⁵ and ask students to write the multiplication
   - If incorrect, provide scaffolded support:
     - Allow another attempt
     - Offer the slider as a fail-proof way to see the answer

7. **Abstraction**
   - Demonstrate that numbers can be replaced with variables (e.g., x)
   - Introduces algebraic thinking

8. **Reinforcement**
   - Provide the number line tool again
   - Allows for additional practice and confidence building

### Key Features

- Interactive slider for hands-on learning
- Visual animations showing the relationship between notations
- Position annotations to help count factors
- Immediate feedback with celebratory animations
- Fail-proof practice options for building confidence

## Technical Details

Built with:
- React + TypeScript
- Vite
- Framer Motion (animations)
- React Confetti (celebrations)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
