import Alert from "./Alert";

const AlertDemo = () => {
  return (
    <div className="flex flex-col gap-4">
      <Alert type="success">Success message</Alert>
      <Alert type="error">Error message</Alert>
      <Alert type="warning">Warning message</Alert>
      <Alert type="info">Info message</Alert>
    </div>
  );
};

export default AlertDemo;
