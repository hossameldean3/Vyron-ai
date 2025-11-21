import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Demo(){
  const [prompt, setPrompt] = useState('');
  const [email, setEmail] = useState('');
  const [saving, setSaving] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!prompt || prompt.length < 8) return alert('Write a short prompt (8+ chars)');
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return alert('Enter a valid email');

    setSaving(true);
    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, email })
      });
      if (!res.ok) throw new Error('network');
      setSaving(false);
      alert('Demo queued. We will email you.');
    } catch(err){
      const jobs = JSON.parse(localStorage.getItem('vyron_jobs') || '[]');
      jobs.unshift({ id: Date.now(), prompt, email, status: 'pending' });
      localStorage.setItem('vyron_jobs', JSON.stringify(jobs));
      setSaving(false);
      alert('Saved locally. We will process manually during MVP.');
    }
  };

  return (
    <>
      <Nav />
      <main className="container py-12">
        <h1 className="text-3xl font-bold">Generate a Demo</h1>
        <form onSubmit={submit} className="mt-6 max-w-xl">
          <label className="block font-semibold">Describe your video idea</label>
          <textarea className="w-full mt-2 p-3 rounded-md bg-[#06111a] border border-[#0b1320]" value={prompt} onChange={e=>setPrompt(e.target.value)} rows={6} />
          <label className="block mt-4 font-semibold">Your email</label>
          <input className="w-full mt-2 p-3 rounded-md bg-[#06111a] border border-[#0b1320]" value={email} onChange={e=>setEmail(e.target.value)} />
          <button type="submit" className="btn btn-primary mt-4" disabled={saving}>{saving ? 'Saving...' : 'Generate'}</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
