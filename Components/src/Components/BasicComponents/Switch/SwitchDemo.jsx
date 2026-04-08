import Switch from "./Switch";

const SwitchDemo = () => {
  return (
    <div className="flex flex-col gap-4">
      <Switch label="Enable Notifications" />
      <Switch label="Dark Mode" />
      <Switch label="Auto Updates" />
    </div>
  );
};

export default SwitchDemo;
