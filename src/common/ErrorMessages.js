
export default function ErrorMessages({errors}) {
  return (
    <div style={{'marginLeft': '3.5rem'}}>
    {errors.map(error => <p style={{'color': 'red', 'margin': '0.2rem', 'fontSize': '0.8rem'}}>{error}</p>)}
    </div>
  )
}
