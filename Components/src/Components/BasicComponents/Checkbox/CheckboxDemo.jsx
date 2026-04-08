import Checkbox from "./Checkbox";

const CheckboxDemo = () => {
  return (
    <div className="flex flex-col gap-3">
      <Checkbox label="Accept Terms" />
      <Checkbox label="Subscribe Newsletter" />
      <Checkbox label="Enable Notifications" />
    </div>
  );
};

export default CheckboxDemo;
