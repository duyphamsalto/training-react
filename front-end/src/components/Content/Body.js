import './Body.css';

export default function Body() {
  const item = (
    <div className="item">
      <img src={"./images/card-image.png"} className="box-image" alt="16:9の画像" />
      <h3 className="card-title">Card Title</h3>
      <p className="context">
        This is a longer card with supporting text below as a natural lead-in to
        additional content.
      </p>
    </div>
  );

  let items = [];
  const t = 12;
  for (let i = 0; i < t; i++) {
    items.push(item);
  }

  return <div className="items">{items}</div>;
}

