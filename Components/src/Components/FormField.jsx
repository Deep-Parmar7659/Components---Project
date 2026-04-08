// FormField props values come from LoginForm.
import Input from "./BasicComponents/Input";

function FormField({ type, placeholder, value, onChange, error }) {
  return (
    // space-y-1 creates spacing between input and error message.
    <div className="space-y-1">
      {/* We pass props directly to Input. */}
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default FormField;
