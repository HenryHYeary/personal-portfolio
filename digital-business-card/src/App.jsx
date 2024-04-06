import './App.css'

function App() {

  return (
    <div id="main-component">
       <img src="../public/profile-photo.jpg" alt="Profile Photo" id="profile-photo"/>
       <h1 id="name-header">Henry Yeary</h1>
       <h3 id='job-header'>Frontend Developer</h3>
       <h5 id="website">henryyeary.website</h5>
       <div id='block-container'>
          <div className="block" id="email-block">
            <h2><a className="block-text" id="email" href='mailto:henmofb@gmail.com'>Email</a></h2>
          </div>
          <div className="block" id="linkedin-block">
            <h2><a className='block-text' id="linkedin" href='https://www.linkedin.com/in/henry-yeary-9b0901182/'>LinkedIn</a></h2>
          </div>
       </div>
    </div>
  )
}

export default App
