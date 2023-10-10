interface Header {
  text: string;
}

export default function Header({ text }: Header) {
  return (
    <header>
      <h1>{text}</h1>
    </header>
  );
}
