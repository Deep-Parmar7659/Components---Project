import Badge from "./Badge";

const BadgeDemo = () => {
  return (
    <div className="flex gap-3 flex-wrap">
      <Badge>Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>
  );
};

export default BadgeDemo;
