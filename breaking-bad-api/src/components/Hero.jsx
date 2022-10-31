import {React} from 'react';

export default function Hero(props) {

  return (
    <div className='hero'>
      <div className='box'>
        <div>Welcome fellow breaking bad fans, This is where you can find all breaking bad characteres and their info. Thanks for visiting.</div>
        <button onClick={props.executeScroll}>See characters ⬇</button>
      </div>
      <div className='box2'>
        <h6>created by. Mohamed Akeel khan</h6>
        <img src="https://akeelwebdev.tech/wp-content/uploads/2022/03/Screenshot_20201222-000921_2.png" alt="" width="200px"/>
      </div>
    </div>
  )
}
