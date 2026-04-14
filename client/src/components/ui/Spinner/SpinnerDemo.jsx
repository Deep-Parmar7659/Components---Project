import Spinner from "./Spinner";

const SpinnerDemo = () => {
  return (
    <div className="flex items-center gap-6">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  );
};

export default SpinnerDemo;
