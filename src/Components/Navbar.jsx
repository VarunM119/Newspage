import './navbar.css'
export default function Navbar({setCategory}) {
    return (
        <nav class="navbar navbar-expand-xl navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">India Today</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse show" id="navbarDark">
      <ul class="navbar-nav me-auto mb-2 mb-xl-0">
        
        <li class="nav-item">
          <div class="nav-link" onClick={() => setCategory("business")}>Business</div>
        </li>
        
        <li class="nav-item">
          <div class="nav-link" onClick={() => setCategory("health")}>Health</div>
        </li>
        
        <li class="nav-item">
          <div class="nav-link" onClick={() => setCategory("science")}>Science</div>
        </li>
        
        <li class="nav-item">
          <div class="nav-link" onClick={() => setCategory("technology")}>Technology</div>
        </li>
        
        <li class="nav-item">
          <div class="nav-link" onClick={() => setCategory("sports")}>Sports</div>
        </li>
        
        <li class="nav-item">
          <div class="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</div>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

    )
}

