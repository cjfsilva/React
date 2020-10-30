import React from 'react'

export default function Fragmento(props) {
    return (
        //React.Fragment = Quando não queremos envolver a tag jsx em uma div, usamos o fragment,
        //ou use apenas <> </> . Se for usar parametros dentro dele = <id="1">, precisa aplicar o React.Fragment
        <>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </>
    )
}