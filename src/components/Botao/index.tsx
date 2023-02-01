import React from "react";
import style from './Botao.module.scss';

interface Iprops {
    children: React.ReactNode
}

class Botao extends React.Component<Iprops> {
    render() {
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;