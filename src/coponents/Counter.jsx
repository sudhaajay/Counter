import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice';


function Counter() {
    //component can access the state by useSelector hook
    const counterValue = useSelector((state) => state.counter.value)
    const [range, setRange] = useState()
    console.log('range=', range);


    //useDispatch() is a hook used to call a method in action to update the state
    const dispatch = useDispatch()
    console.log('counter=', counterValue);

    return (
        <>
            <div className='d-flex align-items-center justify-content-center w-100 flex-column'>
                <h2 style={{ fontSize: '85px', color: 'black' }}>{counterValue}</h2>
                <div className='mt-5'>
                    <button className='btn btn-warning p-2 ms-2' style={{ width: '120px' }} onClick={() => dispatch(decrement(Number(range)))}>DECREMENT</button>
                    <button className='btn btn-success p-2 ms-2' style={{ width: '120px' }} onClick={() => dispatch(increment(Number(range)))}>INCREMENT</button>
                    <button className='btn btn-danger p-2 ms-2' style={{ width: '120px' }} onClick={() => dispatch(reset())}>RESET</button>
                </div>
            </div>
            <div>
                <input className='form-control mt-3 ' style={{ borderColor: "blue", width: '300px' }} type="text" placeholder='enter the range'
                    onChange={(e) => setRange(e.target.value)} />
            </div>
        </>
    )
}

export default Counter