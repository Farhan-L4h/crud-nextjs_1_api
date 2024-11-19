import React from "react";

export default function PosDetail({params} : {params: { postsid: string}}) {
    return (
        <div>Post {params.postsid}</div>
    )
}