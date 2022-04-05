import { useThemeContext } from "../../contexts/ThemeContext"

const Navbar = () => {
  const { theme, toggleTheme } = useThemeContext()


  return (
    <nav className={`navbar navbar-${theme} bg-${theme}`}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">React Context</span>
      </div>
      <button onClick={toggleTheme}>{theme}</button>

      {/* <button onClick={toggleTheme}>{theme}</button> */}

{/*       {supportedLanguages.map((language) => (
        <button key={language} onClick={() => setLanguage(language)}>{language}</button>
      ))} */}
    </nav>
  )
}

export default Navbar