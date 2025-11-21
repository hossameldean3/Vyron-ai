import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Pricing(){
  return (
    <>
      <Nav />
      <main className="container py-12">
        <h1 className="text-3xl font-bold">Pricing</h1>
        <div className="price-grid mt-6">
          <div className="price-card"><h3>Starter</h3><p>$0 — 5 demos / month</p></div>
          <div className="price-card recommended"><h3>Pay-per-use</h3><p>$0.99 / job</p></div>
          <div className="price-card"><h3>Enterprise</h3><p>Custom</p></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
