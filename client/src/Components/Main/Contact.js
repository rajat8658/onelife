import React from 'react'
import cc from "../../assets/cc.png"

const Contact = () => {
    const data = [
        {

            body: [
                "Maulana Azad National Institute Of Technology",
                "Link Road Number 3, Near Kali Mata Mandir, Bhopal, Madhya Pradesh, India 462003",
                " +91 755 4051000, 4052000",
                "OneLife@manit.ac.in"
            ]
        }
    ];
    return (
        <div className='px-64'><br />
            <h1 className='text-center text-3xl font-bold'>Contact Details</h1><br />
            <div className='flex justify-around'>
                <div>
                    {
                        data.map((e) => {
                            return (
                                <>
                                    <code>
                                        <center>
                                            {e.body.map((k) => {
                                                return <p className='text-md'>{k}</p>
                                            })}
                                        </center>
                                    </code><br />
                                </>
                            )
                        })
                    }
                </div>
                <div>
                    <img src={cc} draggable={false} width="90%" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact