package com.example.model;

public class ValePresente implements Pagavel {

    private final double valor;
    private final double saldo;

    public ValePresente(double valor, double saldo) {
        this.valor = valor;
        this.saldo = saldo;
    }

    @Override
    public double calcularValorTotal() {
        return valor;
    }

    @Override
    public void processarPagamento() {
        if (saldo >= valor) {
            System.out.println("Vale Presente APROVADO! Saldo restante: R$ " + (saldo - valor));
        } else {
            System.out.println("Vale Presente RECUSADO! Saldo insuficiente (Saldo atual: R$ " + saldo + ")");
        }
    }
}