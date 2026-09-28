package com.example.model;

public class Pedido {
    private final int numero;
    private static int totalPedidos;
    private Cliente cliente;
    private int quantidade;
    private Produto produto;

    public Cliente getCliente() {
        return cliente;
    }

    public Produto getProduto() {
        return produto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public int getNumero() {
        return numero;
    }

    public static int getTotalPedidos() {
        return totalPedidos;
    }

    public double calcularValorTotal() {
        return produto.getPreco() * quantidade;
    }

    public Pedido(Cliente cliente, Produto produto, int quantidade) {
        numero = ++totalPedidos;
        this.cliente = cliente;
        this.produto = produto;
        this.quantidade = quantidade;
    }

}