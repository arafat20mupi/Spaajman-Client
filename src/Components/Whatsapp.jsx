
const Whatsapp = () => {
  return (
    <div>
      <div className="wh-api">
        <div className="wh-fixed whatsapp-pulse">
          {/* <a href="https://api.whatsapp.com/send?phone=0000000000000&text=hello world"> */}
          <button onClick={() => window.open('https://wa.me/+971522002611', '_blank')} className="wh-ap-btn"></button>
        </div>
      </div>
    </div>
  )
}

export default Whatsapp
