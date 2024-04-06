import { useEffect, useState } from "react";

function App(){
    const [loading, setLoading] = useState(true);
    const [conis, setCoins] = useState([]);
    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response)=>response.json())
        //.then((json) => console.log(json));
        .then((json) => {
            setCoins(json)
            setLoading(false);
        });
    }, []);
    return (
        <div>
            <h1>The Coins{loading ? "" : `(${conis.length})`}</h1>
            {
                loading ? <strong>Loading..</strong> : 
                (<ul>
                    {conis.map((coin) => 
                        (<li key={coin.id}> 
                            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
                        </li>))
                    }
                    </ul>)
            }

            
        </div>
    )
}
 
export default App;