package com.example.model;

public class Pix extends Pagamento implements Pagavel{

    public Pix(double valor) {
        super(valor);
    }

    @Override
    public double calcularTaxa() {
        return 0.0; 
    }

    @Override
    public void processarPagamento() {
        processar();
    }

    @Override
    public void processar() {
        System.out.println("Pagamento via Pix");
    }

}