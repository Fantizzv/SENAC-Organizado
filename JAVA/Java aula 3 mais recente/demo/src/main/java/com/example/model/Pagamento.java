package com.example.model;

public abstract class Pagamento {

    private double valor;

    public Pagamento(double valor) {
        this.valor = valor;
    }

    public double getValor() {
        return valor;
    }

    public abstract double calcularTaxa();

    public abstract void processar();

    public double calcularValorTotal() {
        return valor + calcularTaxa();
    }

    
}