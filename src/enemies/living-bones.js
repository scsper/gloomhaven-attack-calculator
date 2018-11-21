import Enemy from './enemy'
import Level from './level';
import { LivingBones as LivingBonesDeck } from '../decks/ability'

export default class LivingBones extends Enemy {
  constructor () {
    super()

    this.name = 'Living Bones'
    this.deck = new LivingBonesDeck()

    this.addLevel(0, new Level(5, 2, 1, 0, { target: 2 }))
    this.addLevel(1, new Level(5, 3, 1, 0, { target: 2, shield: 1 }))
    this.addLevel(2, new Level(5, 3, 2, 0, { target: 2, shield: 1 }))
    this.addLevel(3, new Level(7, 3, 2, 0, { target: 2, shield: 1 }))
    this.addLevel(4, new Level(7, 3, 3, 0, { target: 2, shield: 1 }))
    this.addLevel(5, new Level(9, 3, 3, 0, { target: 2, shield: 1 }))
    this.addLevel(6, new Level(10, 4, 3, 0, { target: 2, shield: 1 }))
    this.addLevel(7, new Level(13, 4, 3, 0, { target: 2, shield: 1 }))

    this.addEliteLevel(0, new Level(6, 4, 2, 0, { target: 2 }))
    this.addEliteLevel(1, new Level(6, 4, 2, 0, { target: 3, shield: 1 }))
    this.addEliteLevel(2, new Level(7, 4, 3, 0, { target: 3, shield: 1 }))
    this.addEliteLevel(3, new Level(10, 4, 3, 0, { target: 3, shield: 1 }))
    this.addEliteLevel(4, new Level(11, 4, 4, 0, { target: 3, shield: 1 }))
    this.addEliteLevel(5, new Level(11, 4, 4, 0, { target: 3, shield: 2 }))
    this.addEliteLevel(6, new Level(11, 6, 4, 0, { target: 3, shield: 2 }))
    this.addEliteLevel(7, new Level(14, 6, 4, 0, { target: 3, shield: 2 }))
  }
}
