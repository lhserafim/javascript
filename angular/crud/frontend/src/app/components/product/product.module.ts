// Aula 448. Produto Modelo
// Esta classe está sendo criada para ser um TEMPLATE de integração com o backend. Ela usa a tipagem do nosso
// arquivo JSON do backend

export interface Product {
    id?: number    // Utilizar o simbolo ? indica que o elemento é opcional
    name: string
    price: number
}