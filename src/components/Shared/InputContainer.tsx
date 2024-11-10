import { Field } from 'formik';

type InputContainerProps = {
  inputName: string;
  error: string | undefined;
  isTouched: boolean | undefined;
  dark?: boolean;
};

const InputContainer = ({
  inputName,
  error,
  isTouched,
  dark,
}: InputContainerProps) => {
  const inputType = () => {
    switch (inputName) {
      case 'userEmail':
        return 'email';
      case 'message':
        return 'textarea';
      default:
        return 'text';
    }
  };

  const labelName = () => {
    return inputName === 'userEmail' ? 'Your email' : `Your ${inputName}`;
  };

  const getBorderColor = () => {
    if (error) {
      return 'border-error';
    }

    if (isTouched && !error) {
      return 'border-success';
    }
    return dark ? 'border-white' : 'border-grey-100';
  };

  return (
    <div className="relative mb-3">
      <Field
        name={inputName}
        type={inputType()}
        placeholder=""
        className={`p-4 block w-full bg-transparent border rounded-md focus:outline-none focus:border-secondary-100 ${getBorderColor()} ${dark ? 'text-white' : 'text-grey-100'}`}
      />
      <label
        htmlFor={inputName}
        className={`${dark ? 'text-white bg-primary' : 'text-grey-100 bg-white'} absolute left-4 text-sm font-medium transition-all duration-600 ease`}
      >
        {labelName()}
      </label>
      {error && isTouched ? (
        <div className="text-error text-sm">{error}</div>
      ) : (
        <div className="h-5" />
      )}
    </div>
  );
};

export default InputContainer;
