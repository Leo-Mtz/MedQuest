import "../styles/styles.css";


export default function Navbar() {
   return (
      <nav className="nav">
         <a href="/" className="site-title">MedQuest</a>
         <ul className="nav-list">
            <li>
               <a href="/quizzes" className="nav-item">Quizzes</a>
            </li>
            <li>
               <a href="/about" className="nav-item">About</a>
            </li>
         </ul>
      </nav>
   );
}