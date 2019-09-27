import React, {Component} from 'react';
import data from "../data"

class Main extends Component {
    constructor() {
        super();
        this.state = {
            currentId: 0
        }
    }
    
    clickNext = () => {
      let copy = this.state.currentId +=1
      if(this.state.currentId <= 24){
        this.setState({
          currentId: copy
        }) } else {
          this.setState({
            currentId: 0
          })
        }
      }
    

    clickPrevious = () => {
      let backCopy = this.state.currentId -=1;
      if(this.state.currentId >= 0){
        this.setState({
          currentId: backCopy
        }) } else {
          this.setState({
            currentId: 24
          })
        }
      }
    

    render() {
        console.log(data)
        return (
            <div className="App">
            <header className="App-Header">
              <div className="Header-Content">Home</div>
      
            </header>
            <body>
              <div className="Main-Content">
                <div className="White-Container">
                  <div className="White-Header">
                    <div className="White-Header-Left">𝗡𝗮𝗺𝗲: {data[this.state.currentId].name.first} {data[this.state.currentId].name.last}</div>
                    <div className="White-Header-Right">{`${data[this.state.currentId].id}/25`}</div>
                  </div>
                  <div className="White-Content">
                    <div className="White-Content-Description">𝙁𝙧𝙤𝙢: {data[this.state.currentId].city}, {data[this.state.currentId].country}
                    <br/>𝗝𝗼𝗯 𝗧𝗶𝘁𝗹𝗲: {data[this.state.currentId].title}
                    <br/>
                    𝗘𝗺𝗽𝗹𝗼𝘆𝗲𝗿: {data[this.state.currentId].employer}
                    </div>
                  </div>
                  <div className="White-Bottom">
                  <div className="White-Content-Favorite">𝗙𝗮𝘃𝗼𝗿𝗶𝘁𝗲 𝗠𝗼𝘃𝗶𝗲𝘀: <br/>
                  𝟭. {data[this.state.currentId].favoriteMovies[0]}
                  <br/> 𝟮. {data[this.state.currentId].favoriteMovies[1]}
                  <br/> 𝟯. {data[this.state.currentId].favoriteMovies[2]}
                  </div>
                  </div>
                </div>
                <div className="Bottom-Container">
                  <button className="Bottom-Container-Left"onClick={ () => {this.clickPrevious(this.state.currentId)}}> {`< Previous`} </button>
                  <div className="Bottom-Container-Middle">
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>New</button>
                  </div>
                  <button className="Bottom-Container-Right"onClick={ () => {this.clickNext(this.state.currentId)}}>Next ></button>
                </div>
              </div>
            </body>
          </div>
        );
      
    
        
    }
}






export default Main;