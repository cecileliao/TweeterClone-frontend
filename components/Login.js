import styles from '../styles/login.module.css';

import Signup from './Signup';
import Signin from './Signin';

import Modal from 'react-modal';
import React from 'react';
import {useState} from 'react'



function Login() {

  //-------------
  // SignupModal
  //-------------
  const [modalIsOpen, setIsOpen] = useState(false);
  const signupModalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      padding: '0px',
      margin: '0px',
      borderRadius: '10%',
      transform: 'translate(-50%, -50%)',
    },
  };
  function openModal() {
      setIsOpen(true);
  }
  function afterOpenModal() {
      // references are now sync'd and can be accessed.
      //subtitle.style.color = '#f00';
  }
  function closeModal() {
      setIsOpen(false);
  }
  //------------

  //-------------
  // SigninModal
  //-------------
  const [modalSigninIsOpen, setSigninIsOpen] = useState(false);
  const signinModalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      padding: '0px',
      margin: '0px',
      borderRadius: '10%',
      transform: 'translate(-50%, -50%)',
    },
  };
  function openSigninModal() {
      setSigninIsOpen(true);
  }
  function afterSigninOpenModal() {
      // references are now sync'd and can be accessed.
      //subtitle.style.color = '#f00';
  }
  function closeSigninModal() {
      setSigninIsOpen(false);
  }
  //------------

  return (
    <div>
      <main className={styles.main}>

      <Modal
        isOpen={modalSigninIsOpen}
        onAfterOpen={afterSigninOpenModal}
        onRequestClose={closeSigninModal}
        contentLabel="Signin"
        style={signinModalStyle}
      >
        <Signin closeSigninModal={closeSigninModal}/>
      </Modal>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Signup"
        style={signupModalStyle}
      >
        <Signup closeModal={closeModal}/>
      </Modal>

        <div className={styles.contentLeft}>
        </div>

        <div className={styles.content}>
          <img id="logo" src="logo.svg" alt="Logo" title="Hackatweet" />

          <h1 className={styles.title}>
            See what's happening
          </h1>
          <h3>Join Hackatweet today.</h3>
          <button onClick={openModal} className={styles.signupBtn}>Sign up</button>
          <p>Already have account ?</p>
          <button onClick={openSigninModal} className={styles.signinBtn}>Sign in</button>

        </div>
      </main>
      
    </div>
  );
}

export default Login;
