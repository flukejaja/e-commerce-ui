import type { ReactElement } from 'react';

import type { NextPageWithLayout } from './_app';
import Layout from '@/Components/layout/layout';
import Sliderpage from './Components/slider';
import Bannerpage from './Components/banner';
import Productpage from './product/index';


const Page: NextPageWithLayout = () => {
  return <div className='flex flex-col text-black w-full font-sans antialiased'>
    <Sliderpage />
    <Bannerpage />
    <div className='bg-white w-full flex justify-center flex-col items-center'>
    <h3 className="text-3xl font-bold">PRODUCT OVERVIEW</h3>
      <Productpage />
    </div>
  </div>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Page;