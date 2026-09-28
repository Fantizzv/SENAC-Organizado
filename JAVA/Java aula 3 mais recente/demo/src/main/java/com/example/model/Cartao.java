package com.example.model;

public class Cartao extends Pagamento {

    private double percentualTaxa;

    public Cartao(double valor, double percentualTaxa) {
        super(valor);
        this.percentualTaxa = percentualTaxa;
    }

    @Override
    public double calcularTaxa() {
        // Exemplo: 100 * (5 / 100) = 5.0
        return getValor() * (percentualTaxa / 100.0);
    }

    @Override
    public void processar() {
        System.out.println("Pagamento via cartão");
    }
}