import Header from '@/components/shared/Header';
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const { userId } = auth();
  const transformation = transformationTypes[type];

  if (!userId) redirect('/sign-in');

  let user;
  try {
    user = await getUserById(userId);
  } catch (error) {
    console.error('Error fetching user:', error);
    redirect('/error'); // Redirect to an error page or handle the error as needed
  }

  if (!user) {
    return null; // Return null or a fallback UI if the user is not found
  }

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <section className='mt-10'>
        <TransformationForm
          action='Add'
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
};

export default AddTransformationTypePage;
