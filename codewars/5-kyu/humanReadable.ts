// @ts-nocheck
/* LINK
*  https://www.codewars.com/kata/52685f7382004e774f0001f7
**/

export function humanReadable(seconds:number):string {
    const hours: number = Math.trunc(seconds / 3600)
    const minutes: number = Math.trunc((seconds % 3600) / 60)
    const second: number = Math.trunc((seconds % 3600) % 60)
    return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${second < 10 ? `0${second}` : second}`
}
