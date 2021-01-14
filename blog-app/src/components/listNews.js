import React from 'react'

function listNews({ news }) {
    return (
        <div>
            {news && news.length === 0 && <h1>There is no News</h1>}
            {news && news.map(item => (
                <div className="card" style={{ width: '38rem'}}>
                    <h5 className="card-title">{item.title}</h5>
                    <img src={item.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default listNews
