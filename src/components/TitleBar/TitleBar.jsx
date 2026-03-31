import lightmodeSearchIcon from "../../assets/search-light-icon.svg"

function TitleBar() {
    return (
      <div className="titleBar">
           <h1 className="webTitle">Where in the World?</h1>
           <div className="webPreference">
             <img src={lightmodeSearchIcon} alt="dark mode moon icon" />
             <button className="webPreferenceButtonToggle" alt="dark mode">Dark Mode</button>
           </div>
         </div>
    )
}

export default TitleBar