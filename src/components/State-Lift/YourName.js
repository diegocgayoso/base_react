export default function YourName({setNome}) {
    // StateLift
    
    return (
        <div>
            <p>Digite o seu nome</p>
            <input 
                type="text" 
                placeholder="Qual é o seu nome?"
                onChange={(e) => setNome(e.target.value)}
            />
        </div>
    )
}