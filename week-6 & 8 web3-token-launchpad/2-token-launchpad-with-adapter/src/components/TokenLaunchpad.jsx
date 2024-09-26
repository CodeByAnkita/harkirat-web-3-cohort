
export function TokenLaunchpad() {

    function createToken() {
        const name = document.getElementById("name").value;
        const symbol = document.getElementById("symbol").value;
        const imageUrl = document.getElementById("imageUrl").value;
        const initialSupply = document.getElementById("initialSupply").value;
    
        console.log({
            name,
            symbol,
            imageUrl,
            initialSupply
        })
    }
    return  <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>Solana Token Launchpad</h1>
        <input id="name" className='inputText' type='text' placeholder='Name'></input> <br />
        <input id="symbol" className='inputText' type='text' placeholder='Symbol'></input> <br />
        <input id="imageUrl" className='inputText' type='text' placeholder='Image URL'></input> <br />
        <input id="initialSupply" className='inputText' type='text' placeholder='Initial Supply'></input> <br />
        <button onclick={createToken}  className='btn'>Create a token</button>
    </div>
}