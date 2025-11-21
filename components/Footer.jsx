export default function Footer(){
  return (
    <footer className="footer mt-12">
      <div className="container footer-wrap">
        <span>© {new Date().getFullYear()} VYRON — Future in Motion</span>
        <span className="text-sm text-gray-400">Privacy • Terms</span>
      </div>
    </footer>
  );
}
