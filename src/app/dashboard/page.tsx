'use client';
import IMAGES from '../assets/images'; 
import CheckoutButton from '../components/checkoutButton/CheckoutButton';
import Header from '../components/header/Header';
import HistoryHeader from '../components/historyHeader/HistoryHeader';
import NavbarTabs from '../components/navbarTabs/NavbarTabs';
import TableComponent from '../components/tableComponent/TableComponent';
import { StaticImageData } from 'next/image';

interface LinkData {
  id: number;
  shortLink: string;
  originalLink: string;
  qrCode:any;
  images: string | StaticImageData; 
  clicks: number;
  status: 'Active' | 'Inactive';
  date: string;
  actions: string[];
}

const tableData: LinkData[] = [
  {
    id: 1,
    shortLink: 'https://linkly.com/Bn41aC0lnxj',
    images: IMAGES.twitterImg,
    originalLink: 'https://www.twitter.com/tweets/Berel_Coihu/',
    qrCode: '/path/to/qr1.png',
    clicks: 1313,
    status: 'Active',
    date: 'Oct 10, 2023',
    actions: ['edit', 'delete'],
  },
  {
    id: 2,
    shortLink: 'https://linkly.com/Bn41aC0lnxj',
    images:  IMAGES.youtubeImg,
    originalLink: 'https://www.youtube.com/watch?v=Bj72mH0I1uk',
    qrCode:IMAGES.qrImg,
    clicks: 4313,
    status: 'Inactive',
    date: 'Oct 08, 2023',
    actions: ['edit', 'delete'],
  },
];


function Dashboard() {
  return (
    <div className="bg-[#0B101B] h-screen">
      <div>
        <Header />
        <div>
          <div className="flex justify-center items-center">
            <CheckoutButton />
          </div>
          <div className="mt-[38px]">
            <NavbarTabs />
          </div>
          <div className='mt-[27px]'>
          <HistoryHeader count={143} />
          </div>
          <div className='mt-[28px]'>
            <TableComponent data={tableData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;