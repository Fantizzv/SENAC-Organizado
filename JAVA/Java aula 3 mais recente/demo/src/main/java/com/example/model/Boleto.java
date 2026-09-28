package com.example.model;

public class Boleto extends Pagamento {

    private double taxaFixa;

    public Boleto(double valor, double taxaFixa) {
        super(valor);
        this.taxaFixa = taxaFixa;
    }

    @Override
    public double calcularTaxa() {
        return taxaFixa;
    }

    @Override
    public void processar() {
        System.out.println("Pagamento via boleto");
    }

}