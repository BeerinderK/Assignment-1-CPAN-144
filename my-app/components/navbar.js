import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#ddd' }}>
      <Link href="/">Home</Link> | 
      <Link href="/about">Secondary Page</Link> | 
      <Link href="/counter">Counter</Link>
    </nav>
  );
}
