import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'



//export type Symbol = "o"
export type Row = ["o", "o", "o"]
export type Board = [ Row, Row, Row ]

// type Status = 'pending' | 'started' | 'finished'

const emptyRow: Row = ["o", "o", "o"]
const defaultBoard: Board = [ emptyRow, emptyRow, emptyRow ] 

/* const defaultBoard = [
	['o', 'o', 'o'],
	['o', 'o', 'o'],
	['o', 'o', 'o']
] */


@Entity()
export default class Games extends BaseEntity {

 // symbol: string;

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  name: string

  
  @Column('text', {nullable:false})
  color: string

  @Column('json', {default: defaultBoard})
  board: Board
}