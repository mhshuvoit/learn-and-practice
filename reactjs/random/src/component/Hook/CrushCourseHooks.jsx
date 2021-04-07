import React, { useState, useEffect, Fragment, useContext } from "react";
// import { UserContext } from './userContext'
// useCallback, useMemo is using jno bina karone amder component jno update na ney
const Hook = () => {
    const [count, countName] = useState(100) // primitive data hole valo hoy
    // const [age, countAge] = useState(26)
    // const [post, setPost] = useState({})
    // const { user } = useContext(UserContext)

    useEffect(() => {
        console.log('Count:', count) // asyncronous task
        document.title = "I have grown up"
        return () => {
            console.log("unsubscribe") //componentwillunmount er kaz korbe. event listrner gula k cancel subscrib gula unscbre
        }
    }, [count])//props // if we provide empty array it will work like componentDidMount but kono array na dile componentdidUpdate.

    // dependecis kaz ta korse [count] dependecis er maddhome(getDrivedstateFromProps)

    // useEffect(() => {
    //     console.log('Age:', age)
    //     document.title = 'Age:' + age
    // }, [age])

    // useEffect(() => {
    //     // document.title = "I have grown up"
    //     fetch('http://jsonplaceholder.typicode.com/posts/1')
    //         .then(res => res.json())
    //         .then(data => setPost(data))
    // }, [])

    return (
        <Fragment>
            <div>
            <h1>Count: {count}</h1>
            <button onClick={()=> countName(count + 1)}>Increment</button>
            <button onClick={()=> countName(prev => prev - 1)}>Decrement</button>
            <button onClick={()=> countName(100)}>Reset</button>
            </div>
{/* 
            <div>
                <h1>Age:{age}</h1>
                <button onClick={() => countAge(prev => prev - 1)}>Decrement</button>
                <button onClick={() => countAge(age + 1)}>Increment</button>
            </div> */}
            {/* <div>
                <h3>I am {user.name}</h3>
                <h3>My email is {user.email}</h3>
            </div>

            <hr /> */}

            {/* <div>
                {Object.keys(post).length > 0 && (
                    <>
                        <h3>Title: {post.title}</h3>
                        <p>
                            <strong>Body: {post.body}</strong>
                        </p>
                    </>
                )}
            </div> */}
        </Fragment>
    )
}

export default Hook