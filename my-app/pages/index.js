import Link from 'next/link';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to My Next.js App</h1>
      <p>This is the home page.</p>
      <Link href="/about">Secondary Page</Link>
    </div>
  );
}
