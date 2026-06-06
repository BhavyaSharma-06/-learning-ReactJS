import { Bookmark } from 'lucide-react'

function User(props) {
  return (
    <div className="parent">
      <div className="card">

        <div className="top">
        <img
          src={props.logo}
          alt=""
        />

        <Bookmark />
      </div>

      <div className="centre">

        <div className="company">
          <h2>{props.company}</h2>
          <span>{props.posted}</span>
        </div>
        <h1>{props.role}</h1>

        <div className="tag">
          <span>{props.tag1}</span>
          <span>{props.tag2}</span>
        </div>

      </div>

      <div className="bottom">

        <div>
          <h3>{props.stipend}</h3>
          <p>{props.location}</p>
        </div>

        <button>Apply Now</button>

      </div>

    </div>
      </div>
      
  )
}

export default User