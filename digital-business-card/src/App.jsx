import './App.css'

function App() {

  return (
  <>
    <div id="main-component">
       <img src="./profile-photo.jpg" alt="Profile Photo" id="profile-photo"/>
       <h1 id="name-header">Henry Yeary</h1>
       <h3 id='job-header'>Fullstack Developer</h3>
       <h5 id="website">henryyeary.website</h5>
       <div id='block-container'>
          <div className="block" id="email-block">
            <h2><a className="block-text" id="email" href='mailto:henmofb@gmail.com'>Email</a></h2>
          </div>
          <div className="block" id="linkedin-block">
            <h2><a className='block-text' id="linkedin" href='https://www.linkedin.com/in/henry-yeary-9b0901182/'>LinkedIn</a></h2>
          </div>
       </div>
       <div id="description">
          <h2 className='sub-header'>About</h2>
          <p className='paragraph'>I am a fullstack developer with over a thousand hours spent working in frontend and backend JS. I have a passion for learning
          new design patterns, and I have a particular interest in making visually engaging content.</p>
          <h2 className='sub-header'>Interests</h2>
          <p className='paragraph'>Video game aficionado. Avid reader. Enjoyer of all genres of music and film. Rock climber and biker.</p>
       </div>
    </div>
    <div id="socials-bar">
      <a href="https://twitter.com/Henmo501">
        <img src='./twitter-icon.png' alt='twitter-icon'className="icon" id='twitter-icon'/>
      </a>
      <a href="https://github.com/HenryHYeary">
        <img src="./github-icon.png" alt="github-icon" className="icon" id='github-icon' />
      </a>
      <a href="https://www.facebook.com/hyeary/">
        <img src="./facebook-icon.png" alt="facebook-icon" className="icon" id='facebook-icon' />
      </a>
    </div>
  </>
    
  )
}

export default App
