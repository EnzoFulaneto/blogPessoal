import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
    private id: number
	private titulo: string
	private texto: string
	private data: Date
	private tema: Tema
	private usuario: Usuario
}