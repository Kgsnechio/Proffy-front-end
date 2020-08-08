import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/60004575?s=460&u=bc7b69a679f10f23f531551c4c68bbf0be9203f0&v=4" alt="André Nechio"/>
                <div>
                    <strong>
                        André Nechio
                    </strong>
                    <span>
                        Programação e Matemática
                    </span>
                </div>
            </header>

            <p>
                Especialista em lógica de programação e Matemática
                <br /><br />
                Exelentes aulas para melhorar seu desempenho em elaborar algoritimos, com explicações dinamicas e divertidas. Almente seu nível de programação!
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>
                        R$ 80,00
                    </strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem