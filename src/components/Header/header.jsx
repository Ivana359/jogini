export const Header = (props) => {

    return (
        
       <div className = "app site-title">
        <h1>{props.title}</h1>
        
        <nav>
          <a href="#">domů</a>
          <a href="#">lekce</a>
          <a href="#">náš tým</a>
          <a href="#">události</a>
          <a href="#">kontakt</a>
        </nav>
       
      </div>
     
    )
}