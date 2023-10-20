interface videoData {
    "id": string,
    "author": {
        "id": any,
        "subname": string,
        "avatar": string
    },
    "title": string,
    "videoWidth": number,
    "allowSkip": boolean,
    "videoHeight": number,
    "videoLength": number,
    "hastag": string,
    "url": string,
    "music": {
        "id": number,
        "name":  number
    } 
}

interface IVideoPlayer {
    data: videoData,
    classOfVideos: string,
    placeName: string,
    changeVolume: any,
    defaultVolume: any,
    index: any
}

export type {IVideoPlayer}
export default videoData