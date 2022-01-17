import type { NextPage } from 'next';
import  Head  from 'next/head'



const Dashboard: NextPage = () => {

    const extensionId: string = 'llneclmbomnmhcgbaacmjdloencbfahj'; 

  

  return (
        <div>
            <Head>
                <title>Dashboard | RobotDorm</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>DashBoard</h1>
            </main>
        </div>
  )
}

export default Dashboard;