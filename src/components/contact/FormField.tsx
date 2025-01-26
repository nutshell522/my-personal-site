/**
 * 表單欄位子元件
 */
const FormField: React.FC<{
  id: string;
  label: string;
  type: 'text' | 'email' | 'textarea';
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
}> = ({ id, label, type, name, value, onChange, required = false }) => (
  <div className="space-y-2">
    <label
      htmlFor={id}
      className="block font-medium text-gray-700 dark:text-gray-300"
    >
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={5}
        className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-400"
      ></textarea>
    ) : (
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-400"
      />
    )}
  </div>
);

export default FormField;
