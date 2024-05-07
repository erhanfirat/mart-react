const pageTitleStyling = {
  backgroundColor: "#002233",
  color: "#eef1c4",
};

export const ProductsPage = ({ productList }) => {
  console.log("ProductsPage > productList: ", productList);
  return (
    <div>
      <h1 style={pageTitleStyling}>Ürünler</h1>
      <h1
        style={{
          backgroundColor: "#002233",
          color: "#eef1c4",
        }}
      >
        Ürünler
      </h1>
      <hr />
      <div className="products-container">
        {
          // todo: burada her bir ürün için ürün kartı oluştur
          productList.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button>+ Sepete Ekle</button>
            </div>
          ))
        }
      </div>
    </div>
  );
};
