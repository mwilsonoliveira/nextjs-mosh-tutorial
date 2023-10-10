import Link from "next/link";

export default function Nav() {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/users">Usuários</Link>
        </li>
      </ul>
    </div>
  );
}
