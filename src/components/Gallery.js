/* eslint-disable no-unused-vars */
import React, { useEffect, useState  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchImages } from "../store/gallerySlice";
import GroupImages from "./GalleryImage";
import styles from "./styles.module.css";
import Mansory from "react-masonry-css";
import Select from "react-select";
import "react-toggle/style.css"; // for ES6 modules
import Toggle from "react-toggle";
import FadeLoader  from "react-spinners/FadeLoader";
// eslint-disable-next-line no-unused-vars
const Gallery = () => {
  // eslint-disable-next-line no-unused-vars

   {/* use state param to sent its values in the url endpoint in order to make filter work*/} 
   const [param, setParam] = useState({
    section: "hot",
    showViral: true,
    window: "day",
    sortFilter: "viral",
  });
  const[showDisplay,setShowDisplay] = useState(false)


  const dispatch = useDispatch();
  const galleryImages = useSelector((state) => state.images);


  useEffect(() => {
     dispatch(fetchImages(param));
  }, [param]);

const handleDisplayFilterChange = ()=>{
  setShowDisplay(!showDisplay)
}

 {/* breakpoints are used for css grid in the mansory component*/} 
  const breakpoints = {
    default: 4,
    1100: 2,
    800: 1,
  };
  //options for sort dropdown
  const optionsForSort = [
    { value: "viral", label: "viral" },
    { value: "top", label: "top" },
    { value: "time", label: "time" },
    { value: "rising", label: "rising" },
  ];
  //options for section dropdown
  const optionsForWindow = [
    { value: "day ", label: "Day" },
    { value: "week", label: "Week" },
    { value: "month", label: "Month" },
    { value: "year", label: "Year" },
    { value: "all", label: "All" },
  ];
  //options for section dropdown
  const optionsForSections = [
    { value: "hot", label: "Hot" },
    { value: "top", label: "Top" },
    { value: "user", label: "User" },
  ];
  // used for styling select component
  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "blue",
        primary: "blue",
      },
    };
  };
   {/* used for styling select component*/} 
  const customStyles = {
    control: base => ({
      ...base,
      height: 35,
      minHeight: 35,
      width:"100%",
      marginTop:'1rem',
    })
  };
  //function for changing section value
  const handleSectionChange = (value) => {
    setParam({
      ...param,
      section: value.value,
    });
  };

  //function for changeing toggle value
  const handleShowViralChange = () => {
    setParam({
      ...param,
      showViral: !param.showViral,
    });
  };

  //function to change sort value
  const handleSortChange = async (value) => {
    await setParam({
      ...param,
      sortFilter: value.value,
    });
  };

  //function for changing window value
  const handleWindowChange = (value) => {
    setParam({
      ...param,
      window: value.value,
    });
  };
 {/* used for stying spinner component*/} 
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  
  return (
    <div className={styles.gallery}>
     {/* span that has as a function to show or hide image filter*/} 
        {showDisplay? <span  className={styles.gallerySpan} onClick={handleDisplayFilterChange}>Hide Image filters</span> : <span className={styles.gallerySpan} onClick={handleDisplayFilterChange}> Show Image filters</span> }

         {/* toggle component used for to show viral images or not*/} 
    <div  className={showDisplay ? styles.galleryFilterGrid : styles.galleryFilterNone }>
      <Toggle   onChange={handleShowViralChange} defaultChecked={param.showViral} />
      {param.showViral ? (
        <label  htmlFor="viral-status" style={{ color: "white",display:'block' }}>
          Hide viral
        </label>
      ) : (
        <label htmlFor="viral-status" style={{ color: "white",display:'block' }}>
          Show viral
        </label>
      )}
 {/* selet component to change sections in the filter*/} c
      <Select
        options={optionsForSections}
        theme={customTheme}
        className="section"
        placeholder="select section"
        isSearchable
        autoFocus
        onChange={handleSectionChange}
        defaultValue={{ value: param.section, label: param.section }}
        styles={customStyles}

      />
      {

        // user 
        
        <Select
        isDisabled={param.section == 'user' ? false : true}
          options={optionsForSort}
          theme={customTheme}
          className="sort"
          placeholder="select sort"
          isSearchable
          autoFocus
          defaultValue={{ value: "viral", label: "viral" }}
          onChange={handleSortChange}
          styles={customStyles}
        />
      }
      {
        // top
        <Select
        isDisabled={param.section == 'top' ? false : true}
          options={optionsForWindow}
          theme={customTheme}
          className="window"
          placeholder="select window"
          isSearchable
          autoFocus
          defaultValue={{ value: "day", label: "Day" }}
          onChange={handleWindowChange}
          styles={customStyles}

        />
      }
      </div>

      {galleryImages.loading &&  <FadeLoader  color="#ffffff" loading={galleryImages.loading} cssOverride={override} size={150} />}
      {!galleryImages.loading && galleryImages.error ? (
        <div>{galleryImages.error}</div>
      ) : null}

      <Mansory
        breakpointCols={breakpoints}
        className={styles.mansoryGrid}
        columnClassName={styles.mansoryColumn}
      >
        {!galleryImages.loading &&
          galleryImages.images.data && galleryImages.images.data.length &&
          galleryImages.images.data.map((element) => (
            <GroupImages key={element.id} data={element} />
          ))}
      </Mansory>
    </div>
  );
};

export default Gallery;
