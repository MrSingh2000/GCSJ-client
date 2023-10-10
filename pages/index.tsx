import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next/types'
import { registration } from '@/types'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Leaderboard from '@/components/Leaderboard'
import footerImg from 'assets/footer.jpg';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

type Props = {
  responseData: registration[],
}

export default function Home({ responseData }: Props) {
  const [data, setData] = useState<registration[]>(responseData);
  const [LeaderBoard, setLeaderBoard] = useState(false);

  useEffect(() => {
    let sortedData = data.slice();
    sortedData.sort((a, b) => parseInt(b['score']) - parseInt(a['score']));
    setLeaderBoard(true);
    setData(sortedData);
  }, [])


  const sortData = (type: string) => {
    let sortedData = data.slice();

    if (type === "badges") {
      sortedData.sort((a, b) => parseInt(b['# of Skill Badges Completed']) - parseInt(a['# of Skill Badges Completed']));
      setLeaderBoard(false);
    }
    else if (type === "courses") {
      sortedData.sort((a, b) => parseInt(b['# of Courses Completed']) - parseInt(a['# of Courses Completed']));
      setLeaderBoard(false);
    }
    else if (type === "genai") {
      sortedData.sort((a, b) => parseInt(b['# of GenAI Game Completed']) - parseInt(a['# of GenAI Game Completed']));
      setLeaderBoard(false);
    }
    else {
      sortedData.sort((a, b) => parseInt(b['score']) - parseInt(a['score']));
      setLeaderBoard(true);
    }
    setData(sortedData);
  }

  return (
    <div className='h-full min-h-scree3 w-full'>
      <Head>
        <title>GCSJ</title>
      </Head>
      <Navbar />
      {/* <Sidebar data={data} /> */}
      <div className='flex flex-col md:flex-row justify-center'>
        <div className='md:text-xl text-sm bg-white w-fit p-2 rounded-2xl mt-2 ml-2'>
          <span className='font-semibold mr-2'>
            Accounts Active:
          </span>
          {data.reduce((count, user) => {
            if (user["Redemption Status"] === "Yes") {
              return count + 1;
            }
            return count;
          }, 0)}/{data.length}
        </div>

        <div className='md:text-xl text-sm bg-white w-fit p-2 rounded-2xl mt-2 ml-2'>
          <span className='font-semibold mr-2'>
            GenAI Completed:
          </span>
          {data.reduce((count, user) => {
            if (user["# of GenAI Game Completed"] === '1') {
              return count + 1;
            }
            return count;
          }, 0)}/{data.length}
        </div>

        <div className='md:text-xl text-sm bg-white w-fit p-2 rounded-2xl mt-2 ml-2'>
          <span className='font-semibold mr-2'>
            GCSJ Completed:
          </span>
          {data.reduce((count, user) => {
            if (user['Total Completions of both Pathways'] === 'Yes') {
              return count + 1;
            }
            return count;
          }, 0)}/{data.length}
        </div>
        <div>

        </div>
      </div>
      <Leaderboard data={data} sortData={sortData} leaderBoard={LeaderBoard} />
      {/* <Image
      src={footerImg}
      width={500}
      height={500}
      alt="Picture of the author"
    /> */}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const res = await fetch(`${process.env.HOST_URL}/api/data`, {
    method: 'GET',
  });
  const response = await res.json();

  return {
    props: {
      responseData: response
    }
  }
}