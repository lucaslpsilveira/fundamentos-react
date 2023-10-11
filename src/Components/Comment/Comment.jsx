import { ThumbsUp, Trash } from 'phosphor-react';
import style from './Comment.module.css';
import { Avatar } from '../Avatar/Avatar';

export function Comment(){
    return (
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://github.com/lucaslpsilveira.png"/>
            <div className={style.commentBox}>
                <div className={style.commentContent}> 
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Nome</strong>
                            <time title="11 de Maio às 8:13" dateTime="2023-05-11 08:13:00">Cerca de 1h atrás</time>
                        </div>                        
                        <button title='Excluir'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito Bom</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20}/> 
                        Aplaudir
                        <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}