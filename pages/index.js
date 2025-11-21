import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import VideoPlayer from '../components/VideoPlayer';

export default function Home() {
  return (
    <>
      <Head>
        <title>VYRON — Future in Motion</title>
        <meta name="description" content="VYRON — AI Video. Reinvented. Create cinematic AI-generated videos in minutes." />
        <meta property="og:title" content="VYRON — Future in Motion" />
        <meta property="og:description" content="Create cinematic AI-generated videos in minutes." />
        <meta property="og:image" content="/assets/demo-poster.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Nav />

      <main className="container">
        <section className="hero-grid">
          <div className="hero-left">
            <h1 className="text-4xl font-extrabold">AI Video — Reinvented.</h1>
            <p className="text-muted mt-4 max-w-lg">Create stunning cinematic AI-generated videos in minutes. Ultra-realistic motion and crisp 4K rendering.</p>

            <div className="mt-6 flex gap-3">
              <a href="/demo" className="btn btn-primary">Generate Demo</a>
              <a href="/pricing" className="btn btn-ghost">View Pricing</a>
            </div>

            <ul className="trust mt-4 text-sm text-gray-400">
              <li>Instant samples</li>
              <li>Cinematic quality</li>
              <li>Enterprise integrations</li>
            </ul>
          </div>

          <div className="hero-right">
            <VideoPlayer
              mp4Url="/assets/demo-video.mp4"
              hlsUrl="/assets/demo-video.m3u8"
              poster="/assets/demo-poster.jpg"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
