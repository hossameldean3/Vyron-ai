import Link from 'next/link';
export default function Nav(){
  return (
    <header className="topbar bg-transparent sticky top-0 z-40">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="VYRON" className="brand-img" />
          <span className="font-bold">VYRON</span>
        </div>
        <nav className="nav">
          <Link href="/"><a className="px-3">Home</a></Link>
          <Link href="/features"><a className="px-3">Features</a></Link>
          <Link href="/pricing"><a className="px-3">Pricing</a></Link>
          <Link href="/demo"><a className="btn btn-primary">Demo</a></Link>
        </nav>
      </div>
    </header>
  );
}
