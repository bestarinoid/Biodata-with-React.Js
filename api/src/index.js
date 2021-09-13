import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class MyHeader extends React.Component {
  render() {
    return (
      <div>
      <section>
  <div className="skewed"></div>
</section>

<div className="biodiv">
<div className="font">
<img className="biopic" src="pic_bio1.png" alt="me"></img>
<h2> Aysin </h2>
</div>
<div className="font2">
<p><b>Age: </b>19<br/>
<b>Birthdate: </b>29 June 2002<br/>
<b>Birthplace: </b>Pekanbaru, Riau<br/>
<b>Major: </b>Business Information System<br/>
<b>Email: </b>1002058460@ucsiuniversity.edu.my</p>
</div>
</div>
      </div>
    );
  }
}

ReactDOM.render(<MyHeader />, document.getElementById('root'));