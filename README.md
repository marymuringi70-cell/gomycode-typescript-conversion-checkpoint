# React TypeScript Conversion 

## Overview

This project demonstrates how to convert React components written in JavaScript into TypeScript. The goal is to improve type safety, code readability, and maintainability by adding explicit types for component props, state, and functions.

## Objectives

* Convert a functional React component from JavaScript to TypeScript.
* Convert a class-based React component from JavaScript to TypeScript.
* Use TypeScript interfaces to define props and state.
* Apply type annotations to functions and component structures.

## Technologies Used

* React
* TypeScript
* Vite

## Project Structure

```text
src/
│
├── components/
│   ├── Greeting.tsx
│   └── Counter.tsx
│
├── App.tsx
└── main.tsx
```

## Code Conversion Details

### 1. Greeting Component

#### Original JavaScript Version

```jsx
import React from 'react';

const Greeting = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
```

#### TypeScript Version

```tsx
import React from "react";

interface GreetingProps {
  name: string;
}

const Greeting = ({ name }: GreetingProps) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
```

#### Changes Made

* Created a `GreetingProps` interface.
* Defined the `name` prop as a string.
* Applied the interface to the component props.

### 2. Counter Component

#### Original JavaScript Version

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

#### TypeScript Version

```tsx
import React, { Component } from "react";

interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  increment = (): void => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
```

#### Changes Made

* Created a `CounterState` interface.
* Defined `count` as a number.
* Typed the component state using `Component<{}, CounterState>`.
* Added a return type of `void` to the `increment` function.

## Running the Project

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

## Key TypeScript Concepts Used

### Interfaces

Interfaces define the shape of objects.

```tsx
interface GreetingProps {
  name: string;
}
```

### State Typing

State is explicitly typed to ensure correct data types.

```tsx
interface CounterState {
  count: number;
}
```

### Function Return Types

Functions can specify what they return.

```tsx
increment = (): void => {
  // logic
};
```

## Benefits of TypeScript

* Detects errors during development.
* Improves code readability.
* Enhances IDE support and autocompletion.
* Makes applications easier to maintain and scale.
* Provides stronger type safety compared to JavaScript.

## Conclusion

This checkpoint demonstrates the conversion of both functional and class-based React components from JavaScript to TypeScript. By using interfaces and type annotations, the application becomes more reliable, maintainable, and easier to understand.
