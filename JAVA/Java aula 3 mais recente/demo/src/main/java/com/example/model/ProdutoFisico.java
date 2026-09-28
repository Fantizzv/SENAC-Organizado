package com.example.model;

public class ProdutoFisico extends Produto {
    private double peso;
    private double frete;

    public ProdutoFisico(int codigo, String nome, double preco, int quantidade, double peso, double frete) {
        super(codigo, nome, preco, quantidade);
        this.peso = peso;
        this.frete = frete;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    public double getFrete() {
        return frete;
    }

    public void setFrete(double frete) {
        this.frete = frete;
    }
    // Metodos:
    @Override
    public void exibirResumo() {
        super.exibirResumo();
        double valorTotal = super.getPreco() * super.getQuantidade() + this.frete * super.getQuantidade();
        System.out.println(" | Frete: R$" + String.format("%.2f", valorTotal));
    }

}