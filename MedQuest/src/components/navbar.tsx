//navbar component

import "../styles/global.css";


export default function Navbar() {
   return (
      <nav className="nav">
         <a href="/" className="site-title">MedQuest</a>
         <ul className="nav-list">
            <li>
               <a href="/quizDashboard" className="nav-item">Quizzes</a>
            </li>
         </ul>
      </nav>
   );
}