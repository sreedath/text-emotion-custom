import React,{useState} from 'react'
import Sidebar from '../../../components/emotion-detection/Sidebar'

export default function About() {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3 ">
                    <Sidebar/>
                </div>
                <div className="col-sm-9">
                    <div style = {{textAlign:'center'}}>
                        <h1 className="heading" style={{textAlign:'center',background:'radial-gradient(circle at 10% 20%, rgb(255, 12, 253) 0%, rgb(255, 241, 0) 80%)', WebkitBackgroundClip: 'text', color: 'transparent',fontFamily:'Helvetica Neue',display:'inline'}}>AI Social Media Content Moderator</h1>
                    </div>
                    <div style={{textAlign:'justify',fontFamily:'Helvetica Neue',marginTop:'10px'}}>
                        <p>Hello there! Have you ever wondered how computers can understand our feelings, just by reading what we write? It's like magic, but it's actually a cool thing called "<b>Emotion Recognition using Text</b>"!</p>
                        <p>Imagine you're texting your friend about your day. You might say, "I had so much fun at the park!" or "I felt a bit sad because it rained during our picnic." Well, computers can read these messages and figure out if you're happy, sad, or maybe even excited!</p>   
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6" style={{textAlign:'justify',fontFamily:'Helvetica Neue'}}>
                                <h1 className="heading" style={{textAlign:'left',marginTop:'20px',background:'radial-gradient(circle at 10% 20%, rgb(255, 12, 253) 0%, rgb(255, 241, 0) 80%)', WebkitBackgroundClip: 'text', color: 'transparent',fontFamily:'Helvetica Neue'}}>How Computer See: </h1>
                                <p><b style={{marginTop:'10px',background:'radial-gradient(circle at 10% 20%, rgb(255, 12, 253) 0%, rgb(255, 241, 0) 80%)', WebkitBackgroundClip: 'text', color: 'transparent',fontFamily:'Helvetica Neue'}}>Words have Feelings: </b> Just like people, words can express different emotions. For example, "happy," "joyful," and "excited" all show positive feelings, while "sad," "disappointed," and "lonely" express sadness.</p>
                                <p><b style={{marginTop:'10px',background:'radial-gradient(circle at 10% 20%, rgb(255, 12, 253) 0%, rgb(255, 241, 0) 80%)', WebkitBackgroundClip: 'text', color: 'transparent',fontFamily:'Helvetica Neue'}}>Detecting Emotions: </b> Computers are super smart at understanding patterns. Scientists and computer experts have taught computers to recognize these emotional patterns in the words we use. So, when you type, the computer can guess how you're feeling!</p>
                                <p><b style={{marginTop:'10px',background:'radial-gradient(circle at 10% 20%, rgb(255, 12, 253) 0%, rgb(255, 241, 0) 80%)', WebkitBackgroundClip: 'text', color: 'transparent',fontFamily:'Helvetica Neue'}}>Emoji Friends:</b> You know those cute emojis you use in your messages? They are like little helpers for computers. Emojis can give extra clues about emotions. 😃 means happy, 😢 means sad, and there are emojis for all sorts of feelings!</p>
                                <p><b style={{marginTop:'10px',background:'radial-gradient(circle at 10% 20%, rgb(255, 12, 253) 0%, rgb(255, 241, 0) 80%)', WebkitBackgroundClip: 'text', color: 'transparent',fontFamily:'Helvetica Neue'}}>Helping Us:</b> Emotion recognition can be useful! For example, it helps to analyze customer reviews in business, monitoring patient feedback tn healthcare services, tweets in social media platform..</p>
                            </div>
                            <div className="col-lg-6">
                                <img src="/images/img_emotion1.png" style={{width:'450px'}} alt="" srcSet=""/>
                            </div>
                            <div style={{textAlign:'justify',fontFamily:'Helvetica Neue'}}>
                                <p style={{textAlign:'justify'}}>So, the next time you send a message or write a story, remember that computers can understand your emotions too! It's like having a friend who can read between the lines and know exactly how you feel.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
