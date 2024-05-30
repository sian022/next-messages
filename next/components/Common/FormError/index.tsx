import ExclamationTriangle from "@/components/SvgIcons/ExclamationTriangle";

interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-danger text-dangerText text-sm p-3 rounded-md flex items-center gap-x-2">
      <ExclamationTriangle />

      {message}
    </div>
  );
};

export default FormError;
