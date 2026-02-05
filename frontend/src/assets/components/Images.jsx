import classes from "../components/Images.module.css";

export default function Images(props) {
  const { data, onClick } = props;

  function handleClickImage(index) {
    onClick(index);
  }

  return (
    <div className={classes.imagesContainer}>
      {data.map((slide, index) => (
        <div
          onClick={() => handleClickImage(index)}
          key={index}
          className={classes.image}
        >
          <img src={slide.src} alt={slide.description} />
        </div>
      ))}
    </div>
  );
}
