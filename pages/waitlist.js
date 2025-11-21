import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Waitlist(){
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  async function join(e){
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return alert('Enter valid email');
    setDone(true);
  }
  return (
    <>
      <Nav />
      <main className="container py-12">
        <h1>Join the Waitlist</h1>
        <form onSubmit={join} className="mt-6">
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" className="p-3 rounded-md bg-[#06111a] border" />
          <button className="btn btn-primary ml-3">Join</button>
        </form>
        {done && <p className="mt-4 text-green-400">Thanks — check your email to confirm.</p>}
      </main>
      <Footer />
    </>
  );
}
