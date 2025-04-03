import Header from './components/Header';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-emergency from-primary-50 to-secondary-50">
        <section id="home" className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Earthquake Impact in Bangkok</h2>
            <ImageSlider />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
