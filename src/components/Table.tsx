import React from 'react'

type TypeTable = {
    head: Array<String>,
    children: React.ReactNode
}

function Table({ head, children }: TypeTable) {
    return (
        <div className=" overflow-x-auto shadow-md sm:rounded-lg my-7 h-[62vh]">
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0 ">
                    <tr>
                        {head.map((d, id: number) => (
                            <th key={id} scope="col" className="px-6 py-3 md:text-lg text-md">{d}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>)
}

export default Table