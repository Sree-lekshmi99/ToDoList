import "./style.css"

export default function App(){
  return (
    <>
      <form className="new-item-form">
        <div className="form-now">
          <label htmlFor="item">New Item</label>
          <div><input type = "text" id ="item"/></div>         
        </div>
        <button className="btn"> Add</button>
      </form>
      <h1 className="header">ToDo list</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox"/>
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox"/>
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>

      </ul>
  </>
  )

}