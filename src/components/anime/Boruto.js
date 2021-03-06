import React, { Component } from 'react'
import Anime from './Anime'

export default class Boruto extends Component {
    render() {
        return (
            <Anime
                episodes="200/???"
                comment="1200"
                view="14 milion"
                bg="img/trending/boruto.jpg"
                category={
                    <div>
                        <li>Anime</li>
                        <li>Hành động</li>
                        <li>Võ thuật</li>
                        <li>Siêu nhiên</li>
                        <li>Shonen</li>
                    </div>
                }
                name="Boruto: Naruto next generations"
                href="/boruto_detail"
            />
        )
    }
}
