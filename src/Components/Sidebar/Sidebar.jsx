import { Avatar } from "../Avatar/Avatar";
import styles from "./Sidebar.module.css";
import {PencilLine} from "phosphor-react";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://media.istockphoto.com/id/972557422/pt/foto/digital-portal-binaty-code-information-bit-screen-display-with-keyhole.jpg?s=1024x1024&w=is&k=20&c=-U1YYpHoUJ-aCJvFnhpIriCAi-rqx1H0kfj5Iaaq1-Y="/>
            <div className={styles.profile}>
                <Avatar src="https://github.com/lucaslpsilveira.png"/>
                <strong>Lucas Silveira</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu perfil</a>
            </footer>
        </aside>
    )
}