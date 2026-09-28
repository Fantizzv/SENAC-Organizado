package com.example.model;

public class ProdutoDigital extends Produto {
    private double taxaLicenca;

    public ProdutoDigital(int codigo, String nome, double preco, int quantidade, double taxaLicenca) {
        super(codigo, nome, preco, quantidade);
        this.taxaLicenca = taxaLicenca;
    }

    public double getTaxaLicenca() {
        return taxaLicenca;
    }

    public void setTaxaLicenca(double taxaLicenca) {
        this.taxaLicenca = taxaLicenca;
    }
    
    // Metodos:
    public double calcularValorTotalDigital() {
        return super.calcularValorTotal() + this.taxaLicenca;
    }
    @Override
    public void exibirResumo() {
        super.exibirResumo();
        double valorTotal = super.getPreco() * super.getQuantidade() + this.taxaLicenca * super.getQuantidade();
        System.out.println(" | Taxa de licença: R$" + String.format("%.2f", valorTotal));
    }
}