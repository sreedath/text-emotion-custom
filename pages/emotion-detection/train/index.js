import React,{useState} from 'react'
import Sidebar from '../../../components/emotion-detection/Sidebar'
import {useEmotionContext} from '../../../context/EmotionContext'
export default function Train() {
    const {isTrain,setIsTrain}=useEmotionContext();
    const [alert,setAlert]=useState(null);
    const showAlert = (message,type,i)=>{
        setAlert({
            msg:message,
            type:type
        })
        if(i===0) setIsTrain([isTrain[0],true]);
        else setIsTrain([true,isTrain[1]]);
        setTimeout(()=>{
            setAlert(null);
        },2000);
    };
    const trainModel=(i)=>{
        showAlert("The model has been succeessfully trained.","success",i);
        return;
    }
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3 ">
                    <Sidebar/>
                </div>
                <div className="col-sm-9">
                    {alert && (
                        <div className={`alert alert-${alert.type} `} role="alert">
                            <strong>{alert.type}</strong>: {alert.msg}
                        </div>
                    )}
                    <div style ={{textAlign:'center'}}>
                        <h1 className="heading" style={{textAlign:'center',background:'radial-gradient(circle at 10% 20%, rgb(255, 12, 253) 0%, rgb(255, 241, 0) 80%)', WebkitBackgroundClip:'text',color: 'transparent',fontFamily:'Helvetica Neue',display:'inline'}}>Train-Model</h1>
                    </div>
                    <div className="container" style={{marginTop:'10px'}}>
                        <div className="row">
                            <div className="col-lg-6" style={{fontFamily:'Helvetica Neue',textAlign:'justify',fontSize:'20px'}}>
                                <p>This model is like a child. Whatever you teach it, it will learn. The more you teach it, the better it will learn, and it will tell you as well as it has learned when you ask.</p>
                                <p>If It makes incorrect predictions, train it and teach it what is right. In other words, add new data to the training data.</p>
                            </div>
                            <div className="col-lg-6">
                                <img src="/images/bert.png" style={{width:'400px'}} alt="" srcSet=""/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-6' style={{textAlign:'center',marginTop:'10px'}}>
                                <button className="btn_style" onClick={()=>trainModel(1)}>Train Dataset-1</button>
                            </div>
                            <div className='col-sm-6' style={{textAlign:'center',marginTop:'10px'}}>
                                <button className="btn_style" onClick={()=>trainModel(0)}>Train Dataset-2</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
