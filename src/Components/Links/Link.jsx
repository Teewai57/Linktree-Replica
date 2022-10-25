import React from 'react'

const Link = () => {

    const data = [
        {
            link: "https://training.zuri.team/",
            linkTitle: "Twitter Link",
            id: "btn_zuri"
        },
        {
            link: "http://books.zuri.team ",
            linkTitle: "Zuri Team",
            id: "books"
        },
        {
            link: "https://books.zuri.team/python-for-beginners?ref_id=<ToyoAbasiBob>",
            linkTitle: "Zuri Books",
            id: "book_python"
        },
        {
            link: "https://books.zuri.team/python-for-beginners?ref_id=<ToyoAbasiBob>",
            linkTitle: "Python Books",
            id: "book_python"
        },
        {
            link: "https://background.zuri.team",
            linkTitle: "Background Check for Coders",
            id: "pitch"
        },
        {
            link: "https://books.zuri.team/design-rules",
            linkTitle: "Design Books",
            id: "book_design"
        },

    ]


    const links = data.map(
        (element) => {
           return(
            <button href=""  className='mx-auto inline-block w-full'>
            <a href={element.link} target="blank" className='bg-[#ecebeb] hover:bg-[#d8d6d6] w-full text-md font-medium inline-block rounded py-3'>{element.linkTitle}</a>
        </button>
           )
        }
    )

    return (

      <div className='py-5 space-y-5 p-4'>
          {links}
      </div>
    )
}

export default Link
