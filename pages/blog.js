import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Blog(){
  return (
    <>
      <Nav />
      <main className="container py-12">
        <h1>VYRON Blog</h1>
        <p className="text-muted">Insights, release notes, and case studies.</p>
        <div className="mt-6 grid">
          <div className="card"><h3>Launch Notes</h3><p>How VYRON was built.</p></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
