
const ChildComponent = (props:any) => {
  return (
    <div>
      <button onClick={()=> props.subscribe("child")}>Subscribe</button>
    </div>
  )
}

export default ChildComponent
