/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            structure:"AAA",
            group:"LN",
            node:"5",
            type:"DEFORMATION",
            read:500,
            threshold:300,
            date:"2017-08-17"
        },
        {
            id: 2,
            structure:"AAA",
            group:"LN",
            node:"6",
            type:"DEFORMATION",
            read:300,
            threshold:200,
            date:"2017-08-17"
        },
        {
            id: 3,
            structure:"CCC",
            group:"LN",
            node:"7",
            type:"DISPLACEMENT",
            read:3.7,
            threshold:2.5,
            date:"2017-08-17"
        }
    ]
}
