import React from 'react'

export default function ComParametro(props) {
    //log para olhar na inspeção de elementos
    console.log(props)
    //condição ternária
    const status = props.nota >= 7? 'Aprovado' : 'Recuperação'
    //Math=arredondar double / Atributos são somente leitura, para manipula-las, crie outra variavel
    const notaInt = Math.ceil(props.nota)

    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno} </strong>
            tem nota  
            <strong> {notaInt} </strong>
            e está
            <strong> {status}</strong>
            </p>
        </div>
    )
}