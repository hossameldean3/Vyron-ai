import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function About(){
  return (
    <>
      <Nav />
      <main className="container py-12">
        <h1>About VYRON</h1>
        <p className="text-muted">We build cinematic AI video tools for creators and brands.</p>
      </main>
      <Footer />
    </>
  );
}
