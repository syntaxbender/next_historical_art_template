import React from 'react'
import style from "./subscribe.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { emailState, isAgreedState, messageState, setAgree, setEmail, setMessage } from './subscribeSlice';
import { saveEmail } from "./actions"
import { IoMdPaperPlane } from "react-icons/io";

import CustomCheckbox from "../customCheckbox/customCheckbox";
const Subscribe = () => {
  const message = useSelector(messageState);
  const email = useSelector(emailState);
  const isAgreed = useSelector(isAgreedState);
  const dispatch = useDispatch();
  const handleMessage = (message) => {
    dispatch(setMessage(message));
  }
  const handleEmail = (email) => {
    dispatch(setEmail(email));
  }
  const handleAgree = () => {
    dispatch(setAgree(!isAgreed));
  }
  async function handleSubmit() {
    if (!isAgreed) return;

    try {
      const response = await saveEmail(email);
      handleMessage(response.message);
    } catch (error) {
      handleMessage('Unknown error occurred. Please try again later.');
    }
  }
  return (
    <div className={style.subscribe}>
      <form>
        <div className={style.submitGroup}>
          <input
            className={style.prettyInput}
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            required
            onChange={(e) => handleEmail(e.target.value)}
          />
          <button className={style.prettyButton} type="button" onClick={handleSubmit}><IoMdPaperPlane/>Subscribe</button>
        </div>
        <label className={style.label}>
          <CustomCheckbox 
              type="checkbox"
              checked={isAgreed}
              onChange={handleAgree} />
            I agree to the Privacy Policy
          </label> 
      </form>
      {message && <p className={style.message}>{message}</p>}
    </div>

  )
}

export default Subscribe