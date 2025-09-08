export class Livro {
    constructor(
        private _titulo: string,
        private _autor: string,
        private _preco: number,
        private _estoque: number
    ) {}

    // Getters
    get titulo(): string {
        return this._titulo;
    }

    get autor(): string {
        return this._autor;
    }

    get preco(): number {
        return this._preco;
    }

    get estoque(): number {
        return this._estoque;
    }

    // Setters
    set preco(novoPreco: number) {
        if (novoPreco > 0) {
            this._preco = novoPreco;
        }
    }

    set estoque(novoEstoque: number) {
        if (novoEstoque >= 0) {
            this._estoque = novoEstoque;
        }
    }

    // Métodos úteis
    vender(quantidade: number): boolean {
        if (this._estoque >= quantidade) {
            this._estoque -= quantidade;
            return true;
        }
        return false;
    }

    reporEstoque(quantidade: number): void {
        this._estoque += quantidade;
    }

    toString(): string {
        return `${this._titulo} por ${this._autor} - R$ ${this._preco.toFixed(2)} (Estoque: ${this._estoque})`;
    }
}