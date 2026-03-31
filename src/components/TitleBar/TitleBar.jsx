import darkmodeIcon from "../../assets/dark-mode-icon-light.svg"

function TitleBar() {
    return (
      <div className="titleBar">
           <h1 className="webTitle">Where in the World?</h1>
           <div className="webPreference">
             <img src={darkmodeIcon} alt="dark mode toggle moon icon" />
             <button className="webPreferenceButtonToggle" alt="dark mode">Dark Mode</button>
           </div>
         </div>
    )
}

export default TitleBar