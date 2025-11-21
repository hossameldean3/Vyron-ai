import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Features(){
  return (
    <>
      <Nav />
      <main className="container py-12">
        <h1 className="text-3xl font-bold">Features</h1>
        <div className="grid mt-6">
          <div className="card"><h3>Text → Video</h3><p>Turn scripts into cinematic scenes.</p></div>
          <div className="card"><h3>AI Characters</h3><p>Talking avatars with real lipsync.</p></div>
          <div className="card"><h3>Upscale</h3><p>Enhance to 4K with neural upscaling.</p></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
