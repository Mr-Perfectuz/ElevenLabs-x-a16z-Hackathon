import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return <SignIn path='/sign-in' routing='path' signUpUrl='/sign-up' />;
};

export default SignInPage;
