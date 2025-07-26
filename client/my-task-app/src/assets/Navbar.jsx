import { Link } from 'react-router-dom';

export default function Navbar(){
return(

 <div className="navbar bg-base-100 shadow-sm">

  <div className="flex-1">
    <p className="btn btn-ghost text-xl">daisyUI </p>
  </div>

  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Dashboard</Link></li>
       <li><Link to='/createTask'>CreateTask</Link></li>
     </ul>
  </div>
  
</div>

);
}