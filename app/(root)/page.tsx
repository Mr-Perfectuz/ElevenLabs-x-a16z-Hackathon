// import { Collection } from '@/components/shared/Collection';
// import { navLinks } from '@/constants';
// import { getAllImages } from '@/lib/actions/image.actions';
import Image from 'next/image';
import Link from 'next/link';

interface SearchParamProps {
  searchParams: {
    page?: string;
    query?: string;
  };
}

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  // const images = await getAllImages({ page, searchQuery });

  return (
    <>
      <section className='home'>
        <h1 className='home-heading'>
          Unleash Your Creative Vision with Imaginify
        </h1>
        <ul className='flex-center w-full gap-20'></ul>
      </section>

      <section className='sm:mt-12'>
        {/* <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        /> */}
      </section>
    </>
  );
};

export default Home;
