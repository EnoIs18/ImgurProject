/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchGalleryImage } from "../store/galleryImageDetailSlice";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import{FaThumbsUp,FaThumbsDown, FaArrowLeft}from "react-icons/fa"
import FadeLoader  from "react-spinners/FadeLoader";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imgDetails = useSelector((state) => state.imageDetail);

  useEffect(() => {
    dispatch(fetchGalleryImage(id));
  }, []);


  // used for the spinner css
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    marginTop:"50%"
  };
  return (
    <>
    <div className={styles.imgStats}>
    <span onClick={() => navigate(-1)}><FaArrowLeft/></span> {/*when clicked redirects in the first page*/}  {/* */} 

     {/* shows  score upvotes and downvotes*/} 
    {imgDetails.images.data &&  imgDetails.images.data.ups ? <p><FaThumbsUp style={{display:"block"}}/>{imgDetails.images.data.ups}</p> : <p>No upvotes information</p>}                     
    {imgDetails.images.data &&   imgDetails.images.data.downs ? <p><FaThumbsDown style={{display:"block"}}/>{imgDetails.images.data.downs}</p> : <p>No downvotes information</p>}              
    {imgDetails.images.data &&   imgDetails.images.data.score ? <p>Scores:<br/>{imgDetails.images.data.score}</p> : <p>No score information</p>}    
    </div>
    <div className={styles.galleryImageDetails}>
  
    
      <div className={styles.imgInfo}>
        {" "}
         {/* loads he spinner or an error  */} 
        {imgDetails.loading && <FadeLoader  color="#ffffff" loading={imgDetails.loading} cssOverride={override} size={150} />}
        {!imgDetails.loading && imgDetails.error ? (
          <div>{imgDetails.error}</div>
        ) : null}

         {/* shows the image or video*/} 
     { imgDetails.images.data && imgDetails.images.data.title && <h1> {imgDetails.images.data.title}</h1>}
        {imgDetails.images.data &&
          imgDetails.images.data.images &&
          imgDetails.images.data.images.map((el) => {
            return <>
            {!el.link.includes('mp4')  && <img     
             src={el.link}  />    }            
            {el.link.includes('mp4')  &&  <video
           
            controls
            autoPlay
            muted
            loop
          >
            <source src={el.link} type="video/mp4" />
          </video>

             }   
             {el.description && <p>{el.description}</p>}
             </>
        
          })}
          {imgDetails.images.data && imgDetails.description?   <p>{imgDetails.images.data.description}</p>:  null  }       
   
      </div>
  
    </div>
    </>
  );
};
export default Details;
