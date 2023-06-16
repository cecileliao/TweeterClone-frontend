import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEgg, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { getDisplayName } from 'next/dist/shared/lib/utils';

function Tweet(props) {

  const user= useSelector((state) => state.user.value);
  // const [isLiked, setIsLiked] = useState(props.isLiked);
  // const [tweet, setTweet] = useState<string>(hashtags)
// console.log('isliked', props.tweet, props.isLiked);
  let style = {'color': 'rgb(255, 255, 255, 0.5)'}
  if (props.isLiked) {
    style = { 'color': '#e74c3c' };
  }

  const likeCount = (id) => {
    fetch('https://tweeter-clone-backend.vercel.app/like', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id:id, token: user.token })
    })
    .then(response => response.json())
    .then(data => {
    if (data) {
      props.getAllTweets()
    }
    });
  }


  const deleteTweet = (id) => {
    fetch('https://tweeter-clone-backend.vercel.app/del', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id:id, token: user.token })
    })
    .then(response => response.json())
    .then(data => {
    if (data) {
      props.getAllTweets()
    }
  });

}

  let trash;
  if (props.authorUsername === user.username){
    trash = <FontAwesomeIcon  className={styles.trashIcon} icon={faTrashCan} onClick={() => deleteTweet(props.id)}/>
  }

    const date = new Date(props.date);    
    const now = new Date();
    const timeElapsed = now.getTime() - date.getTime(); // temps écoulé en millisecondes
    const hoursElapsed = timeElapsed / (1000 * 60 * 60) // temps écoulé en heures
    const roundedHoursElapsed = Math.round(hoursElapsed);

// const hashtags = props.tweet.replace(/#(\w+)/g, <a href="">#$1</a>)

return (
    <div className={styles.tweetContainer}>
        <div className={styles.userContainer}>
          <FontAwesomeIcon icon={faEgg} className={styles.avatar}/>
          <div className={styles.nameSection}>
            <p className={styles.firstname}>{props.authorFirstname}</p>
            <p className={styles.username}>@{props.authorUsername} - {roundedHoursElapsed} hour(s)</p>
          </div>
        </div>
        <div className={styles.bottomSection}>
            <div className={styles.tweetSection}>
              {/* <div dangerouslySetInnerHTML={{__html: hashtags}} /> */}
              {props.tweet}
            </div>
            <div className={styles.heartContainer}>
              <FontAwesomeIcon  className={styles.heartIcon} icon={faHeart} style={style} onClick={() => likeCount(props.id)}/> 
              {props.like}
              {trash}
            </div>
        </div>
    </div>
)

}

export default Tweet;