import Avatar from "./Avatar";

const AvatarDemo = () => {
  return (
    <div className="flex gap-4">
      <Avatar size="sm" src="https://i.pravatar.cc/100?img=1" />
      <Avatar size="md" src="https://i.pravatar.cc/100?img=2" />
      <Avatar size="lg" src="https://i.pravatar.cc/100?img=3" />
    </div>
  );
};

export default AvatarDemo;
