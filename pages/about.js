import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About(){
    return (

        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Veniam ad et non incididunt.Occaecat reprehenderit non labore non tempor non id officia quis cupidatat eu. Labore duis aute laborum voluptate quis dolor mollit occaecat et. Aute irure esse ut esse dolore culpa reprehenderit voluptate deserunt culpa. Culpa qui elit et amet sunt. Officia consectetur et velit Lorem eu sint do ex ad qui esse enim. In eiusmod mollit tempor officia dolor reprehenderit officia officia commodo.</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard" />

        </div>
            )
}