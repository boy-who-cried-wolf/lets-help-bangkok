import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
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
