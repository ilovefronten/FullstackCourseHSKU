/* Type: success/error */
const Notification = ({ type, message }) => {


  if (message === '' || type === '') {
    return 
  }

  const successStyle = {
    border: 'green 5px solid',
    fontSize: 20,
    background: 'lightgray',
    margin: 15,
    padding: 20,
  }

  const errorStyle = {
    border: 'red 5px solid',
    fontSize: 20,
    background: 'lightgray',
    margin: 15,
    padding: 20
  }

  const messageType = type === 'success' ? successStyle : errorStyle


  return (
    <>
      <div style={messageType}>{message}</div>
    </>
  )


}

export default Notification