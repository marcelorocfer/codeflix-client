'use client'

type AuthFormProps = {
  formType: 'login' | 'register';
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  formType,
  onSubmit,
}) => {
  return <div>AuthForm</div>;
}