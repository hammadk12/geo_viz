// Home Page
import { Card } from './components/UI/Card';
import { Button } from './components/UI/Button';
import DataPoints from "./components/Visualization/DataPoints";
import WorldMap from "./components/Visualization/WorldMap";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-5xl font-bold mb-8 text-center">Welcome to GeoViz</h1>
        
        <Card className="mb-8 p-6">
          <p className="text-lg mb-4">
            Explore geographical data visualizations with our interactive map.
          </p>
          <div className="flex space-x-4">
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </Card>

        <Card className="mb-8 p-6">
          <div className="w-full h-[60vh] rounded-lg overflow-hidden">
            <WorldMap>
              <DataPoints />
            </WorldMap>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Features</h2>
            <ul className="space-y-2">
              <li>• Interactive world map</li>
              <li>• Data point visualization</li>
              <li>• Zoom and pan capabilities</li>
              <li>• Customizable data sets</li>
            </ul>
          </Card>

          <Card className="p-6">
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