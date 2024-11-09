// Home Page
import { Card } from './components/UI/Card';
import { Button } from './components/UI/Button';
import WorldMap from "./components/Visualization/WorldMap";
import Hero from './components/UI/Hero';
 

export default function Home() {
  return (
    <main className="min-h-screen bg-cover bg-center p-6">
      <div className="max-w-7xl mx-auto space-y-8">
      <Hero />
        <Card>
          <div className="w-full h-[68vh] rounded-lg overflow-hidden">
            <WorldMap />
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h2 className="text-xl font-bold mb-4">Chart/Graph</h2>
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
          <Card>
            <h2 className='text-xl font-bold mb-4 font-walsheim'>Recommendations + Next Steps:</h2>
          </Card>
        </div>
      </div>
    </main>
  );
}