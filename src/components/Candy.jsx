import React, {useState} from 'react';

function Candy () {

    let initialCandies = ["snicker", "skittles", "twix", "milky way"];
    const [candyList, setCandyList] = useState(initialCandies);
    const [counter, setCounter] = useState(0);

    const handleCandy = (candy) => {
       setCandyList(candyList.filter(el => el !== candy)) 
    }  

    console.log("counter", counter, typeof counter);

    return (
        <div className="container">
            <div className="candy-content">
                {/* <div>
                    Count is : {counter}
                    <button onClick={() => setCounter(0)}>Reset</button>
                    {console.log("count reset", counter)}
                    <button onClick={() => setCounter(count => count + 1)}>+ (Increment)</button>
                    {console.log("count increment", counter)}
                    <button onClick={() => setCounter(count => count - 1)}>- (Decrement)</button>
                    {console.log("count decreement", counter)}
                </div> */}
                <p className="heading">Candy Dispenser</p>
                <p className="title">Available Candy</p>
                <div>
                    <ul>
                        {
                            candyList.length === 0 ? (
                                <li>
                                    <button className="candy-btn" onClick={() => setCandyList(initialCandies)}>Refill</button>
                                </li>
                            )  :
                            candyList.map((el, i) => {
                                return (
                                    <div key={i}>
                                        <li>
                                            <button className="candy-btn" onClick={() => handleCandy(el)}>grab</button>{el}
                                        </li>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Candy;