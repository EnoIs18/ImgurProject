import styles from "./styles.module.css";
const ThumbnailDetails = ({ details }) => {
  return (
    <>
      {details.link.includes("mp4") && (
        <div className={styles.detailsInfo}>
          <video
            className={styles.fit}
            width="100%"
            height="100%"
            controls
            autoPlay
            muted
            loop
          >
            <source src={details.link} type="video/mp4" />
          </video>
          {!details.description ? null : <p>{details.description}</p>}
        </div>
      )}
      {details.link.includes("jpg") && (
        <div className={styles.detailsInfo}>
          {" "}
          <img src={details.link} width="100%" height="100%" />
          {!details.description ? null : <p>{details.description}</p>}{" "}
        </div>
      )}
    </>
  );
};

export default ThumbnailDetails;
