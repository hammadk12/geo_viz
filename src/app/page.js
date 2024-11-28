// Home Page
import { Card } from './components/UI/Card';
import { Button } from './components/UI/Button';
import WorldMap from "./components/Visualization/WorldMap";
import Hero from './components/UI/Hero';
import RevenueChart from './components/Visualization/RevenueChart';
import { Callout } from '@radix-ui/themes';
import { Info } from 'lucide-react';
import Inisghts from './components/UI/Insights';

export default function Home() {
  return (
    <main className="min-h-screen bg-cover bg-center p-6">
      <div className="max-w-7xl mx-auto space-y-8">
      <Hero />
      <Inisghts />
        <Card className='bg-[#e7e5e4]'> 
          <div className="w-full h-[50vh] rounded-lg overflow-hidden">
            <h2 className='text-2xl font-bold mb-4 text-center text-white'>Order Distribution By Country</h2>
            <WorldMap />
          </div>
        </Card>

        <div className="grid grid-cols-1 gap-8">
          <Card className='bg-[#e7e5e4] h-fit'>
            <h2 className="text-2xl font-bold mb-4 text-center text-white">Total Revenue By Country</h2>
            <RevenueChart />
          </Card>

          <Card>
            <h2 className="text-xl font-bold mb-4">Dashboard/Chart</h2>
          </Card>
        </div>
        <div className='flex justify-center space-x-12'>
          <Card className='font-walsheim w-[50%]'>
            <h2 className='text-xl font-bold mb-4'>Conclusion</h2>
            <p className='mb-2'>North Star Metrics & Dimensions:</p>
            <dl>
              <li>Amount of Users:</li>
              <li>Areas of Growth:</li>
              <li>KPI's:</li>
            </dl>
          </Card>
          <Card className='font-walsheim w-[50%]'>
            <h2 className='text-xl font-bold mb-4'>Summary of Insights:</h2>
            <p className='mb-2'>ipsum lorem</p>
            <dl>
              <li>ipsum lorem</li>
              <li>ipsum lorem</li>
              <li>ipsum lorem's:</li>
            </dl>
          </Card>
        </div>
        <div>
          <Card className='mb-6'>
            <h2 className='text-xl font-bold font-walsheim'>Recommendations + Next Steps:</h2>
          </Card>
          <Callout.Root size='3' color='bronze'>
            <Callout.Icon>
              <Info />
            </Callout.Icon>
            <Callout.Text>
                View on desktop for the best experience. Refresh page to render visualizations if not visible.
            </Callout.Text>
          </Callout.Root>
        </div>
      </div>
    </main>
  );
}