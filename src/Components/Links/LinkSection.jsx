import React from 'react'
import "./Link.css"
import { Link } from 'react-router-dom'

const LinkSection = () => {

    const data = [
        {
            anchorLink: "https://twitter.com/ToyoabasiBob",
            linkTitle: "Twitter Link",
            id: "twitter"
        },
        {
            anchorLink: "https://training.zuri.team/",
            linkTitle: "Zuri Team",
            id: "btn__zuri"
        },
        {
            anchorLink: "http://books.zuri.team ",
            linkTitle: "Zuri Books",
            id: "books"
        },
        {
            anchorLink: "https://books.zuri.team/python-for-beginners?ref_id=ToyoAbasiBob",
            linkTitle: "Python Books",
            id: "book__python"
        },
        {
            anchorLink: "https://background.zuri.team",
            linkTitle: "Background Check for Coders",
            id: "pitch"
        },
        {
            anchorLink: "https://books.zuri.team/design-rules",
            linkTitle: "Design Books",
            id: "book__design"
        }

    ]


    return (

        <div className='py-4 space-y-5 p-4'>
            {
                data.map(element => (
                    <div key={element.id}>
                        <a id={element.id} href={element.anchorLink} target="blank" className="text-md font-medium transition link_tag">{element.linkTitle}</a>
                    </div>
                ))
            }
            <Link to='/contact' id='contact' className="text-md font-medium transition link_tag">Contact Me</Link>
        </div>
    )
}

export default LinkSection
