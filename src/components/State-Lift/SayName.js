export default function SayName({ nome }) {
    function gerarSaudação(algumNome) {
        return `Olá ${algumNome}, tudo bom?`
    }

    return (
        <>
            {nome && <p>{gerarSaudação(nome)}</p>}
        </>)
}