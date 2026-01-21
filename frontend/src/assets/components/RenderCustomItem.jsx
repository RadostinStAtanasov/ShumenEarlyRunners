import tShirt1 from "../images/tshirtImages/tshirt1.jpg";
import tShirt2 from "../images/tshirtImages/tshirt2.jpg";
import tShirt3 from "../images/tshirtImages/tshirt3.jpg";
import tSDhirtER from "../images/tshirtImages/tSDhirtER.jpg";

const renderCustomItem = (item) => {
  return (
    <div className="custom-slide">
      <img src={tSDhirtER} alt={item.originalAlt} />
      <img src={tSDhirtER} alt={item.originalAlt} />
      <img src={tSDhirtER} alt={item.originalAlt} />
      <img src={tSDhirtER} alt={item.originalAlt} />
      <div className="custom-caption">{item.description}</div>
    </div>
  );
};

const MyGallery = () => {
  return <ImageGallery items={images} renderItem={renderCustomItem} />;
};
