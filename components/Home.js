import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEgg} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tweet from './Tweet';
import Trend from './Trends';
import { useRouter } from 'next/router';
import { logout } from '../reducers/user';
import Link from 'next/link';

function Home() {
  const dispatch = useDispatch();
	let router = useRouter();

  const [message, setMessage] = useState('');
  const user= useSelector((state) => state.user.value);

  const addTweet = () => {
    if (!user.token) {
			return;
		}
      fetch('https://tweeter-clone-backend.vercel.app/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({token: user.token, tweet: message}),
      }).then(response => response.json())
        .then(data => {
          if (data.result) {
            setMessage('')
        // rafraichir les tweets
            getAllTweets()
            getAllTrends()
          }
        });
  }
  
  const [tweetList, setTweetList] = useState('')

  const getAllTweets = () => {

    if (!user.token) {
            return;
        }
    fetch('https://tweeter-clone-backend.vercel.app/')
      .then(response => response.json())
      .then(data => {
      if (data) {
        // console.log(data)
        let tweetList=[];
        for (let i=0; i<data.data.length; i++){
        tweetList.push(data.data[i])
        }
        const newList = tweetList.map((info, i) => {
          console.log(info.tweet, info.isLiked)
          return <Tweet key={info._id} {...info} getAllTweets={getAllTweets}/>;
        })
        setTweetList(newList)
      }
    });
  }

  const [trendList, setTrendList] = useState('')

  const getAllTrends = () => {
    if (!user.token) {
            return;
        }
    fetch('https://tweeter-clone-backend.vercel.app/trends')
      .then(response => response.json())
      .then(data => {
      if (data) {
        let trendList=[];
        for (let i=0; i<data.data.length; i++){
        trendList.push(data.data[i])
        }
        const newList = trendList.map((info, i) => {
          console.log(info.tweet, info.isLiked);
          return <Trend key={i} {...info} />;
        })
        setTrendList(newList)
      }
    });
  }


  useEffect(() => {
    getAllTweets()
    getAllTrends()
    },
  []);

  if(user.token===null) {
    return( <div style={{"text-align": "center"}}>
            <h1>You are  wrong</h1>
            <img src="https://static.lacapsule.academy/avatar/5efc636e023091001ad915a7.jpg" alt="Wrong way" />
            <div>Amin is watching you !</div>
            </div>
          )
  }

  function logoutClic() {
    dispatch(logout())
    router.push('/')
  }

  return (
    <div className={styles.container}>
      <section className={styles.left}>
        <Link href="/"><img id='logo' src="logo.svg" alt="Logo" title="Hackatweet" className={styles.logo}/></Link>
        <div>
          <div className={styles.userContainer}>
            <FontAwesomeIcon icon={faEgg} className={styles.avatar}/>
            <div className={styles.nameContainer}>
              <p className={styles.firstname}>{user.firstname}</p>
              <p className={styles.username}>@{user.username}</p>
            </div>
          </div>
          <div className={styles.logoutContainer}>
            <button className={styles.logoutBtn} onClick={()=> logoutClic()}>Logout</button>
          </div>
        </div>
      </section>
      <main className={styles.main}>
        <header className={styles.header}>
          <h3 className={styles.headerTitle}>Home</h3>
          <textarea 
            type="text" 
            placeholder="What's up?" 
            id="message" 
            onChange={(e) => setMessage(e.target.value)} 
            value={message} 
            className={styles.inputMsg}
            maxLength="280"
            rows={2}
          />
          <div className={styles.section}>
            <div className={styles.bottomContainer}>
              <div className={styles.counter}>{message.length}/280</div>
              <button className={styles.tweetBtn} onClick={addTweet}>Tweet</button>
            </div>
          </div>
        </header>
        <section className={styles.msgContainer}>
          {tweetList}
        </section>
      </main>
      <section className={styles.right}>
        <h3 className={styles.trendTitle}>Trends</h3>
        <div className={styles.trendsContainer}>
          {trendList}
        </div>
      </section>
      
    </div>
  );
}

export default Home;
