package com.example.model;

public class PagamentoVale extends Pagamento {

    private double saldoDisponivel;

    public PagamentoVale(double valor, double saldoDisponivel) {
        super(valor);
        this.saldoDisponivel = saldoDisponivel;
    }

    @Override
    public double calcularTaxa() {
        return 0.0; 
    }

    @Override
    public void processar() {
        if (saldoDisponivel >= getValor()) {
            System.out.println("Pagamento via Vale APROVADO! Saldo restante: R$ " + (saldoDisponivel - getValor()));
        } else {
            System.out.println("Pagamento via Vale RECUSADO! Saldo insuficiente (Saldo atual: R$ " + saldoDisponivel + ")");
        }
    }
}