import './App.css';
import { contentdata } from "./data"

function App() {
  return (
    <div class="fulldiv">

      {contentdata.details.map((res) => {
        
        return <div class="maindiv">
          <div class="heading">
            <Heading header={res.topic} cost={res.cost} />
          </div>
          <hr />
          <div class="contentsdiv">
            <ul>
               {res.user.symbol=="T" ?<li> <i class="fa fa-check icon " aria-hidden="true"></i> {res.user.data}</li>:<li class="disabled"><i class="fa fa-times icon disabled" aria-hidden="true"></i> {res.user.data}</li>}
               {res.storage.symbol=="T" ?<li> <i class="fa fa-check icon " aria-hidden="true"></i> {res.storage.data}</li>:<li class="disabled"><i class="fa fa-times icon disabled" aria-hidden="true"></i> {res.storage.data}</li>}
               {res.public_projects.symbol=="T" ?<li> <i class="fa fa-check icon " aria-hidden="true"> </i>{res.public_projects.data}</li>:<li class="disabled"><i class="fa fa-times icon disabled" aria-hidden="true"> </i>{res.public_projects.data}</li>}
               {res.access.symbol=="T" ?<li> <i class="fa fa-check icon " aria-hidden="true"></i> {res.access.data}</li>:<li class="disabled"><i class="fa fa-times icon disabled" aria-hidden="true"> </i>{res.access.data}</li>}
               {res.private_projects.symbol=="T" ?<li> <i class="fa fa-check icon " aria-hidden="true"></i> {res.private_projects.data}</li>:<li class="disabled"><i class="fa fa-times icon disabled" aria-hidden="true"></i> {res.user.data}</li>}
               {res.support.symbol=="T" ?<li> <i class="fa fa-check icon " aria-hidden="true"> </i>{res.support.data}</li>:<li class="disabled"><i class="fa fa-times icon disabled" aria-hidden="true"></i> {res.support.data}</li>}
               {res.domain.symbol=="T" ?<li> <i class="fa fa-check icon " aria-hidden="true"></i> {res.domain.data}</li>:<li class="disabled"><i class="fa fa-times icon disabled" aria-hidden="true"></i> {res.domain.data}</li>}
               {res.reports.symbol=="T" ?<li> <i class="fa fa-check icon " aria-hidden="true"></i> {res.reports.data}</li>:<li class="disabled"><i class="fa fa-times icon disabled" aria-hidden="true"></i> {res.reports.data}</li>}

              {/* <li> {res.storage.symbol=="T" ? <i class="fa fa-check icon" aria-hidden="true"></i>:<i class="fa fa-times icon disabled" aria-hidden="true"></i>}{res.storage.data}</li> */}
              {/* <li> {res.public_projects.symbol=="T" ? <i class="fa fa-check icon" aria-hidden="true"></i>:<i class="fa fa-times icon disabled" aria-hidden="true"></i>}{res.public_projects.data}</li>
              <li> {res.access.symbol=="T" ? <i class="fa fa-check icon" aria-hidden="true"></i>:<i class="fa fa-times icon disabled" aria-hidden="true"></i>}{res.access.data}</li>
              <li> {res.private_projects.symbol=="T" ? <i class="fa fa-check icon" aria-hidden="true"></i>:<i class="fa fa-times icon disabled" aria-hidden="true"></i>}{res.private_projects.data}</li>
              <li> {res.support.symbol=="T" ? <i class="fa fa-check icon" aria-hidden="true"></i>:<i class="fa fa-times icon disabled" aria-hidden="true"></i>}{res.support.data}</li>
              <li>{res.domain.symbol=="T" ? <i class="fa fa-check icon" aria-hidden="true"></i>:<i class="fa fa-times icon disabled" aria-hidden="true"></i>}{res .domain.data}</li>
              <li>{res.reports.symbol=="T" ? <i class="fa fa-check icon" aria-hidden="true"></i>:<i class="fa fa-times icon disabled" aria-hidden="true"></i>}{res .reports.data}</li> */}
            </ul>
          </div>

          <div class="buttons">
            <button  class="buttonclass" type="button">BUTTON</button>
          </div>
        </div>
      })}

    </div >
  );

}

const Heading = (props) => {
  return (
    <div>
      <h3>{props.header}</h3>
      <p> <b class="boldtext">${props.cost}</b>/month</p>
    </div>
  );
}


export default App;
