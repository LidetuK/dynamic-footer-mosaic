
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Welcome to Somalia Bulletin</h1>
          <p className="text-xl text-gray-600">Your trusted source for news and updates</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
