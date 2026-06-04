

// Describes the props the component receives
interface GreetingProps {
  name: string;
}

// Functional component
const Greeting = ({ name }: GreetingProps) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;