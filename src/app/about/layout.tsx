import Link from 'next/link';
import React from 'react'

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
  return (
    <div><h1>About Us</h1>
     <ul>
        <li><Link href="/about/contacts">Contats</Link></li>
        <li><Link href="/about/team">Team</Link></li>
     </ul>
     {children}
    </div>
  );
}

