"use client";

function AddToCart() {
  return (
    <div>
      <button
        onClick={() => console.log("click")}
        className="btn btn-primary btn-disabled"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}

export default AddToCart;
