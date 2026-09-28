package com.example.model;

import java.util.List;

public class Produto {
    private final int codigo;
    private static int totalProdutos;
    private String nome;
    private double preco;
    private int quantidade;

    public Produto(int codigo, String nome, double preco, int quantidade) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public int getCodigo() {
        return codigo;
    }

    public static int getTotalProdutos() {
        return totalProdutos;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    // Métodos:

    public double calcularValorTotal() {
        return (preco * quantidade);
    }

    public boolean temEstoque() {
        return quantidade > 0;
    }

    public void exibirResumo() {
        System.out.println(codigo + " | " + nome + " | R$" + String.format("%.2f", preco) + " | " + quantidade);
    }

    // metodo == função:
    public Produto buscarPorCodigo(List<Produto> lista, int codigo) {
        for (Produto produto : lista) {
            if (produto.getCodigo() == codigo) {
                return produto;
            }
        }
        return null;
    }

    public boolean adicionarProduto(int qtd) {
        if (qtd <= 0)
            return false;
        quantidade += qtd;
        return true;
    }

    public boolean removerProduto(int qtd) {
        if (qtd <= 0 || qtd > quantidade)
            return false;
        quantidade -= qtd;
        return true;
    }

    public boolean aplicarDesconto(double percentual) {
        if (percentual <= 0 || percentual > 50)
            return false;
        preco -= preco * (percentual / 100);
        return true;
    }

    public boolean aplicarDesconto2(double valor, boolean fixo) {
        if (!fixo || valor <= 0 || valor > preco)
            return false;
        preco -= valor;
        return true;
    }

}