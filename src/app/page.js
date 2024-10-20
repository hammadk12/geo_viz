// Home Page
import { Card } from './components/UI/Card';
import { Button } from './components/UI/Button';
import DataPoints from "./components/Visualization/DataPoints";
import WorldMap from "./components/Visualization/WorldMap";
import Hero from './components/UI/Hero';
 

export default function Home() {
  return (
    <main className="min-h-screen bg-cover bg-center p-6">
      <div>
      <Hero />
      </div>
      <div className="max-w-7xl mx-auto space-y-8">
        <Card>
          <div className="w-full h-[60vh] rounded-lg overflow-hidden">
            <WorldMap>
              <DataPoints />
            </WorldMap>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h2 className="text-xl font-bold mb-4">Features</h2>
            <ul className="space-y-2">
              <li>• Interactive world map</li>
              <li>• Data point visualization</li>
              <li>• Zoom and pan capabilities</li>
              <li>• Customizable data sets</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-xl font-bold mb-4">Get Started</h2>
            <p className="mb-4">Ready to dive in? Follow these steps:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Upload your data</li>
              <li>Choose visualization type</li>
              <li>Explore and analyze</li>
              <li>Share your insights</li>
            </ol>
          </Card>
        </div>
      </div>
    </main>
  );
}