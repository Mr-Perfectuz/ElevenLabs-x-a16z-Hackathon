import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return <SignUp path='/sign-un' routing='path' signInUrl='/sign-up' />;
};

export default SignUpPage;
