import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main>
      <Header text={"Home"} />
      <Nav />
      <ProductCard />
    </main>
  );
}
