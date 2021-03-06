import React from 'react'
import s from './Message.module.css'

type PropsType = {
    id?: string
    avatar: string
    name: string
    message: string
    time: string
}


const Message = (props: PropsType) => {

    if (props.name === 'Maksim') {
        return (
            <div className={s.displaySent}>
                <div className={s.message} style={{  justifyContent: 'flex-end'}} >                
              
                    <div className={s.description} style={{ borderRadius: '26px 28px 0 26px' }}>
                        <div className={s.nameSent}>{props.name}</div>
                        <div className={s.textSent}>{props.message}</div>
                        <span className={s.timeSent}>{props.time}</span>
                    </div>

                    <div className={s.angleSent} />

                    <img src={props.avatar} alt={'avatar'} />
                </div>
            </div>
        )
    } else {
        return (
            <div className={s.display}>
                <div className={s.message}>
                    <img src={props.avatar} alt={'avatar'} />

                    <div className={s.angle} />

                    <div className={s.description}>
                        <div className={s.name}>{props.name}</div>
                        <div className={s.text}>{props.message}</div>
                        <span className={s.time}>{props.time}</span>
                    </div>
                </div>
            </div>
        )
    }




}


export default Message

