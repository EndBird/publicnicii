import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';




class NavBar extends React.Component {

  render() {

    return (<div className = "Side">
      <nav className="NotifyingBar">
      <div>
        <button>UofT</button>
        </div>
        <div>
         <button>UofT</button>
         </div>
         <div>
          <button>UofT</button></div>
          <div>
           <button>UofT</button></div>
      </nav>
    </div>)
  }
}

class FilterBar extends React.Component {
  render() {

    return (<nav>
      <div className = "filterByServer"> SERVER = 
      <form>
<select id="filterServer">
<option value="">UofT</option>
<option value="">CIV VI</option>
<option value="">SJW Rants</option>
<option value="">The Economy</option>
<option value="">Fried Foods</option>
</select>
</form>
</div>
     <div className = "filterByDisplayBy"> DISPLAY BY = 
      <form>
<select id="filterServer">
<option value="">UofT</option>
<option value="">CIV VI</option>
<option value="">SJW Rants</option>
<option value="">The Economy</option>
<option value="">Fried Foods</option>
</select>
</form>
</div>
     <div className = "filterByRoles"> APPLY ROLES = 
      <form>
<select id="filterServer">
<option value="">UofT</option>
<option value="">CIV VI</option>
<option value="">SJW Rants</option>
<option value="">The Economy</option>
<option value="">Fried Foods</option>
</select>
</form>
</div>
     <div className = "filterBy2ndRoles"> APPLY 2ND ROLE = 
      <form>
<select id="filterServer">
<option value="">UofT</option>
<option value="">CIV VI</option>
<option value="">SJW Rants</option>
<option value="">The Economy</option>
<option value="">Fried Foods</option>
</select>
</form>
</div>
     <div className = "filterByKeywords"> APPLY KEYWORDS = 
      <form>
<select id="filterServer">
<option value="">UofT</option>
<option value="">CIV VI</option>
<option value="">SJW Rants</option>
<option value="">The Economy</option>
<option value="">Fried Foods</option>
</select>
</form>
</div>
     <div className = "filterByCategories"> APPLY CATEGORIES = 
      <form>
<select id="filterServer">
<option value="">UofT</option>
<option value="">CIV VI</option>
<option value="">SJW Rants</option>
<option value="">The Economy</option>
<option value="">Fried Foods</option>
</select>
</form>
</div>
     <div className = "filterByFilterOut"> FILTER OUT = 
      <form>
<select id="filterServer">
<option value="">UofT</option>
<option value="">CIV VI</option>
<option value="">SJW Rants</option>
<option value="">The Economy</option>
<option value="">Fried Foods</option>
</select>
</form>
</div>
    </nav>)
  }
}

class UserProfile_Post extends React.Component {
  constructor() {
    super()

  }
  getProfile() {
    document.getElementById('ProfileSection').style.display = "inline-block";
    document.getElementById('Server').style.width = "50%";
    
  }
  
  render() {
    return (
    <p id="UserProfile_Post">
      <button onClick={this.getProfile}><h1>@Minh</h1></button> <span>UTSC</span><span>COMPUTER SCIENCE</span>
    </p>)
  }
}

class ReplySection_Post extends React.Component {

  constructor() {
    super()
    this.messages = [{user:"@Negin", msg: "Im gonna watch Maison Ikoku"}, {user: "@Kikyo", msg: "True"}]

  }
  render() {
    const replies = this.messages.map((message) => {
          return (
        <span className = "Message">{message.user}:&nbsp;{message.msg} </span>

      )

    }) 
    return (<div className="Replies">
      {replies}
    </div>)
  
  }
}

class Post extends React.Component {

  constructor() {
    super()
    this.placeholder = "reply to @Minh"
  }
  render() {
    return (
    <div className="Post">
      <UserProfile_Post/>
      <p id="Message">To be, or not to be, that is the question:
Whether 'tis nobler in the mind to suffer
The slings and arrows of outrageous fortune,
Or to take Arms against a Sea of troubles,
And by opposing end them: to die, to sleep;
No more; and by a sleep, to say we end
The heart-ache, and the thousand natural shocks
That Flesh is heir to? 'Tis a consummation
Devoutly to be wished. To die, to sleep,
perchance to Dream; aye, there's the rub,
For in that sleep of death, what dreams may come,
When we have shuffled off this mortal coil,
Must give us pause. There's the respect
That makes Calamity of so long life:</p>
<form>
<input id="reply" size="20" placeholder = {this.placeholder}></input><input id="Send" type="submit" value="Submit"></input>
</form>
<ReplySection_Post/>
    </div>)
  }
}
class Server extends React.Component {
   constructor() {
    super()
    



   }

   render() {

    //const featuresBar = () => {return ()}
    return (<div id="Server"> 
     <FilterBar/>
     <Post/>
     <Post/>

      </div>
      )
  }

}

class UserProfile extends React.Component {

  render() {
    return (
      <div id="ProfileSection"><table className="UserProfile">
    <tbody>
    <tr className="Descriptors">
    <th>User-Info</th>
    </tr>
    <tr className="UserInfo">
      <td><img src="https://www.happycow.net/blog/wp-content/uploads/2012/05/Earth.jpg" className="UserImg"></img>=<h3 className="Username">@Minh</h3></td>
    </tr>
     <tr className="Descriptors">
    <th>Roles</th>   
    </tr>
    <tr className="RolesInfo">
    <td><div className="roleInfo">r/Masterchief</div><div className="roleInfo">r/SAO</div><div className="roleInfo">r/cs</div></td>   
    </tr>
     <tr className="Descriptors">
    <th>Ranks</th>
    </tr>
    <tr className="RanksInfo">
    <td><ul className="Ranks">
      <li>r/Masterchief = [rank = 1] = [200 XP]</li>
      <li>r/SAO  = [rank = 1] = [200 XP]</li>
      
         </ul>
    </td>
    </tr>
    </tbody>

    </table></div>
    
    )
  }
}
class FeatureBar extends React.Component {
  render() {
    //const featuresBar = () => {return ()}
    return (<nav>
      <button className="Features">[Explore Categories]</button>
      <button className="Features">Create Servers</button>
      <button className="Features">Create Posts</button>
      <button className="Features">Use Anon Mode</button>
      <button className="Features">Gain/Exchange XP</button>
      <button className="Features">Buy/Sell Seeds</button>
      <button className="Features">Advanced Search</button>
    </nav>
      )
  }
}



class Login extends React.Component {

  render() { return (
    )
  }
}

class Header extends React.Component {

  render() { 
    return (
    <div id="Header">Nicii - SERVERS FOR UNIVERSITY STUDENTS AND GAMERS</div>

    )
  }
}
class App extends React.Component {

  render() {
   

    return (
      <div className="App">
       <Header/>
       
      
       <FeatureBar/>
       <NavBar/>
       <Server/>
       <UserProfile/>
      </div>
    );
}
}


export default App;
