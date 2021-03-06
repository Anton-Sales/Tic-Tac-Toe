import { indexOf } from 'ramda' // index of an item in an array or -1 if the item is not in the array

export default function getPlayer (square, moves = []) {
  const move = indexOf(square, moves)

  if (move < 0) {
    return undefined
  }

  return move % 2 === 0 ? 'x' : 'o'
}
