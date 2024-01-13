import "./ProductItem.css";

function ProductItem({ item }) {
  return (
    <>
      <div className="card" style={{ width: "288px" }}>
        <img src={item.img.thumb} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.desc}</p>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
