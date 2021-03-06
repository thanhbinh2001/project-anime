import React, { Component } from 'react'
import Anime from './Anime'

export default class CaptainTsubasa extends Component {
    render() {
        return (
            <Anime
                episodes="52/52"
                comment="1808 "
                view="9 triệu"
                bg="img/trending/captain-tsubasa.jpg"
                category={
                    <div>
                        <li>Anime</li>
                        <li>Thể thao</li>
                    </div>
                }
                name="Captain Tsubasa"
                href="/captaintsubasa_detail"
            />
        )
    }
}
