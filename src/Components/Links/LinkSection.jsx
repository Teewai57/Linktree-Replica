import React from 'react'
import "./Link.css"

const LinkSection = () => {

    const data = [
        {
            link: "https://twitter.com/ToyoabasiBob",
            linkTitle: "Twitter Link",
            id: "twitter"
        },
        {
            link: "https://training.zuri.team/",
            linkTitle: "Zuri Team",
            id: "btn__zuri"
        },
        {
            link: "http://books.zuri.team ",
            linkTitle: "Zuri Books",
            id: "books"
        },
        {
            link: "https://books.zuri.team/python-for-beginners?ref_id=ToyoAbasiBob",
            linkTitle: "Python Books",
            id: "book__python"
        },
        {
            link: "https://background.zuri.team",
            linkTitle: "Background Check for Coders",
            id: "pitch"
        },
        {
            link: "https://books.zuri.team/design-rules",
            linkTitle: "Design Books",
            id: "book__design"
        },
        {
            linkTitle: "Contact Me",
            id: "contact"
        },
    ]


    const links = data.map(
        (element) => {
           return(
            <a id={element.id} href={element.link} target="blank" className="text-md font-medium transition link_tag">{element.linkTitle}</a>
           )
        }
    )

    return (

      <div className='py-4 space-y-5 p-4'> 
          {links}
      </div>
    )
}

export default LinkSection
