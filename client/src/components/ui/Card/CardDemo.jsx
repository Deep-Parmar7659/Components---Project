import Card from "./Card";

const CardDemo = () => {
  return (
    <div className="grid gap-4">
      <Card>
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="text-gray-600 dark:text-gray-300">
          This is a simple card component used to group content.
        </p>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold">Another Card</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Cards are commonly used in dashboards and layouts.
        </p>
      </Card>
    </div>
  );
};

export default CardDemo;
