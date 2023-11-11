function Header() {
   return <nav className="light-blue lighten-2">
      <div className="nav-wrapper">
         <a href="/" className="brand-logo">React Shops</a>
         <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="https://github.com/ILFIR803/react-shop">Repo</a></li>
         </ul>
      </div>
   </nav>
}

export { Header };